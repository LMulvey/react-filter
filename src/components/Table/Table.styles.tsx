import styled from 'styled-components';

export const Table = styled.table`
  font-size: 16px;
  font-family: 'Helvetica Neue', Verdana, sans-serif;
  color: #444;
  td {
    border: 1px solid #F8F8F8;
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
      background-color: #F3F3F3;
    }
  }
  thead tr {
    font-weight: 700;
    border-bottom-color: #333333;
    background-color: #F2F2F2;
    color: #333;
  }
`;