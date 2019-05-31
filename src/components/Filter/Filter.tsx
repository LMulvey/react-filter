import * as React from 'react';
import Sifter = require('sifter');
import FilterProps, { FilteredDataObject, FilterState, SifterItem } from '../../lib/types/FilterTypes';

class Filter extends React.Component<FilterProps, FilterState> {
  static defaultProps = {
    inputData: []
  };

  state = {
    inputQuery: ''
  };

  filterTheData(): FilteredDataObject[] {
    const { inputData } = this.props;
    const { inputQuery } = this.state;

    if (!inputQuery) {
      return inputData;
    }

    const sift = new Sifter(inputData);
    const siftResults = sift.search(inputQuery, {
      fields: ['firstName', 'lastName', 'city']
    }).items;
    const resultIndexes = siftResults.map((item: SifterItem) => item.id);
    return resultIndexes.map((index: number) => inputData[index]);
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
