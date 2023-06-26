import React from 'react'

import { MetaProvider } from '@src/common/components'
import SignIn from '@src/@jumbo/components/Common/authComponents/SignIn'

const Login = () => (
  <MetaProvider title="Login">
    <SignIn variant="standard" wrapperVariant="bgColor" />
  </MetaProvider>
)

export default Login
