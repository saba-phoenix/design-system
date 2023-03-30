import DropdownItemBase from './base/dropdown-item-base';
import Dropdown from './dropdown';
import DropdownMenu from './dropdown-menu';
import DropdownTrigger from './dropdown-trigger';
import { SelectButton } from './select-button';

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItemBase;
Dropdown.SelectButton = SelectButton;

// export styled components
export {
  StyledDropdownMenu,
  StyledDropdownItem,
  StyledDropdownItemIconWrapper,
  StyledDropdownItemContentWrapper,
  StyledDropdownItemContent,
} from './dropdown.styles';

// export types
export type { SelectItemVariantsProps } from './dropdown.styles';

export type { DropdownProps as SelectProps } from './dropdown';
export type { SelectMenuProps } from './dropdown-menu';
export type { SelectItemProps } from './dropdown-item';

export default Dropdown;
