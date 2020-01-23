import React from 'react';

import Hackathon from '../components/hackathon';
import Layout from '../components/layout';
import Project from '../components/project';
import SEO from '../components/seo';

import '../styles/reset.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Outyard" />
    
    <Hackathon
        id="001"
        date="2020-01-24"
        title="Unnecessary Tools">
      <Project
          title="Find all photos of your cat"
          image="/images/cat.jpg"
          files="#"
          github="#">
        <p>An alternative word is English puss (extended as pussy and pussycat). Attested only from the 16th century, it may have been introduced from Dutch poes or from Low German puuskatte, related to Swedish kattepus, or Norwegian pus, pusekatt. Similar forms exist in Lithuanian puižė and Irish puisín or puiscín. The etymology of this word is unknown, but it may have simply arisen from a sound used to attract a cat.</p>
      </Project>

      <Project
          title="Word repeater"
          image="/images/word.jpg"
          files="#"
          github="#">
        <p>In July 2012, when the discovery of the Higgs boson was announced at CERN, Fabiola Gianotti, the spokesperson of the ATLAS experiment, attracted comment by using the font in her presentation of the results.</p>
      </Project>

      <Project
          title="Search the web for hamburger prices"
          image="/images/hamburger.jpg"
          files="#"
          github="#">
        <p>Condiments might be added to a hamburger or may be offered separately on the side including ketchup, mustard, mayonnaise, relish, salad dressings and barbecue sauce.</p>
      </Project>
    </Hackathon>
  </Layout>
);

export default IndexPage;
