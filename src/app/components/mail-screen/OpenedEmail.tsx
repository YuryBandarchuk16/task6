import * as React from 'react';

import { CloseEmailButton } from './CloseEmailButton';

import styles from '../../styles/mail-screen/OpenedEmail.module.css';

interface PropsType {
  text: string[]
  onCloseClick: () => void
}

export class OpenedEmail extends React.Component<PropsType> {
  render() {
    return (
      <div className={styles.content__emailContent}>
        <CloseEmailButton onClick={this.props.onCloseClick} />
        <div className={styles.content__emailText}>
          {this.props.text.map((t: string, index: number) => {
            return <p key={`text_${t.length}_p_${index.toString()}`}>{t}</p>;
          })}
        </div>
      </div>
    );
  }
}
