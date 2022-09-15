/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';
import './loginForm.scss';
import classNames from 'classnames';
import { ButtonMain } from '../ButtonMain';
import shape1 from './shape1.svg';
import shape2 from './shape2.svg';

export const LoginForm: FC = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [isLoginValid, setIsLoginValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  console.log(isEmailValid);

  return (
    <form className="login-form">
      <h3 className="login-form__heading">Log in</h3>
      <img className="login-form__shape login-form__shape--1" src={shape1} alt="shape" />
      <img className="login-form__shape login-form__shape--2" src={shape2} alt="shape" />

      <label className="login-form__field">
        <input
          className={classNames('login-form__input', {
            'login-form__input--invalid': !isLoginValid,
          })}
          type="text"
          placeholder="Name"
          value={login}
          onChange={(event) => {
            setLogin(event.target.value);
            setIsLoginValid(true);
          }}
          onBlur={() => {
            if (!login) {
              setIsLoginValid(false);
            }
          }}
        />
      </label>

      <label className="login-form__field mb-32">
        <input
          className={classNames('login-form__input', {
            'login-form__input--invalid': !isEmailValid,
          })}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setIsEmailValid(true);
          }}
          onBlur={() => {
            if (!email) {
              setIsEmailValid(false);
            }
          }}
        />
      </label>

      <ButtonMain text="Book a demo" width="100%" />
    </form>
  );
};
