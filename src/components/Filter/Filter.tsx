import * as React from 'react';
import FilterProps, { FilteredDataObject, FilterState } from '../../lib/types/FilterTypes';
import { siftInputData } from '../../lib/helpers';

class Filter extends React.Component<FilterProps, FilterState> {
  static defaultProps = {
    inputData: [],
    searchProperties: []
  };

  state = {
    inputQuery: ''
  };

  filterTheData(): FilteredDataObject[] {
    const { inputData, searchProperties } = this.props;
    const { inputQuery } = this.state;

    if (!inputQuery) {
      return inputData;
    }

    const siftedData = siftInputData({ inputData, inputQuery, searchProperties });
    return siftedData;
  }

  updateInputQuery = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value }
    } = event;
    this.setState({ inputQuery: value });
  };

  render() {
    const { children } = this.props;
    const { inputQuery } = this.state;
    const filteredData = this.filterTheData();

    return (
      <>
        <input value={inputQuery} onChange={this.updateInputQuery} />
        {children({ filteredData })}
      </>
    );
  }
}

export default Filter;
