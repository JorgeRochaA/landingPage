import React from "react";
import BlogCard from "../components/BlogCard";
import CardBlogData from "./cardBlogData.json";
import "../styles/BlogSection/BlogSection.scss";
function BlogSection() {
  return (
    <div className="blog_container">
      <div>
        <div className="blog_title_container">
          <div className="blog_title">Get more from our blog</div>
          <div className="blog_description">
            There are a lot of different components that will help you create
            the perfect look for your project
          </div>
        </div>
        <div className="blog_button_container">
          <div className="blog_button"></div>
        </div>
      </div>
      <div className="blog_cards_container">
        {CardBlogData.map((cardBlogData, index) => {
          return (
            <BlogCard
              key={index}
              image={cardBlogData.image}
              title={cardBlogData.title}
              description={cardBlogData.description}
              button_name={cardBlogData.button_name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogSection;
