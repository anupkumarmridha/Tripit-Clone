import Auth from "../../components/Auth/Auth"
import FooterSimple from "../../components/Footer/SimpleFooter"


const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow flex justify-center items-center">
      <div className="w-full max-w-sm p-6">
        <Auth isLogin={true} />
      </div>
    </div>

    <FooterSimple />
  </div>
  

  )
}

export default LoginPage