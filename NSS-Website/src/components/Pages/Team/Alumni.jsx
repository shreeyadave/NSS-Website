import React from 'react';
import Layout from '../../Layout/Layout';
import AlumniBatch from './AlumniBatch';
import * as Data from './TeamData';
import HeadingSection from './HeadingSection';

const Alumni = () => {
  const years = Object.keys(Data).filter(key => key.startsWith('Team'));

  return (
    <Layout>
      <HeadingSection />
      <AlumniBatch year={2000} alumniList={Data.sir} /> {/* If year is 2000, it means it's for Faculty Advisor */}
      {years.map(year => (
        <AlumniBatch key={year} year={parseInt(year.replace('Team', ''))} alumniList={Data[year]} />
      ))}
    </Layout>
  );
};

export default Alumni;
