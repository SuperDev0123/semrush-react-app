import { useMutation } from 'react-query'
import { rejectResponse } from '@src/common/api'

const useResults = (id, message, onSuccess) => {
  return useMutation(() => rejectResponse(id, message), {
    onSuccess,
  })
}

export default useResults
