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
  readonly inputData: FilteredDataObject[];
  readonly searchProperties: string[];
}

export interface SiftedDataObject {
  sortedByRelevancy: SifterItem[];
  filterFn(item: FilteredDataObject, index: number): FilteredDataObject[];
}

export interface FilterSifterCollection {
  readonly inputData: FilteredDataObject[];
  readonly searchProperties: string[];
  readonly inputQuery: string;
}

export interface SifterOptions {
  fields: string[];
  sort?: any[];
  limit?: number;
  nesting?: boolean;
  conjunction?: string;
  respect_word_boundaries?: boolean;
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
