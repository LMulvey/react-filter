import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Filter, Table } from '../../src/index';
import { mockData } from '../data/mockData';
import { FilterPayload } from '../../src/lib/types/FilterTypes';

const mockDataProperties: string[] = Object.keys(mockData[0]);

storiesOf('react-filter|Filter Component', module).add('default usage', () => (
  <Filter inputData={mockData} searchProperties={mockDataProperties}>
    {({ filteredData }: FilterPayload): React.ReactNode => (
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
          {filteredData.map(
            (item): React.ReactNode => (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    )}
  </Filter>
));
