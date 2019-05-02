import * as React from 'react';

interface PropsType {
  isSelected: boolean
  fragment: string
  title: string
  onClick: () => void
}

export class MenuAction extends React.Component<PropsType> {
  render() {
    const ifSelectedClassName = this.props.isSelected ? 'selected-menu-action' : '';
    return (
      <div className="menu-action-wrapper">
        <div className={`menu-action-wrapper__action ${ifSelectedClassName}`}>
          <a
            className="menu-action-wrapper__link"
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
