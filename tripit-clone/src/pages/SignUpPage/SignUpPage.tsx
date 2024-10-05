import React from 'react'
import Auth from '../../components/Auth/Auth'
import FooterSimple from '../../components/Footer/SimpleFooter'


const SignUpPage:React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
  <div className="flex-grow flex justify-center items-center">
    <Auth isLogin={false} />
  </div>

  <FooterSimple />
</div>

  )
}

export default SignUpPage