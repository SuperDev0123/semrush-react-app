import React, { useContext, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LoadingContext } from 'react-router-loading'
import { useParams } from 'react-router-dom'
import { maxBy } from 'lodash'
import { When, Toaster } from '@src/common/components'
import { instanceAxios } from '@src/common/config/axios'
import AppContext from '@src/@jumbo/components/contextProvider/AppContextProvider/AppContext'
import { resultStatusTypes } from './common/constants'
import { winnerResultStatus } from '@src/common/constants'
import Result from './partials/Result'
import { Error } from './ui/components'

const bgImage = '/images/badge.png'
const runningManBgImage = '/images/icons/runningMan.png'

const Results = () => {
  const { id, slug } = useParams()
  const { setHasSideBarFilter, setLayout, setHasHeaderStepper } =
    useContext(AppContext)
  const loadingContext = useContext(LoadingContext)
  const { authUser } = useSelector(({ auth }) => auth)
  const [check, setCheck] = useState(false)
  const [dataList, setDataList] = useState([])
  const [winner, setWinner] = useState(null)
  const [responseStatus, setResponseStatus] = useState('')
  const [lead, setLead] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [pollData, setPollData] = useState({
    textA: '',
    textB: '',
    fileA: '',
    fileB: '',
    pollTemplate: '',
    pollTitle: '',
    pollSubTitle: '',
    isSharable: false,
    sharableSlug: null,
    isPollOwner: false,
    lastUpdateAt: '',
  })
  const [responseStatistics, setResponseStatistics] = useState({
    total_accepted_responses: 0,
    total_requested_responses: 0,
    updated_at: '',
    start_date: '',
    end_date: '',
    elapsed_time: '',
  })

  const loading = async () => {
    if (isLoading) return
    await getList()
    loadingContext.done()
  }

  useEffect(() => {
    loading().then((res) => res)
    setHasSideBarFilter(false)
    setLayout('vertical-paged')
    setHasHeaderStepper(false)
  }, [id, slug])

  function getList() {
    const token = localStorage.getItem('token')
    let url_part = !!slug ? '?shareable_slug=' + slug : ''
    setIsLoading(true)
    instanceAxios.defaults.headers.common.Authorization = 'Bearer ' + token
    instanceAxios
      .get(`v1/polls/${id}/details${url_part}`)
      .then((response) => {
        const responseData = response.data
        const isSharable = !!responseData.poll.is_shareable
        const sharableSlug = responseData.poll.shareable_slug
        const ownerId = responseData.poll.owner_id
        const authedUser = authUser.id ?? 0

        setIsLoading(false)

        // if (
        //   slug &&
        //   authedUser !== ownerId &&
        //   (!isSharable || sharableSlug !== slug)
        // ) {
        //   window.location.href = '/404'
        // }

        setPollData({
          textA: responseData.poll.text_a,
          textB: responseData.poll.text_b,
          fileA: responseData.poll.option_a,
          fileB: responseData.poll.option_b,
          pollTitle: responseData.poll.title,
          pollSubTitle: responseData.poll.question,
          pollTemplate: responseData.poll.type,
          pollTemplateId: responseData.poll.template_id,
          isSharable,
          sharableSlug,
          isPollOwner: authedUser === ownerId,
          lastUpdateAt: responseData.poll.updated_at,
          preview_slug: responseData.poll.preview_slug,
          responsesRequired: responseData.poll.responses_required,
          isMyAudience: responseData.poll.test_type === 'my_audience',
        })

        setResponseStatus(responseData.status)
        setResponseStatistics({
          total_accepted_responses: responseData.total_accepted_responses,
          total_requested_responses: responseData.total_requested_responses,
          updated_at: responseData.updated_at,
          start_date: responseData.poll.created_at,
          end_date: responseData.poll.updated_at,
          elapsed_time: responseData.elapsed_time,
        })
        setLead({
          status: responseData.status,
          poll_lead_status: responseData.poll_lead_status,
          poll_lead_status_item: responseData.poll_lead_status_item,
          poll_lead_status_message: responseData.poll_lead_status_message,
        })

        const dataList = [
          {
            name: responseData.poll.text_a,
            value: responseData.option_a_good,
            rawCount: responseData.option_a_good,
            percentage: responseData.option_a_good,
            option: 'optionA',
          },
          {
            name: responseData.poll.text_b,
            value: responseData.option_b_good,
            rawCount: responseData.option_b_good,
            percentage: responseData.option_b_good,
            option: 'optionB',
          },
        ]
        setDataList(dataList)
        setWinner(
          maxBy(dataList, function (v) {
            return v.percentage
          })
        )
        setCheck(true)
      })
      .catch((e) => {
        Toaster.error(e.response.data.message || e.response.statusText)
        setIsLoading(false)
      })
  }

  if (responseStatus === resultStatusTypes.FAILED) return <Error />

  const getImageUrl = () => {
    switch (lead.poll_lead_status) {
      case winnerResultStatus.leading:
        return runningManBgImage
      case winnerResultStatus.winner:
        return bgImage
      case winnerResultStatus.tied:
        return null
      default:
        return null
    }
  }

  const iconUrl = getImageUrl()

  const propertyTabCategories = dataList.map((item) => ({
    id: item.name,
    name: item.name,
    slug: item.name,
    option: item.option,
  }))

  const getMenuLabelWithLoading = (menuName = '') => {
    return isLoading ? menuName + ' ...' : menuName
  }

  const DropDownMenuItems = [getMenuLabelWithLoading('Refresh'), 'Poll Preview']

  pollData.isPollOwner &&
    DropDownMenuItems.push(getMenuLabelWithLoading('Share'))

  return (
    <>
      <When condition={check}>
        <Result
          onRefresh={loading}
          loading={isLoading}
          lead={lead}
          pollData={pollData}
          responseStatistics={responseStatistics}
          propertyTabCategories={propertyTabCategories}
          iconUrl={iconUrl}
          dataList={dataList}
          winner={winner}
          id={id}
          slug={slug}
          getList={loading}
        />
      </When>
    </>
  )
}

export default Results
