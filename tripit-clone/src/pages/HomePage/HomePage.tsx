import ContentHome from "../../components/Home/ContentHome"
import LandingHome from "../../components/Home/LandingHome"
import Layout from "../../components/Layout/Layout"
import { home_page_content } from "../../content/HomeContentData"

import BlogSection from "../../components/Home/BlogSection"
import CommonSection from "../../components/Common/CommonSection"
import VideoSection from "../../components/Home/VideoSection"

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
        <VideoSection/>
        <CommonSection
        title="Try the travel app that keeps up with you"
        description="So many trips, so little time. Let TripIt worry about the details, so you don't have to."
        buttonText="Sign Up—It's Free!"
      />
      </div>

    </Layout>
  )
}

export default HomePage