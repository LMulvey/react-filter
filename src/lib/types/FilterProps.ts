import { ReactNode } from 'react';
import FilteredData from './FilteredData';

export default interface FilterProps {
  children(filteredData: FilteredData): ReactNode;
  data: any[];
}
