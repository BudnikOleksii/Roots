import React from 'react';
import styles from './App.module.scss';
import { Header } from './Header';
import { TeamSection } from './TeamSection';
import { SectionForm } from './SectionForm';
import { SectionOurMission } from './SectionOurMission';
import { SectionPlaces } from './SectionPlaces';
import { Footer } from './Footer';

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <TeamSection />
      <SectionForm />
      <SectionOurMission />
      <SectionPlaces />
      <Footer />
    </div>
  );
};
