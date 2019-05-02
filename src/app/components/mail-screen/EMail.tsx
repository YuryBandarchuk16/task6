import * as React from 'react';
import cx from 'classnames';

import styles from '../../styles/mail-screen/EMail.module.css';
import mailscreenStyles from '../../styles/mail-screen/MailScreen.module.css';

interface PropsType  {
  isUnread: boolean
  display: boolean
  iconUrl: string
  senderName: string
  title: string
  text: string[]
  removingSelected: boolean
  isSelected: boolean
  animateAppearance: boolean
  dateMonth: string
  dateDay: number
  emailID: number
  onCheckboxChange: (emailID: number, isSelected: boolean) => void
  onOpenEmail: (emailID: number, text: string[]) => void
}

export class EMail extends React.Component<PropsType> {
  getMainClassName() {
    return cx(styles.email, {
      [styles.email_unread]: this.props.isUnread,
      'bounceOutRight': this.props.removingSelected && this.props.isSelected,
      'bounceIn': this.props.animateAppearance,
    })
  }

  getWrapperStlye() {
    if (this.props.display) {
      return {};
    }

    return {
      display: 'none'
    };
  }

  render() {
    return (
      <section className={mailscreenStyles.mailScreenElementWrapper} style={this.getWrapperStlye()}>
        <div className={this.getMainClassName()}>
          <div className={styles.email__mailDate}>
            {this.props.dateDay} {this.props.dateMonth}
          </div>
          <input
            type="checkbox"
            className={mailscreenStyles.mailScreen__checkbox}
            checked={this.props.isSelected}
            onChange={() => this.props.onCheckboxChange(this.props.emailID, !this.props.isSelected)}
          />
          <img className={styles.email__senderPhoto} src={this.props.iconUrl} alt="sender logo" />
          <a
            href={`#email_${this.props.emailID}`}
            className={cx(
              styles.email__senderPart,
              mailscreenStyles.linkWithoutStyle,
              styles.email__senderName
            )}
            onClick={() => this.props.onOpenEmail(this.props.emailID, this.props.text)}
          >
            {this.props.senderName}
          </a>
          <div className={styles.email__unreadFlag} />
          <a
            href={`#email_${this.props.emailID}`}
            className={cx(
              styles.email__senderPart,
              mailscreenStyles.linkWithoutStyle,
              styles.email__senderTitle,
            )}
            onClick={() => this.props.onOpenEmail(this.props.emailID, this.props.text)}
          >
            {this.props.title}
          </a>
        </div>
      </section>
    );
  }
}
