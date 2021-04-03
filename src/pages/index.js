import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

import Hackathon from '../components/hackathon';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default () => {
  const {
    allHackathonsYaml,
    allProjectsYaml,
  } = useStaticQuery(graphql`
    query {
      allHackathonsYaml(sort: {fields: start, order: ASC}) {
        nodes {
          id
          start
          title
          end
          projects
          parent {
            ... on File {
              name
            }
          }
        }
      }
      allProjectsYaml(sort: {fields: title}) {
        nodes {
          id
          author
          description
          download
          site
          source
          title
          tools
          type
          video
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `);
debugger;
  return (
    <Layout>
      <SEO title="Outyard - Hackathon at Uppsala University" />

      <div className="hackathon-list">
        {allHackathonsYaml.nodes
            .reverse()
            .map((hackathon) =>
              <div key={hackathon.id} className="hackathon-list-item">
                <Hackathon
                    id={hackathon.parent.name}
                    title={hackathon.title}
                    start={hackathon.start}
                    end={hackathon.end}
                    isTeaser={!hackathon.projects}
                    projects={
                      hackathon.projects && hackathon.projects.map((hackathonProject) => {
                        return allProjectsYaml.nodes.find((project) => {
                          return project.parent.name === hackathonProject;
                        });
                      })
                    }
                    />
              </div>
            )
        }
      </div>
    </Layout>
  );
};
