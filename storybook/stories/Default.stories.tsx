import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Filter } from "../../src/index";

storiesOf("react-filter|Default", module).add("default render", () => (
  <Filter data={["hey", "hi", "wow", "data"]}>
    {({ filteredData }) => filteredData.map(item => <h4>{item}</h4>)}
  </Filter>
));
