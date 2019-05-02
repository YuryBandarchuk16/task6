import * as React from 'react';

import styles from '../../styles/mail-screen/Footer.module.css';

export class Footer extends React.PureComponent {
  render() {
    return (
      <footer className={styles.mailFooter}>
        <span className={styles.footerItem}>
          <a className={styles.mailFooter__itemLink} href="#help">
            Помощь и обратная связь
          </a>
        </span>
        <span className={styles.footerItem}>
          <a className={styles.mailFooter__itemLink} href="#ads">
            Реклама
          </a>
        </span>
        <span className={styles.footerItem}>
          <a className={styles.mailFooter__itemLink} href="https://yandex.ru">
            &copy; 2001-2018, Яндекс
          </a>
        </span>
      </footer>
    );
  }
}
