import Sifter = require('sifter');
import { FilterSifterCollection, SifterItem, SifterOptions, SiftedDataObject } from 'FilterTypes';

/**
 * Generates an options object to be passed into sifter.search call.
 *
 * @param searchProperties - matches the `fields` property inside of sifter.search.options
 * @returns Object to be passed into sifter.search call.
 */
function generateSiftOptions(searchProperties: string[]): SifterOptions {
  // This can be expanded to accept sifter override settings, probably.
  return {
    fields: searchProperties,
    nesting: true,
    respect_word_boundaries: true,
    conjunction: 'and'
  };
}

/**
 * Runs sifter.search on inputData using provided query and properties to search by.
 *
 * @param inputCollection - Object containing inputData, inputQuery, and searchProperties
 * @returns A FilteredDataObject array matching query parameters
 */
export function siftInputData(inputCollection: FilterSifterCollection): SiftedDataObject {
  const { inputData, inputQuery, searchProperties } = inputCollection;
  const sift = new Sifter(inputData);
  const searchOptions = generateSiftOptions(searchProperties);
  const siftResults = sift.search(inputQuery, searchOptions).items;
  const resultIndexes = siftResults.map((item: SifterItem) => item.id);
  return {
    filterFn: (_, index) => resultIndexes.includes(index),
    sortedByRelevancy: siftResults.map((item: SifterItem) => inputData[item.id])
  };
}
