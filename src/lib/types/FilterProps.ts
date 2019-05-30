import { ReactNode } from 'react';

export interface DataObject {
  [key: string]: string | number;
}

export interface FilterPayload {
  filteredData: DataObject[];
}

export default interface FilterProps {
  children(filterPayload: FilterPayload): ReactNode;
  inputData: DataObject[];
}
