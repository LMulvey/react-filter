import { ReactNode } from 'react';

export interface FilteredDataObject {
  [key: string]: string | number;
}

export interface FilterPayload {
  filteredData: FilteredDataObject[];
}

export default interface FilterProps {
  children(filterPayload: FilterPayload): ReactNode;
  inputData: FilteredDataObject[];
}
