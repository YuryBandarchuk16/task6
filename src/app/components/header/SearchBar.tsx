import * as React from 'react';

import styles from '../../styles/header/SearchBar.module.css';

interface PropsType {
  filterText: string
  onFilterChange: (event: any) => void
}

export class SearchBar extends React.Component<PropsType> {
  render() {
    return (
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBarContainer__searchBarAndClose}>
          <input
            type="search"
            className={styles.searchBarContainer__searchBar}
            placeholder="Поиск"
            value={this.props.filterText}
            onChange={this.props.onFilterChange}
          />
        </div>
      </div>
    );
  }
}
