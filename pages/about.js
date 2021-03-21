import { array } from 'prop-types';
import React from 'react';
import { Header } from '../src/components';

export default function About({ projects }) {
  return (
    <>
      <Header />
      <div>
        My name or something
      </div>
      <div>
        My image
      </div>
      <div>
        { /* eslint-disable-next-line max-len */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div>
        <div>----------My Repos------------------</div>
        {projects.map((project) => (
          <div key={project.url}>
            <div>{project.name}</div>
            <div>{project.html_url}</div>
            <div>{project.description || ''}</div>
            <div>{project.url}</div>
            <div>{project.homepage}</div>
            <div>----------------------------</div>
          </div>
        ))}
      </div>
    </>
  );
}

About.propTypes = {
  projects: array.isRequired,
};

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/noriller/repos');
  const data = await res.json();

  return {
    props: {
      projects: data,
    },
  };
}
