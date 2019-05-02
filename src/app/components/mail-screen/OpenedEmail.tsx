import * as React from 'react';

import { CloseEmailButton } from './CloseEmailButton';

import '../../styles/mail-screen/OpenedEmail.css';

interface PropsType {
  text: string[]
  onCloseClick: () => void
}

export class OpenedEmail extends React.Component<PropsType> {
  render() {
    return (
      <div className="content__email-content">
        <CloseEmailButton onClick={this.props.onCloseClick} />
        <div className="content__email-text">
          {this.props.text.map((t: string, index: number) => {
            return <p key={`text_${t.length}_p_${index.toString()}`}>{t}</p>;
          })}
        </div>
      </div>
    );
  }
}
