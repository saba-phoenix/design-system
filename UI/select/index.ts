import SelectItemBase from './base/select-item-base';
import SelectTrigger from './select-trigger';
import SelectMenu from './select-menu';
import Select from './select';

Select.Trigger = SelectTrigger;
Select.Menu = SelectMenu;
Select.Item = SelectItemBase;

// export styled components
export {
  StyledSelectMenu,
  StyledSelectItem,
  StyledSelectItemIconWrapper,
  StyledSelectItemContentWrapper,
  StyledSelectItemContent,
} from './select.styles';

// export types
export type { SelectItemVariantsProps } from './select.styles';

export type { SelectProps } from './select';
export type { SelectMenuProps } from './select-menu';
export type { SelectItemProps } from './select-item';

export default Select;
