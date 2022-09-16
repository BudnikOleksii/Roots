import React from 'react';
import './App.scss';
import { Header } from './Header';
import { TeamSection } from './TeamSection';
import { SectionForm } from './SectionForm';
import { SectionOurMission } from './SectionOurMission';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <TeamSection />

      <SectionForm />

      <SectionOurMission />
    </div>
  );
};
