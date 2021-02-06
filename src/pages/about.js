import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Article from '../components/article';

import '../styles/reset.scss';

export default () => (
  <Layout>
    <SEO title="Outyard - About the hackathon" />

    <Article title="What is Outyard?">
      <img src="/images/code.jpg" alt="" />
      <p><strong>Outyard is an independently organized hackathon at Uppsala University. The hackathon is meant to inspire personal programming projects and is an excellent way to learn programming and working under intense deadlines.</strong></p>
      <p><a href="https://discord.gg/WeTRnTc" target="_blank" rel="noreferrer">Join us on Discord</a>, build something awesome and get inspired by the creations of others.</p>
      <p>Moderate programming experience is recommended. Unsure of your skill level? Don&rsquo;t worry, we&rsquo;re all here to learn.</p>
      <p>Outyard is organized by Carl Enlund (<a href="mailto:carl@crl.io">carl@crl.io</a>)</p>
    </Article>
  </Layout>
);
