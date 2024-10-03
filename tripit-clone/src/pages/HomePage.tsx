import ContentHome from "../components/Home/ContentHome"
import LandingHome from "../components/Home/LandingHome"
import Layout from "../components/Layout"
import { home_page_content } from "../content/HomeContentData"

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="relative">
        <LandingHome />
        {home_page_content.map((content, index)=>{
          return (
            <ContentHome key={index} content={content} index={index}/>
          )
        })}
      </div>
    </Layout>
  )
}

export default HomePage