import * as React from 'react';

import '../../styles/mail-screen/MailNavigation.css';

interface PropsType {
  isSelected: boolean
  onSelectAll: () => void
  onDelete: () => void
  showInbox: () => void
  showRead: () => void
}

export class MailNavigation extends React.Component<PropsType> {
  render() {
    return (
      <div className="mail-navigation-wrapper">
        <div className="mail-navigation">
          <input
            type="checkbox"
            className="mail-screen__checkbox"
            checked={this.props.isSelected}
            onChange={this.props.onSelectAll}
          />
          <button type="button" className="mail-navigation__nav-btn">
            Написать
          </button>
          <button type="button" className="mail-navigation__nav-btn" onClick={this.props.onDelete}>
            Удалить
          </button>
          <button type="button" className="mail-navigation__nav-btn" onClick={this.props.showInbox}>
            Входящие
          </button>
          <button type="button" className="mail-navigation__nav-btn">
            Отправленные
          </button>
          <button type="button" className="mail-navigation__nav-btn">
            Удалённые
          </button>
          <button type="button" className="mail-navigation__nav-btn">
            Спам!
          </button>
          <button type="button" className="mail-navigation__nav-btn" onClick={this.props.showRead}>
            Прочитано
          </button>
        </div>
      </div>
    );
  }
}
