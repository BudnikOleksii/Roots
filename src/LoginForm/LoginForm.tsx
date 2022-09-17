/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './LoginForm.module.scss';
import { ButtonMain } from '../ButtonMain';
import shape1 from './shape1.svg';
import shape2 from './shape2.svg';

export const LoginForm: FC = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [isLoginValid, setIsLoginValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  return (
    <form className={styles.loginForm}>
      <h3 className={styles.loginForm__heading}>Log in</h3>
      <img className={styles.loginForm__shapeFirst} src={shape1} alt="shape" />
      <img className={styles.loginForm__shapeSecond} src={shape2} alt="shape" />

      <label className={styles.loginForm__field}>
        <input
          className={classNames(`${styles.loginForm__input}`, {
            [`${styles.loginForm__inputInvalid}`]: !isLoginValid,
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

      <label className={classNames(
        `${styles.loginForm__field}`,
        `${styles.mb32}`,
      )}
      >
        <input
          className={classNames(`${styles.loginForm__input}`, {
            [`${styles.loginForm__inputInvalid}`]: !isEmailValid,
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

      <ButtonMain text="Book a demo" currentWidth="100%" />
    </form>
  );
};
