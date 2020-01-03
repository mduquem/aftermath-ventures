import React from 'react';
import { Helmet } from 'react-helmet';

import classes from './Blog.module.css';

const Blog = () => {
  return (
    <div className={classes.Blog}>
      <Helmet>
        <title>Blog - Aftermath Ventures</title>
        <meta
          name="description"
          content="Descubre con nosotros lo último en emprendimiento, programación y marketing digital"
        />
      </Helmet>
      <h1>
        Blog<span>.</span>
      </h1>
    </div>
  );
};

export default Blog;
