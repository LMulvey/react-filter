import * as React from 'react';
import * as Styled from './Table.styles';
import TableProps from '../../lib/types/TableProps';

class Table extends React.Component<TableProps> {
  render() {
    const { children } = this.props;
    return <Styled.Table>{children}</Styled.Table>;
  }
}

export default Table;
