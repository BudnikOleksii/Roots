import { FC, useState } from 'react';
import locationIcon from './location-icon.svg';
import styles from './SearchInput.module.scss';
import { ButtonMain } from '../ButtonMain';

export const SearchInput: FC = () => {
  const [place, setPlace] = useState('');

  return (
    <div className={styles.searchInput}>
      <label className={styles.searchInput__label} htmlFor="search-input">
        <img className={styles.searchInput__icon} src={locationIcon} alt="location-icon" />
        <input
          id="search-input"
          className={styles.searchInput__input}
          type="text"
          placeholder="Find the place to help"
          value={place}
          onChange={(event) => setPlace(event.target.value)}
        />
      </label>

      <ButtonMain text="search" currentWidth="100px" onClick={() => {}} />
    </div>
  );
};
