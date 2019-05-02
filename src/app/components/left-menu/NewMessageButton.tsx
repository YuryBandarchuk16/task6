import * as React from 'react';
import cx from 'classnames';

import styles from '../../styles/left-menu/NewMessageButton.module.css';

export class NewMessageButton extends React.PureComponent {
  render() {
    return (
      <button type="button" className={cx(styles.newMessageBtn, styles.pressableButton)}>
        Написать
      </button>
    );
  }
}
