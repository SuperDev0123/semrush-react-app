import { useMutation } from 'react-query'

import queryKeys from '@src/common/queryKeys'
import { changeSettings } from '@src/common/api'
import { Toaster } from '@src/common/components'

const useChangeSettings = () => {
  return useMutation({
    mutationKey: queryKeys.AUTHENTICATION_CHANGE_SETTINGS,
    mutationFn: changeSettings,
    onSuccess: () => {
      window.location.href = '/billing'
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
    },
  })
}

export default useChangeSettings
