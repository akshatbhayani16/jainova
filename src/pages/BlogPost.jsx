import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the blog post with the matching ID
  const blogPost = blogPosts.find(post => post.id === id);

  // If blog post is not found, redirect to blog list
  React.useEffect(() => {
    if (!blogPost) {
      navigate('/blog');
    }
  }, [blogPost, navigate]);

  if (!blogPost) {
    return null;
  }

  return (
    <div className="pt-20 bg-[#F7F9FC] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Featured Image */}
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl mb-8">
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-[#1F3C88] text-white px-4 py-1 rounded-full text-sm">
                  {blogPost.category}
                </span>
                <span className="text-white text-sm">{blogPost.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {blogPost.title}
              </h1>
              <div className="flex items-center text-white/90">
                <span className="mr-4">By {blogPost.author}</span>
                <span>{blogPost.date}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none text-[#5C6B8A]"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-[#F7F9FC] text-[#1F3C88] px-4 py-2 rounded-full text-sm hover:bg-[#1F3C88] hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            {/* <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <button className="bg-[#1F3C88] text-white p-2 rounded-full hover:bg-[#4A6CF7] transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                <button className="bg-[#1F3C88] text-white p-2 rounded-full hover:bg-[#4A6CF7] transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="bg-[#1F3C88] text-white p-2 rounded-full hover:bg-[#4A6CF7] transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
              </div>
            </div> */}

            {/* Back to Blog List */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link 
                to="/blog"
                className="inline-flex items-center text-[#1F3C88] hover:text-[#4A6CF7] font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost; 