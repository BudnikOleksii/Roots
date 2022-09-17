import { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './AccordionComponent.module.scss';

type Props = {
  heading: string;
  text: string;
};

export const AccordionComponent: FC<Props> = ({ heading, text }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__mainBlock}>
        <h3 className={styles.accordion__heading}>{heading}</h3>
        <button
          type="button"
          className={styles.accordion__button}
          onClick={() => setAccordionOpen(prev => !prev)}
        >
          <div className={styles.accordion__line}></div>
          <div className={classNames(`${styles.accordion__line}`, {
            [`${styles.accordion__lineActive}`]: accordionOpen,
          })}
          >
          </div>
        </button>
      </div>

      <p className={classNames(`${styles.accordion__text}`, {
        [`${styles.accordion__textActive}`]: accordionOpen,
      })}
      >
        {text}
      </p>

      <div className={styles.accordion__divider}></div>
    </div>
  );
};
