import Sifter = require('sifter');
import { FilterSifterCollection, FilteredDataObject, SifterItem, SifterOptions } from 'FilterTypes';

/**
 * Generates an options object to be passed into sifter.search call.
 *
 * @param searchProperties - matches the `fields` property inside of sifter.search.options
 * @returns Object to be passed into sifter.search call.
 */
function generateSiftOptions(searchProperties: string[]): SifterOptions {
  // This can be expanded to accept sifter override settings, probably.
  return {
    fields: searchProperties
  };
}

/**
 * Runs sifter.search on inputData using provided query and properties to search by.
 *
 * @param inputCollection - Object containing inputData, inputQuery, and searchProperties
 * @returns A FilteredDataObject array matching query parameters
 */
export function siftInputData(inputCollection: FilterSifterCollection): FilteredDataObject[] {
  const { inputData, inputQuery, searchProperties } = inputCollection;
  const sift = new Sifter(inputData);
  const searchOptions = generateSiftOptions(searchProperties);
  const siftResults = sift.search(inputQuery, searchOptions).items;
  const resultIndexes = siftResults.map((item: SifterItem) => item.id);
  return resultIndexes.map((index: number) => inputData[index]);
}
