import React from 'react';
import blogPosts from "../../content/BlogContentData";

const BlogSection: React.FC = () => {
    return (
        <div className="flex justify-center items-center px-4 py-8">
            <div className="container mx-auto items-center text-center">
                <h2 className="text-gray-950 text-3xl md:text-4xl lg:text-5xl font-bold mb-8">More from our blog</h2>
                <div className="blog-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-4">
                    {blogPosts.map((blog, index) => {
                        return (
                            <div
                            className={`blog-item justify-self-center box-border rounded-md flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out ${
                                index === 0 ? 'block' : 'hidden md:block'
                            }`}
                            key={index}
                        >
                                <div className="flex w-full h-64 box-border rounded-md overflow-hidden justify-center items-center">
                                    <img src={blog.image} alt="blog" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col text-left mt-4 p-4">
                                    <a href={blog.link} className="mb-4 text-gray-950 text-lg md:text-xl hover:text-primary font-semibold">
                                        {blog.title}
                                    </a>
                                    <p className="text-sm md:text-base text-gray-700">{blog.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;