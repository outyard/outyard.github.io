import React from 'react';

import Layout from '../components/layout.js';
import Meta from '../components/meta.js';
import Article from '../components/article.js';

export default () => {
  return (
    <Layout>
      <Meta title="Outyard - About the hackathon" />
      <Article title="About Outyard">
        <p>
          Outyard is a hackathon at Uppsala University.
          The hackathon is meant to inspire personal projects and is a great way to learn programming.
        </p>
        <p>
          Join us on Discord and get notified about future hackathons.
          We recommend you have moderate programming experience and can for example draw things to the screen.
        </p>
      </Article>
    </Layout>
  );
};
