import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Article from '../components/article';

import '../styles/reset.scss';

export default () => (
  <Layout>
    <SEO title="Outyard - About the hackathon" />

    <Article title="About Outyard">
      <p>Outyard is a hackathon at Uppsala University. The hackathon is meant to inspire personal projects and is a great way to learn programming.</p>
      <p><a href="https://discord.gg/WeTRnTc" target="_blank" rel="noreferrer">Join us on Discord</a> to get notified about future hackathons. We recommend you have moderate programming experience and can draw things to the screen.</p>
      <p>Outyard was started early 2020 and is organized by Carl Enlund (<a href="mailto:carl@crl.io">carl@crl.io</a>).</p>
    </Article>
  </Layout>
);
