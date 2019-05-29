import styled from 'styled-components';

export const Table = styled.table`
  font-size: 16px;
  font-family: 'Helvetica Neue', Verdana, sans-serif;
  color: #444;
  td {
    border: 1px solid #f8f8f8;
    border-width: 0px 0px 2px 0px;
    padding: 10px 15px;
    margin: 0;
    &:not(:last-child) {
      border-right-width: 2px;
    }
  }
  tr {
    margin: 0;
    &:nth-child(even) {
      background-color: #f3f3f3;
    }
  }
  thead tr {
    font-weight: 700;
    border-bottom-color: #333333;
    background-color: #f2f2f2;
    color: #333;
  }
`;
