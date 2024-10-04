
import blogPosts from "../../content/BlogContentData"

const BlogSection: React.FC = () => {
    return (
    <div className="flex justify-center items-center px-4 py-4">
        <div className="container items-center text-center">
            <h2 className="text-gray-950 text-5xl">More from our blog</h2>
            <div className="blog-list flex justify-center px-4 py-4">
                {blogPosts.map((blog, index) => {
                    return (
                        <div className="blog-item m-4 w-full" key={index}>
                            <div className="flex w-[358px] h-[238px] box-border justify-center text-center items-center">
                                <img src={blog.image} alt="blog" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col text-left mt-4">
                                <a href="" className="mb-4 text-gray-950 text-md font-semibold">{blog.title}</a>
                                <p>{blog.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>


    )
}

export default BlogSection