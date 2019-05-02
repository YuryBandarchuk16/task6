import * as React from 'react';

import '../../styles/header/SearchBar.css';

interface PropsType {
  filterText: string
  onFilterChange: (event: any) => void
}

export class SearchBar extends React.Component<PropsType> {
  render() {
    return (
      <div className="search-bar-container">
        <div className="search-bar-container__search-bar-and-close">
          <input
            type="search"
            className="search-bar-container__search-bar"
            placeholder="Поиск"
            value={this.props.filterText}
            onChange={this.props.onFilterChange}
          />
        </div>
      </div>
    );
  }
}
