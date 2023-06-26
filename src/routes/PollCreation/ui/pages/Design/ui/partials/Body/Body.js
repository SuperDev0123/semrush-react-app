/* eslint-disable camelcase */
import React, { useEffect, useState, useContext } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useForm } from 'react-hook-form'
import { useHistory, useLocation } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import queryKeys from '@src/common/queryKeys'
import { browserRoutes } from '@src/common/browserRoutes'
import { Form, PromptProvider } from '@src/routes/PollCreation/ui/components'
import { fetchTemplateByID } from '@src/routes/PollCreation/common/api'
import { createPoll, uploadPollResource, updatePoll } from '@src/common/api'
import {
  pollCreationSteps,
  promptMessages,
} from '@src/routes/PollCreation/common/constants'
import { createDynamicYupSchema } from '@src/routes/PollCreation/ui/pages/Design/common/utils'
import { PollCreationContext } from '@src/routes/PollCreation/common/context/PollCreationContext'
import { Storage } from '@src/routes/PollCreation/common/services'
import { previewPoll, getYoutubeID } from '@src/common/functions/tools'
import { Toaster } from '@src/common/components'

import { TestDetailsBlock, PreferenceTestBlock } from '../../blocks'

const useQueryParams = (search) => {
  return React.useMemo(() => new URLSearchParams(search), [search])
}

