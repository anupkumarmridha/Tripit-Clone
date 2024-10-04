// /Users/anup/Developer/Tripit-Clone/tripit-clone/src/content/BlogContent.ts

interface BlogPost {
    title: string;
    description: string;
    image: string;
    link: string;
}

const blogPosts: BlogPost[] = [
    {
        title: "New Search Tool Added for Locating Trip Details in TripIt for iOS",
        description: "With a few keywords, you can now search within your travel plans (past and upcoming) to find trip details.",
        image: "https://www.tripit.com/sites/g/files/sqenrx236/files/2022-08/More-from-our-blog-0422.png",
        link:"https://www.tripit.com/web/blog/news-culture/dont-scroll-search-tripit-adds-new-search-tool"
    },
    {
        title: "City Break: Manhattan",
        description: "In this series from TripIt, we explore some of the world’s best cities for planning a quick getaway or extending a work trip.",
        image: "https://www.tripit.com/sites/g/files/sqenrx236/files/2022-08/more_from_our_blog_NOV_2x.png",
         link:"https://www.tripit.com/web/blog/travel-tips/city-break-manhattan"
    },
    {
        title: "New Enhancements for Navigating Travel Based on Your Vaccination Status",
        description: "Find information about vaccination rates and requirements, approved vaccines, exemptions for vaccinated travelers, and more, right in TripIt’s COVID-19 travel guidance feature.",
        image: "https://www.tripit.com/sites/g/files/sqenrx236/files/2022-08/screen_shot_2021-10-01_at_9.01.20_am_720.png",
         link:"https://www.tripit.com/web/blog/news-culture/new-app-enhancements-travel-vaccination-status"
    }
];

export default blogPosts;