import React from 'react'

import { MetaProvider } from '@src/common/components'
import ForgotPassword from '@src/@jumbo/components/Common/authComponents/ForgotPassword'

const ForgotPasswordPage = () => (
  <MetaProvider title="Forgot Password">
    <ForgotPassword variant="standard" wrapperVariant="bgColor" />
  </MetaProvider>
)

export default ForgotPasswordPage
