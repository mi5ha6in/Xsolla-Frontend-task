import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './styles.scss';
import logo from './logo.png';

const App = () => (
  <div className={styles.message}>
    <img className={styles.logo} src={logo} alt="logo" />
    Hello Xsolla School!!!!!

    <br />
    <div>
      <input type="text" />
    </div>
  </div>
);

export default hot(App);
