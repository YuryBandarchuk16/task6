import * as React from 'react';
import { SearchBar } from './SearchBar';

import styles from '../../styles/header/Header.module.css';

interface PropsType {
  filterText: string
  onFilterChange: (event: any) => void
}

export class Header extends React.Component<PropsType> {
  render() {
    return (
      <header className={styles.header}>
        <button className={styles.hamburger} type="button">
          <img className={styles.hamburger__img} alt="" />
        </button>
        <div className={styles.header__mlogo} />
        <SearchBar filterText={this.props.filterText} onFilterChange={this.props.onFilterChange} />
      </header>
    );
  }
}
