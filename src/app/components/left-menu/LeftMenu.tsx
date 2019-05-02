import * as React from 'react';
import cx from 'classnames';
import { MenuAction } from './MenuAction';
import { NewMessageButton } from './NewMessageButton';

import styles from '../../styles/left-menu/LeftMenu.module.css';

const actions = [
  { title: 'Входящие', fragment: 'inbox' },
  { title: 'Отправленные', fragment: 'sent' },
  { title: 'Удалённые', fragment: 'deleted' },
  { title: 'Спам', fragment: 'spam' },
  { title: 'Черновики', fragment: 'drafts' },
  { title: 'Создать папку', fragment: 'createfldr' },
  {
    title: 'Очень длинная команда, ну просто очень длинная, самая длинная здесь',
    fragment: 'longcmd'
  }
];

interface PropsType {
  generateNewEMail: () => void
}

interface StateType {
  currentlySelectedActionID: number
}

export class LeftMenu extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      currentlySelectedActionID: 0
    };
  }

  selectAction(selectedActionId: number) {
    this.setState({
      currentlySelectedActionID: selectedActionId
    });
  }

  render() {
    return (
      <nav className={styles.leftMenu}>
        <button
          type="button"
          className={cx(styles.leftMenu__getNewMessageBtn, styles.pressableButton)}
          onClick={this.props.generateNewEMail}
        >
          Получить письмо
        </button>
        <NewMessageButton />
        <div className={styles.menuActions}>
          {actions.map((action, index) => {
            return (
              <MenuAction
                index={index}
                title={action.title}
                isSelected={index === this.state.currentlySelectedActionID}
                fragment={action.fragment}
                onClick={() => this.selectAction(index)}
                key={`menu_action_${action.fragment}`}
              />
            );
          })}
        </div>
      </nav>
    );
  }
}
