
import blogPosts from "../../content/BlogContentData"


const BlogSection: React.FC = () => {
    return (
        
    <div className="flex justify-center items-center px-4 py-4">
        <div className="container items-center text-center">
            <h2 className="text-gray-950 text-5xl">More from our blog</h2>
            <div className="blog-list flex justify-center px-4 py-4">
                {blogPosts.map((blog, index) => {
                    return (
                        <div
                            className={`blog-item m-4 justify-self-center box-border rounded-md flex flex-col items-center ${
                                index === 0 ? 'block' : 'hidden md:block'
                            }`}
                            key={index}
                        >
                            <div className="flex w-[358px] h-[238px] box-border rounded-md justify-center text-center items-center">
                                <img src={blog.image} alt="blog" className="w-full h-full object-cover box-border rounded-md" />
                            </div>
                            <div className="flex flex-col text-left mt-4">
                                <a href={blog.link} className="mb-4 text-gray-950 text-md hover:text-primary font-semibold">
                                    {blog.title}
                                </a>
                                <p className="box-border">{blog.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        
       
    </div>
    )
}

export default BlogSection