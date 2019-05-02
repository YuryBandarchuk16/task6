import * as React from 'react';

import styles from '../../styles/mail-screen/MailNavigation.module.css';
import mailscreenStyles from '../../styles/mail-screen/MailScreen.module.css'

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
      <div className={styles.mailNavigationWrapper}>
        <div className={styles.mailNavigation}>
          <input
            type="checkbox"
            className={mailscreenStyles.mailScreen__checkbox}
            checked={this.props.isSelected}
            onChange={this.props.onSelectAll}
          />
          <button type="button" className={mailscreenStyles.mailNavigation__navBtn}>
            Написать
          </button>
          <button type="button" className={mailscreenStyles.mailNavigation__navBtn} onClick={this.props.onDelete}>
            Удалить
          </button>
          <button type="button" className={mailscreenStyles.mailNavigation__navBtn} onClick={this.props.showInbox}>
            Входящие
          </button>
          <button type="button" className={mailscreenStyles.mailNavigation__navBtn}>
            Отправленные
          </button>
          <button type="button" className={mailscreenStyles.mailNavigation__navBtn}>
            Удалённые
          </button>
          <button type="button" className={mailscreenStyles.mailNavigation__navBtn}>
            Спам!
          </button>
          <button type="button" className={mailscreenStyles.mailNavigation__navBtn} onClick={this.props.showRead}>
            Прочитано
          </button>
        </div>
      </div>
    );
  }
}
