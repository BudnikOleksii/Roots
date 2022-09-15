import { FC } from 'react';
import './teamSection.scss';
import { SectionHeading } from '../SectionHeading';
import person1 from './team-1.png';
import person2 from './team-2.png';
import person3 from './team-3.png';
import connect from './connect-team.svg';
import { Container } from '../Container';

export const TeamSection: FC = () => {
  return (
    <section id="team" className="team">
      <Container>
        <SectionHeading text="Our top team" />

        <p className="team__text">
          Learn more about how you can save
          <br />
          our planet`s nature.
        </p>

        <div className="team__img-block">
          <img className="team__person team__person--1" src={person1} alt="Person first" />
          <img className="team__connect team__connect--1" src={connect} alt="connect" />
          <img className="team__person team__person--2" src={person2} alt="Person second" />
          <img className="team__connect team__connect--2" src={connect} alt="connect" />
          <img className="team__person team__person--3" src={person3} alt="Person third" />
        </div>
      </Container>
    </section>
  );
};
