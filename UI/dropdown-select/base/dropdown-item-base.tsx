import { Item } from '@react-stately/collections';
import { ItemProps } from '@react-types/shared';

import { CSS } from '../../../stitches.config';

export type DropdownItemBaseProps<T = object> = ItemProps<T> & {
  as?: keyof JSX.IntrinsicElements;
  css?: CSS;
  command?: string;
  avatarSrc?: string;
  avatarFallBack?: string;
  className?: string;
};

const DropdownItem = Item as (props: DropdownItemBaseProps) => JSX.Element;

DropdownItem.toString = () => '.potionui-dropdown-item-base';

export default DropdownItem;
