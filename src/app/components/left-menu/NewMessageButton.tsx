import * as React from 'react';

import '../../styles/left-menu/NewMessageButton.css';

export class NewMessageButton extends React.PureComponent {
  render() {
    return (
      <button type="button" className="new-message-btn pressable-button">
        Написать
      </button>
    );
  }
}
