import React, { Fragment } from "react";
import "../styles/BlogCard/BlogCard.scss";
function BlogCard({ image, title, description, button_name }) {
  return (
    <Fragment>
      {image && title && description && button_name && (
        <div className="blog_card">
          <div className="blog_card_image">
            <img src={image.url} alt={image.name} />
          </div>
          <div className="blog_card_title">{title}</div>
          <div className="blog_card_description">{description}</div>
          <div className="blog_card_button">{button_name}</div>
        </div>
      )}
    </Fragment>
  );
}

export default BlogCard;
