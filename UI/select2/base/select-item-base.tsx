import { Item } from '@react-stately/collections';
import { ItemProps } from '@react-types/shared';

import { CSS } from '../../../stitches.config';

export type SelectItemBaseProps<T = object> = ItemProps<T> & {
  as?: keyof JSX.IntrinsicElements;
  css?: CSS;
  command?: string;

  className?: string;
};

const SelectItem = Item as (props: SelectItemBaseProps) => JSX.Element;

SelectItem.toString = () => '.potionui-select-item-base';

export default SelectItem;
