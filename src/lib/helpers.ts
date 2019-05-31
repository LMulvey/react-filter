import Sifter = require('sifter');
import { FilterSifterCollection, FilteredDataObject, SifterItem } from 'FilterTypes';

/**
 * Runs sifter.search on inputData using provided query and properties to search by.
 *
 * @param inputCollection - Object containing inputData, inputQuery, and searchProperties
 * @returns A FilteredDataObject array matching query parameters
 */
export function siftInputData(inputCollection: FilterSifterCollection): FilteredDataObject[] {
  const { inputData, inputQuery, searchProperties } = inputCollection;
  const sift = new Sifter(inputData);
  const siftResults = sift.search(inputQuery, {
    fields: searchProperties
  }).items;
  const resultIndexes = siftResults.map((item: SifterItem) => item.id);
  return resultIndexes.map((index: number) => inputData[index]);
}
