import ContentHome from "../components/Home/ContentHome"
import LandingHome from "../components/Home/LandingHome"
import Layout from "../components/Layout"
import { home_page_content } from "../content/HomeContentData"

import BlogSection from "../components/Home/BlogSection"

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
        <BlogSection/>
      </div>

    </Layout>
  )
}

export default HomePage