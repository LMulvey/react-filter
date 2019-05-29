import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Filter, Table } from '../../src/index';
import { mockData } from '../data/mockData';

storiesOf('react-filter|Default', module).add('default render', () => (
  <Filter data={mockData}>
    {({ filteredData }) => (
      <Table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>City</td>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </Filter>
));
