import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

import './index.scss';
import Hackathon from '../components/hackathon.js';
import Layout from '../components/layout.js';
import Meta from '../components/meta.js';

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
          media
          site
          source
          title
          tools
          type
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Meta title="Outyard - Hackathon at Uppsala University" />

      <div className="hackathon-list">
        {allHackathonsYaml.nodes
            .slice()
            .reverse()
            .map((hackathon) =>
              <div
                  key={hackathon.id}
                  id={hackathon.id}
                  className="hackathon-list-item"
                  >
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
