import { FC, useState } from 'react';
import './accordionComponent.scss';
import classNames from 'classnames';

type Props = {
  heading: string;
  text: string;
};

export const AccordionComponent: FC<Props> = ({ heading, text }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion__main-block">
        <h3 className="accordion__heading">{heading}</h3>
        <button
          type="button"
          className="accordion__button"
          onClick={() => setAccordionOpen(prev => !prev)}
        >
          <div className="accordion__line"></div>
          <div className={classNames('accordion__line', {
            'accordion__line--active': accordionOpen,
          })}
          >
          </div>
        </button>
      </div>

      <p className={classNames('accordion__text', { 'accordion__text--active': accordionOpen })}>
        {text}
      </p>

      <div className="accordion__divider"></div>
    </div>
  );
};
