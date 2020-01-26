import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import Hackathon from '../components/hackathon';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <Hackathon title="Page Not Found">
    </Hackathon>
  </Layout>
);

export default NotFoundPage;
