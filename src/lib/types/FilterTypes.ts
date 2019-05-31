import { ReactNode } from 'react';

export interface FilteredDataObject {
  readonly [key: string]: any;
}

export interface FilterState {
  inputQuery: string;
}

export interface FilterPayload {
  filteredData: FilteredDataObject[];
}

export default interface FilterProps {
  children(filterPayload: FilterPayload): ReactNode;
  inputData: FilteredDataObject[];
}

export interface SifterOptions {
  fields: string[];
  sort: any[];
  limit: number;
}

export interface SifterToken {
  string: string;
  regex: string;
}

export interface SifterItem {
  score: number;
  id: number;
}

export interface SifterResults {
  options: SifterOptions;
  query: string;
  tokens: SifterToken[];
  total: number;
  items: SifterItem[];
}
