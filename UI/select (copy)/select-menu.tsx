import type { SimpleColors, SelectVariants } from '../utils/prop-types';

import React, { RefAttributes, PropsWithoutRef } from 'react';
import { DOMProps, AriaLabelingProps } from '@react-types/shared';
// import { AriaMenuProps } from '@react-types/menu';
import { AriaListBoxProps } from '@react-types/listbox';
// import { useMenu } from '@react-aria/menu';
import { useListBox } from '@react-aria/listbox';
import { useTreeState } from '@react-stately/tree';
import { mergeProps } from '@react-aria/utils';

import { useDOMRef, useSyncRef } from '../utils/dom';
import { CSS } from '../theme/stitches.config';
import clsx from '../utils/clsx';
import { __DEV__ } from '../utils/assertion';

import { useSelectContext } from './select-context';
import SelectItem from './select-item';
import { StyledSelectMenu } from './select.styles';

interface Props<T> extends AriaListBoxProps<T>, DOMProps, AriaLabelingProps {
  as?: keyof JSX.IntrinsicElements;
  /**
   * The color of the select items on (focused, hovered)
   * @default 'default'
   */
  color?: SimpleColors;
  /**
   * The dropdowm item variation
   * @default 'flat'
   */
  variant?: SelectVariants;
  /**
   * The text color of the select items on (focused, hovered)
   * @default 'default'
   */
  textColor?: SimpleColors;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props<object>>;

export type SelectMenuProps<T = object> = Props<T> & NativeAttrs & { css?: CSS };

const SelectMenu = React.forwardRef(
  (props: SelectMenuProps, ref: React.Ref<HTMLUListElement | null>) => {
    const {
      css = {},
      as,
      color = 'default',
      textColor = 'default',
      variant = 'flat',
      ...otherProps
    } = props;

    const context = useSelectContext();
    const completeProps = {
      ...mergeProps(context, otherProps),
    };
    const domRef = useDOMRef(ref);
    // saba: need to use list state?
    const state = useTreeState(completeProps);
    const { listBoxProps } = useListBox(completeProps, state, domRef);

    useSyncRef(context, domRef);

    return (
      <StyledSelectMenu
        ref={domRef}
        as={as}
        className={clsx('potionUI-select-menu', props.className)}
        css={{ ...(css as any) }}
        {...listBoxProps}
      >
        {[...state.collection].map((item) => {
          let selectItem = (
            <SelectItem
              key={item.key}
              color={color}
              item={item}
              state={state}
              textColor={textColor}
              variant={variant}
              // onAction={completeProps.onAction}
            />
          );

          if (item.wrapper) {
            selectItem = item.wrapper(selectItem);
          }

          return selectItem;
        })}
      </StyledSelectMenu>
    );
  }
);

if (__DEV__) {
  SelectMenu.displayName = 'NextUI.SelectMenu';
}

type SelectComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>;

SelectMenu.toString = () => '.nextui-select-menu';

export default SelectMenu as SelectComponent<HTMLUListElement, SelectMenuProps>;
