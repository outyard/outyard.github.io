import React from 'react';

import Container from './container';

import './article.scss';

export default ({title, children}) => {
  return (
    <article className="article">
      <Container>
        <h1 className="article-title">{title}</h1>
        {children}
      </Container>
    </article>
  );
};
