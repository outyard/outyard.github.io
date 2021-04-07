import React from 'react';

import Layout from '../components/layout.js';
import Meta from '../components/meta.js';
import Article from '../components/article.js';

export default () => {
  return (
    <Layout>
      <Meta title="Outyard - About the hackathon" />
      <Article title="About">
        <p>
          Outyard is a hackathon at Uppsala University.
          The hackathon is meant to inspire personal projects and is an excellent way to learn programming.
        </p>
        <p>
          <a href="https://discord.gg/h3nfZmqKYN" target="_blank" rel="noreferrer">Join us on Discord</a> to get notified about future hackathons.
          We recommend you have moderate programming experience and can for example draw things to the screen.
        </p>
        <p>
          Outyard was started 2020 and is organized by Carl Enlund (<a href="mailto:carl@crl.io">carl@crl.io</a>).
        </p>
      </Article>
    </Layout>
  );
};
