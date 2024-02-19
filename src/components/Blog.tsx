import React, { useState, useEffect } from "react";
import Overfitting from "./blogs/Overfitting";
import { Link } from 'react-router-dom';

const Blog = () => {
    const [hoveredBlogs, setHoveredBlogs] = useState(Array(3).fill(false));

    const handleMouseEnter = (index) => {
        const updatedHoveredBlogs = [...hoveredBlogs];
        updatedHoveredBlogs[index] = true;
        setHoveredBlogs(updatedHoveredBlogs);
    };

    const handleMouseLeave = (index) => {
        const updatedHoveredBlogs = [...hoveredBlogs];
        updatedHoveredBlogs[index] = false;
        setHoveredBlogs(updatedHoveredBlogs);
    };

    const blogs = [
        {
          img: "src/assets/overfitting.png",
          title: "What is Overfitting and how to prevent it?",
          description: "Overfitting is one of the most common issues in machine learning. In this blog, I am explaining most commonly used techniques to address this problem.",
          blogLink: "/components/blogs/Overfitting",  
        },

        {
            img: "src/assets/rn50-layer2.jpg",
            title: "Convolutional Neural Networks",
            description: "This article shows some interesting visualisations of feature maps computed by a convolutional neural network.",
            blogLink: "/components/blogs/FeatureMaps",
        },
    ];

    useEffect(() => {
        const blogDocs = document.querySelectorAll(".blog");
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("blog-animation-media");
            }
          });
        });
        
        blogDocs.forEach(blogDoc => {
            observer.observe(blogDoc);
        });
    
        return () => {
          observer.disconnect();
        };
      }, []);

    return (
        <div>
            <div className="header">
                <h1 className="title">Blog</h1>
            </div>
            <div className="blogs-container">
                {blogs.map((blog, index) => (
                    <Link to={blog.blogLink} style={{ textDecoration: 'none', color: "inherit"}} key={index}>
                    <div
                        key={index}
                        style={{
                            width: hoveredBlogs[index] ? '1050px' : '1000px',
                            height: hoveredBlogs[index] ? '225px' : '200px',
                            transition: 'all 0.2s ease-in-out',
                        }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        className="blog"
                        >
                        <div className="blog-content">
                            <div className="blog-img">
                                <img 
                                    src={blog.img}
                                    alt="project-img" 
                                    key={index}
                                    style={{
                                        width: hoveredBlogs[index] ? '300px' : '300px',
                                        height: hoveredBlogs[index] ? '225px' : '200px',
                                        transition: 'all 0.2s ease-in-out',
                                    }}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                />
                            </div>
                            <div className="blog-container">
                                <div className="blog-title">{blog.title}</div>
                                <div className="blog-description">{blog.description}</div>
                                <div style={{paddingTop: "40px", textAlign: "right"}}>Click to view more</div> 
                            </div>
                        </div>             
                </div>
                </Link>

                ))}
            </div>
        </div>
    );
}

export default Blog;