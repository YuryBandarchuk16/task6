import * as React from 'react';

import '../../styles/mail-screen/EMail.css';
import { EmailType } from '../../app';

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
    const classNames = ['email'];

    if (this.props.isUnread) {
      classNames.push('email_unread');
    }

    if (this.props.removingSelected && this.props.isSelected) {
      classNames.push('bounceOutRight');
    }

    if (this.props.animateAppearance) {
      classNames.push('bounceIn');
    }

    return classNames.join(' ');
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
      <section className="mail-screen-element-wrapper" style={this.getWrapperStlye()}>
        <div className={this.getMainClassName()}>
          <div className="email__mail-date">
            {this.props.dateDay} {this.props.dateMonth}
          </div>
          <input
            type="checkbox"
            className="mail-screen__checkbox"
            checked={this.props.isSelected}
            onChange={() => this.props.onCheckboxChange(this.props.emailID, !this.props.isSelected)}
          />
          <img className="email__sender-photo" src={this.props.iconUrl} alt="sender logo" />
          <a
            href={`#email_${this.props.emailID}`}
            className="email__sender-part email__sender-name link-without-style"
            onClick={() => this.props.onOpenEmail(this.props.emailID, this.props.text)}
          >
            {this.props.senderName}
          </a>
          <div className="email__unread-flag" />
          <a
            href={`#email_${this.props.emailID}`}
            className="email__sender-part email__sender-title link-without-style"
            onClick={() => this.props.onOpenEmail(this.props.emailID, this.props.text)}
          >
            {this.props.title}
          </a>
        </div>
      </section>
    );
  }
}
