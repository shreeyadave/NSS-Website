import React from 'react';
import Layout from '../../Layout/Layout';
import TeamBatch from './TeamBatch';
import * as Data from './TeamData';
import HeadingSection from './HeadingSection';

const Team = () => {
  const years = Object.keys(Data)
    .filter(key => key.startsWith('Team'))
    .map(year => parseInt(year.replace('Team', '')))
    .sort((a, b) => b - a); // Sort the years in descending order

  return (
    <Layout>
      <HeadingSection />
      <TeamBatch year={2000} TeamList={Data.sir} /> {/* If year is 2000, it means it's for Faculty Advisor */}
      {years.map(year => (
        <TeamBatch key={year} year={year} TeamList={Data[`Team${year}`]} />
      ))}
    </Layout>
  );
};

export default Team;
