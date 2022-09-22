import { ReactNode } from 'react';
import { Item } from '@react-stately/collections';
import { ItemProps } from '@react-types/shared';

import { SimpleColors, NormalWeights, SelectVariants } from '../../utils/prop-types';
import { CSS } from '../../theme/stitches.config';

export type SelectItemBaseProps<T = object> = ItemProps<T> & {
  as?: keyof JSX.IntrinsicElements;
  css?: CSS;
  color?: SimpleColors;
  variant?: SelectVariants;
  textColor?: SimpleColors;
  withDivider?: boolean;
  dividerWeight?: NormalWeights;
  command?: string;
  description?: string;
  icon?: ReactNode;
  /**
   * Whether the item description should be truncated or not.
   */
  showFullDescription?: boolean;
  className?: string;
};

const SelectItem = Item as (props: SelectItemBaseProps) => JSX.Element;

SelectItem.toString = () => '.nextui-select-item-base';

export default SelectItem;
