import * as React from 'react';
import * as Styled from './Dropdown.styles';
import DropdownProps from 'lib/types/DropdownProps';

class Dropdown extends React.Component<DropdownProps> {
  static defaultProps = {
    options: [],
  };

  render() {
    return (
      <Styled.Select>
        <option>Hello</option>
      </Styled.Select>
    );
  }
}

export default Dropdown;
