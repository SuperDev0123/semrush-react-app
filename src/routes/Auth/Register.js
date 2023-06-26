import React from 'react'

import { MetaProvider } from '@src/common/components'
import SignUp from '@src/@jumbo/components/Common/authComponents/SignUp'

const Register = () => (
  <MetaProvider title="Register">
    <SignUp variant="standard" wrapperVariant="bgColor" />
  </MetaProvider>
)

export default Register
