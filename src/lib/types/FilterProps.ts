import FilterPayload from "./FilterPayload";

export default interface FilterProps {
  children(filterPayload: FilterPayload): Array<any>;
  data: Array<any>;
}
