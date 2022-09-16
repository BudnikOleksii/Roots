import { FC, useState } from 'react';
import locationIcon from './location-icon.svg';
import './searchInput.scss';
import { ButtonMain } from '../ButtonMain';

export const SearchInput: FC = () => {
  const [place, setPlace] = useState('');

  return (
    <div className="searchInput">
      <label htmlFor="search-input">
        <img className="searchInput__icon" src={locationIcon} alt="location-icon" />
        <input
          id="search-input"
          className="searchInput__input"
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