const Body = () => {
  const history = useHistory()
  const [preview, setPreview] = useState()
  const [pollId, setPollId] = useState(0)
  const [pollPreviewSlug, setPollPreviewSlug] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const queryClient = useQueryClient()
  const { search } = useLocation()

  const query = useQueryParams(search)

  const {
    templateID,
    pollType,
    setActiveStep,
    setDesignStepFlow,
    setPollType,
    ...pollCreationFlow
  } = useContext(PollCreationContext)
  const designFlow = pollCreationFlow[pollCreationSteps.DESIGN]
  const [fieldInfoStruct, setFieldInfoStruct] = useState({})

  const fetchTemplateQuery = useQuery({
    queryKey: [queryKeys.FETCH_TEMPLATE_BY_ID, templateID],
    queryFn: () => fetchTemplateByID(templateID),
    onSuccess: (data) => {
      const { test_details, test_setup } = data.sections
      const combinedFields = [
        ...Object.values(test_details.fields),
        ...Object.values(test_setup.fields),
      ]
      const fieldInfoStruct = {}
      combinedFields.forEach(({ name, type }) => {
        fieldInfoStruct[name] = type
      })
      setPollType(data.poll_type)
      setFieldInfoStruct(fieldInfoStruct)
    },
    enabled: !!templateID,
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 2000,
        }
      )
      history.push(browserRoutes.HOME())
    },
    staleTime: 0,
    cacheTime: 0,
  })

  const testDetails = fetchTemplateQuery.data.sections.test_details
  const testSetup = fetchTemplateQuery.data.sections.test_setup

  const mergedFields = [
    ...Object.values(testDetails.fields ?? {}),
    ...Object.values(testSetup.fields ?? {}),
  ]

  const yepSchema = mergedFields.reduce(createDynamicYupSchema, {})
  const methods = useForm({
    resolver: yupResolver(yup.object().shape(yepSchema)),
    mode: 'all',
  })

  const createPollMutation = useMutation(createPoll, {
    onSuccess: (data) => {
      const pollDataStorage = Storage.get(
        `${templateID}-${pollCreationSteps.DESIGN}`,
        true
      )
      Storage.set(`${templateID}-${pollCreationSteps.DESIGN}`, {
        ...pollDataStorage,
        poll_id: data.poll_id,
        preview_slug: data.preview_slug,
      })
      setPollId(data.poll_id)
      setPollPreviewSlug(data.preview_slug)

      if (preview) {
        setPreview(false)
        previewPoll(data)
      } else {
        setActiveStep(pollCreationSteps.AUDIENCE, true)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries('create')
    },
  })

  const uploadPollResourceMutation = useMutation(uploadPollResource, {
    onSuccess: (data) => {
      methods.setValue(data.fieldName, [data.fileInfo])
      setIsUploading({ ...isUploading, [data.fieldName]: false })
    },
  })

  const updatePollMutation = useMutation(updatePoll, {
    onSuccess: (data) => {
      const pollDataStorage = Storage.get(
        `${templateID}-${pollCreationSteps.DESIGN}`,
        true
      )
      Storage.set(`${templateID}-${pollCreationSteps.DESIGN}`, {
        ...pollDataStorage,
        ...data,
      })
      if (preview) {
        setPreview(false)
        previewPoll(data)
      } else {
        setActiveStep(pollCreationSteps.AUDIENCE, true)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries('create')
    },
  })

  const onFieldValueChange = ({
    fieldName,
    fileInfo,
    field,
    validationResult,
  }) => {
    if (field.type === 'file' && !validationResult) {
      setIsUploading({ ...isUploading, [fieldName]: true })
      const formData = new FormData()
      formData.append('fieldName', fieldName)
      formData.append('file', fileInfo[0])
      formData.append('size', fileInfo[0].size)
      formData.append('name', fileInfo[0].name)
      uploadPollResourceMutation.mutate(formData)
    }
  }

  const onSubmitHandler = (restFormData, isPreview = false) => {
    const data = {
      ...restFormData,
      isDone: true,
      pollTemplate: pollType,
      poll_id: pollId,
      preview_slug: pollPreviewSlug,
      templateId: templateID,
    }

    if (data.pollTemplate === 'video') {
      data.fileA = `https://www.youtube.com/embed/${getYoutubeID(data.fileA)}`
      data.fileB = `https://www.youtube.com/embed/${getYoutubeID(data.fileB)}`
    }

    setDesignStepFlow(data)
    Storage.set(`${templateID}-${pollCreationSteps.DESIGN}`, data)

    const newData = {
      pollCreate: {
        isDone: data.isDone,
        pollTitle: data.pollTitle,
        pollSubTitle: data.pollSubTitle,
        textA: data.textA,
        textB: data.textB,
        pollTemplate: pollType,
        templateId: templateID,
      },
    }

    if (['audio', 'image'].includes(pollType)) {
      newData.pollCreate.optionA = data.fileA[0].path
      newData.pollCreate.optionB = data.fileB[0].path
    } else if (pollType === 'video') {
      newData.pollCreate.optionA = data.fileA
      newData.pollCreate.optionB = data.fileB
    } else {
      newData.pollCreate.optionA = methods.getValues('fileA')
      newData.pollCreate.optionB = methods.getValues('fileB')
    }

    isPreview && setPreview(true)
    // setActiveStep(pollCreationSteps.AUDIENCE, true)
    if (!pollId) {
      createPollMutation.mutate(newData)
    } else {
      updatePollMutation.mutate({
        data: newData,
        poll_id: pollId,
      })
    }
  }

  useEffect(() => {
    if (!search) {
      const pollDataStorage = Storage.get(
        `${templateID}-${pollCreationSteps.DESIGN}`,
        true
      )
      setDesignStepFlow(pollDataStorage)
      setPollId(pollDataStorage.poll_id)
      setPollPreviewSlug(pollDataStorage.preview_slug)
    } else {
      const queryParams = {
        pollTitle:
          query.get('pollTitle') || testDetails.fields.test_name.default,
        pollSubTitle:
          query.get('pollSubTitle') || testSetup.fields.question.default,
        textA: query.get('textA') || testSetup.fields.option_a.default,
        textB: query.get('textB') || testSetup.fields.option_b.default,
        fileA: [{ path: query.get('fileA') || '', name: 'a.jpg', size: 2190 }],
        fileB: [{ path: query.get('fileB') || '', name: 'b.jpg', size: 2190 }],
        isDone: true,
        poll_id: null,
      }
      setDesignStepFlow(queryParams)
    }

    // if (pollDataStorage) {
    //   if (queryParams.pollTitle !== '' && !pollDataStorage.poll_id) {
    //     Storage.set(`${templateID}-${pollCreationSteps.DESIGN}`, queryParams)
    //   } else {
    // Storage.delete(`${templateID}-${pollCreationSteps.DESIGN}`)
    //   }
    //   setPollId(pollDataStorage.poll_id)
    //   setPollPreviewSlug(pollDataStorage.preview_slug)
    // } else if (queryParams.pollTitle !== '') {
    //   setDesignStepFlow(queryParams)
    //   Storage.set(`${templateID}-${pollCreationSteps.DESIGN}`, queryParams)
    // } else {
    //   methods.reset()
    // }
  }, [templateID, testDetails, testSetup])

  useEffect(() => {
    methods.reset()
  }, [history.location.pathname])

  useEffect(() => {
    const { isDone, ...formData } = designFlow
    if (isDone) {
      Object.entries(formData).forEach(([name, value]) => {
        if (fieldInfoStruct[name] === 'text') {
          value = value[0].path ?? value ?? ''
        }

        methods.setValue(name, value, { shouldValidate: true })
      })
    } else {
      methods.reset()
    }
  }, [designFlow, fieldInfoStruct])

  return (
    <PromptProvider
      condition={methods.formState.isDirty}
      message={promptMessages.UNSAVED_CHANGES}
    >
      <Form methods={methods} onSubmit={onSubmitHandler}>
        <TestDetailsBlock
          isLoading={fetchTemplateQuery.isLoading}
          data={testDetails}
        />
        <PreferenceTestBlock
          onSubmitHandler={onSubmitHandler}
          onFieldValueChange={onFieldValueChange}
          methods={methods}
          isLoading={fetchTemplateQuery.isLoading}
          actionLoading={createPollMutation.isLoading}
          data={testSetup}
          formData={designFlow}
          isUploading={isUploading}
        />
      </Form>
    </PromptProvider>
  )
}

export default Body
