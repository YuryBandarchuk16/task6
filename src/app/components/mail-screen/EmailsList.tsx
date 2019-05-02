import * as React from 'react';

import { EMail } from './EMail';
import { MailNavigation } from './MailNavigation';
import { EmailType } from '../../app';

import styles from '../../styles/mail-screen/MailScreen.module.css';

const getSelectedEmailsCount = (selectedEmailsStatus: { [key: string]: any; }) => {
  return Object.keys(selectedEmailsStatus).filter(emailID => !!selectedEmailsStatus[emailID])
    .length;
};

interface PropsType {
  emails: EmailType[]
  allSelected: boolean
  deleteSelected: boolean
  showInbox: () => void
  showRead: () => void
  newMessagesAnimated: () => void
  deleteSelectedClicked: () => void
  onOpenEmail: (emailID: number, text: string[]) => void
  setNewAllSelected: (newSelectedValue: boolean) => void
  handleEmailsRemoval: (selectedEmailsIDs: { [key: string]: any }, cb: () => void) => void
}

interface StateType {
  selectedEmailsIDs: { [key: string]: any; }
}

export class EmailsList extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      selectedEmailsIDs: {}
    };
  }

  componentDidUpdate() {
    if (
      this.props.allSelected &&
      this.props.emails.filter(email => email.display).length >
        getSelectedEmailsCount(this.state.selectedEmailsIDs)
    ) {
      this.props.setNewAllSelected(false);
    }
  }

  onCheckboxChange(index: number, newSelectedValue: boolean) {
    this.setState(prevState => {
      const newSelectedEmails = prevState.selectedEmailsIDs;
      newSelectedEmails[index] = newSelectedValue;
      return {
        selectedEmailsIDs: newSelectedEmails
      };
    });
  }

  onDeleteSelected() {
    if (Object.keys(this.state.selectedEmailsIDs).length > 0) {
      this.props.deleteSelectedClicked();
    }
  }

  selectAllClicked() {
    const allSelected = !this.props.allSelected;

    const selectedEmailsIDs: { [key: string]: boolean } = {};
    if (allSelected) {
      this.props.emails.forEach(email => {
        if (email.display) {
          selectedEmailsIDs[email.id] = true;
        }
      });
    }

    this.props.setNewAllSelected(allSelected);

    this.setState({ selectedEmailsIDs });
  }

  render() {
    if (this.props.deleteSelected) {
      const selectedEmailsIDs = Object.assign({}, this.state.selectedEmailsIDs);
      if (this.props.allSelected) {
        for (let index = 0; index < this.props.emails.length; index++) {
          const emailID = this.props.emails[index].id;
          if (this.state.selectedEmailsIDs[emailID]) {
            selectedEmailsIDs[emailID] = true;
          }
        }
      }
      if (Object.keys(selectedEmailsIDs).length > 0) {
        setTimeout(() => {
          // Прокидываю callback в родителя, который он вызовет при изменении стейта
          // чтобы снять выделение
          this.props.handleEmailsRemoval(selectedEmailsIDs, () => {
            this.props.setNewAllSelected(false);
            this.setState({
              selectedEmailsIDs: {}
            });
          });
        }, 250);
      }
    }

    if (
      this.props.emails
        .map(email => {
          return email.wasShown ? 0 : 1;
        })
        .reduce((prev: number, cur: number) => prev + cur, 0) > 0
    ) {
      setTimeout(() => {
        this.props.newMessagesAnimated();
      }, 300);
    }

    return (
      <section className={styles.mailScreen}>
        <MailNavigation
          onSelectAll={this.selectAllClicked.bind(this)}
          isSelected={this.props.allSelected}
          onDelete={this.onDeleteSelected.bind(this)}
          showInbox={this.props.showInbox}
          showRead={this.props.showRead}
        />
        <section className={styles.mailEmails}>
          {this.props.emails.map((email: EmailType) => {
            return (
              <EMail
                animateAppearance={!email.wasShown}
                emailID={email.id}
                display={email.display}
                key={`email_${email.id}`}
                iconUrl={email.iconUrl}
                senderName={email.senderName}
                title={email.title}
                text={email.text}
                dateMonth={email.date.month}
                dateDay={email.date.day}
                isUnread={email.isUnread}
                isSelected={this.state.selectedEmailsIDs[email.id] === true}
                onCheckboxChange={this.onCheckboxChange.bind(this)}
                removingSelected={this.props.deleteSelected}
                onOpenEmail={this.props.onOpenEmail}
              />
            );
          })}
        </section>
      </section>
    );
  }
}
