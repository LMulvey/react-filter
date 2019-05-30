import * as React from 'react';
import FilterProps from '../../lib/types/FilterProps';

class Filter extends React.Component<FilterProps> {
  static defaultProps = {
    inputData: []
  };

  render() {
    const { children, inputData } = this.props;
    return children({ filteredData: inputData });
  }
}

export default Filter;
