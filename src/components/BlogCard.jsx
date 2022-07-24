import React, { Fragment } from "react";
import {
  BlogCardStyled,
  BlogCardImage,
  BlogCardTitle,
  BlogCardDescription,
  BlogCardButton,
} from "../styles/BlogCard";
function BlogCard({ image, title, description, button_name }) {
  return (
    <Fragment>
      {image && title && description && button_name && (
        <BlogCardStyled>
          <BlogCardImage>
            <img src={image.url} alt={image.name} />
          </BlogCardImage>
          <BlogCardTitle>{title}</BlogCardTitle>
          <BlogCardDescription>{description}</BlogCardDescription>
          <BlogCardButton>{button_name}</BlogCardButton>
        </BlogCardStyled>
      )}
    </Fragment>
  );
}

export default BlogCard;
