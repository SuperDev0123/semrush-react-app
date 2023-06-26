import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const Captcha = ({ setIsCaptchaValid }) => {
  console.log(process.env)
  function onChange(value) {
    if (value) {
      setIsCaptchaValid(false)
    } else {
      setIsCaptchaValid(true)
    }
  }
  return (
    <div>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_MIX_RE_CAPTCHA_SITEKEY}
        onChange={onChange}
      />
    </div>
  )
}

export default Captcha
