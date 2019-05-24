import FilteredData from "./FilteredData";

export default interface FilterProps {
  children(filteredData: FilteredData): Array<any>;
  data: Array<any>;
}
