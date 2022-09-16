import { FC } from 'react';
import './sectionOurMission.scss';
import { SectionHeading } from '../SectionHeading';
import { Container } from '../Container';
import { SectionText } from '../SectionText';
import { ButtonMain } from '../ButtonMain';
import { AccordionComponent } from '../AccordionComponent';

export const SectionOurMission: FC = () => {
  return (
    <section className="mission" id="mission">
      <Container>
        <div>
          <SectionHeading text="Ready to Get started?" />
          <div className="mission__text">
            <SectionText text="When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics." />
          </div>

          <ButtonMain text="Contact us" currentWidth="166px" />
        </div>

        <div className="mission__accordion-block">
          <AccordionComponent heading="What can I do to protect our planet?" text="Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources" />
          <AccordionComponent heading="How to save nature ecology?" text="Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources" />
          <AccordionComponent heading="What is nature conservation?" text="Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources" />
        </div>
      </Container>
    </section>
  );
};
