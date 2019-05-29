import * as React from 'react';
import FilterProps from '../../lib/types/FilterProps';

class Filter extends React.Component<FilterProps> {
  static defaultProps = {
    data: []
  };

  render() {
    const { children, data } = this.props;
    return children({ filteredData: data });
  }
}

export default Filter;
