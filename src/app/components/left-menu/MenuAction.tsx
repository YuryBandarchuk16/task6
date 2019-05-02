import * as React from 'react';
import cx from 'classnames';

import styles from '../../styles/left-menu/LeftMenu.module.css';

interface PropsType {
  isSelected: boolean
  fragment: string
  title: string
  index: number
  onClick: () => void
}

export class MenuAction extends React.Component<PropsType> {
  render() {
    const outerWrapperClassName = cx(styles.menuActionWrapper, {
      [styles.menuActionWrapper_inner]: this.props.index > 0,
    })
    const innerWrapperClassName = cx(styles.menuActionWrapper__action, {
      [styles.selectedMenuAction]: this.props.isSelected,
    })
    return (
      <div className={outerWrapperClassName}>
        <div className={innerWrapperClassName}>
          <a
            className={styles.menuActionWrapper__link}
            href={`#${this.props.fragment}`}
            onClick={this.props.onClick}
          >
            {this.props.title}
          </a>
        </div>
      </div>
    );
  }
}
