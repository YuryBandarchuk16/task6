import * as React from 'react';

import styles from '../../styles/mail-screen/CloseEMail.module.css';

interface PropsType {
  onClick: () => void
}

export class CloseEmailButton extends React.Component<PropsType> {
  render() {
    return (
      <button type="button" onClick={this.props.onClick} className={styles.closeEmail}>
        &#x2715;
      </button>
    );
  }
}
