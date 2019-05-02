import * as React from 'react';
import { SearchBar } from './SearchBar';

import '../../styles/header/Header.css';

interface PropsType {
  filterText: string
  onFilterChange: (event: any) => void
}

export class Header extends React.Component<PropsType> {
  render() {
    return (
      <header className="header">
        <button className="hamburger" type="button">
          <img className="hamburger__img" alt="" />
        </button>
        <div className="header__mlogo" />
        <SearchBar filterText={this.props.filterText} onFilterChange={this.props.onFilterChange} />
      </header>
    );
  }
}
