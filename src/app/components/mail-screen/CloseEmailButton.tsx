import * as React from 'react';

import '../../styles/mail-screen/CloseEMail.css';

interface PropsType {
  onClick: () => void
}

export class CloseEmailButton extends React.Component<PropsType> {
  render() {
    return (
      <button type="button" onClick={this.props.onClick} className="close-email">
        &#x2715;
      </button>
    );
  }
}
