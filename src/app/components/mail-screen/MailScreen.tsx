import * as React from 'react';

import { Footer } from './Footer';
import { EmailsList } from './EmailsList';
import { OpenedEmail } from './OpenedEmail';
import { EmailType } from '../../app';

import styles from '../../styles/mail-screen/MailScreen.module.css';

interface PropsType {
  markAsRead: (emailID: number) => void
  emails: EmailType[]
  allSelected: boolean
  deleteSelected: boolean
  showInbox: () => void
  showRead: () => void
  newMessagesAnimated: () => void
  deleteSelectedClicked: () => void
  setNewAllSelected: (newSelectedValue: boolean) => void
  handleEmailsRemoval: (selectedEmailsIDs: { [key: string]: any }, cb: () => void) => void
}

interface StateType {
  openedEmailId: number | null
  openedEmailText: string[] | null
}

export class MailScreen extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      openedEmailId: null,
      openedEmailText: null
    };
  }

  onCloseOpenedEmailClick() {
    this.props.markAsRead(this.state.openedEmailId!);
    this.setState({
      openedEmailId: null,
      openedEmailText: null
    });
  }

  onOpenEmail(id: number, text: string[]) {
    this.setState({
      openedEmailId: id,
      openedEmailText: text
    });
  }

  render() {
    return !this.state.openedEmailText ? (
      <section className={styles.content__mailScreenAndFooter}>
        <EmailsList
          emails={this.props.emails}
          handleEmailsRemoval={this.props.handleEmailsRemoval}
          deleteSelectedClicked={this.props.deleteSelectedClicked}
          deleteSelected={this.props.deleteSelected}
          newMessagesAnimated={this.props.newMessagesAnimated}
          onOpenEmail={this.onOpenEmail.bind(this)}
          showInbox={this.props.showInbox}
          showRead={this.props.showRead}
          setNewAllSelected={this.props.setNewAllSelected}
          allSelected={this.props.allSelected}
        />
        <Footer />
      </section>
    ) : (
      <OpenedEmail
        text={this.state.openedEmailText}
        onCloseClick={this.onCloseOpenedEmailClick.bind(this)}
      />
    );
  }
}
