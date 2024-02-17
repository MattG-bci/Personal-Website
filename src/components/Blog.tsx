import React, { useState } from "react";
import Overfitting from "./overfitting";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

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
          img: "src/assets/pepper.jpeg",
          title: "What is Overfitting and how to prevent it?",
          description: "Overfitting is one of the most common issues in machine learning.",
          blogLink: "./overfitting.tsx",  
        },

        {
            img: "src/assets/pepper.jpeg",
            title: "Convolutional Neural Networks",
            description: "This article shows some interesting visualisations of feature maps computed by a convolutional neural network.",
            blogLink: "./overfitting.tsx",
        },
    ];

    return (
        <div>
            <div className="header">
                <h1 className="title">Blog</h1>
            </div>
            <div className="blogs-container">
                {blogs.map((blog, index) => (
                    <Link to={blog.blogLink} style={{ textDecoration: 'none', color: "inherit"}}>
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
                                <img src={blog.img} height="150" width="360" alt="project-img" />
                            </div>
                            <div className="blog-container">
                                <div className="blog-title">{blog.title}</div>
                                <div className="blog-description">{blog.description}</div>
                            </div>
                        </div>
                
                    <div className="view-text">Click to view more</div>
                    
                </div>
                </Link>

                ))}
            </div>
        </div>
    );
}

export default Blog;