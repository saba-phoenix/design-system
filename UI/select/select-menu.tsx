import React, { RefAttributes, PropsWithoutRef } from 'react';
import { DOMProps, AriaLabelingProps } from '@react-types/shared';
import { AriaListBoxProps } from '@react-types/listbox';
import { useListBox } from '@react-aria/listbox';
import { useTreeState } from '@react-stately/tree';
import { mergeProps } from '@react-aria/utils';

import { useDOMRef, useSyncRef } from '../utils/dom';
import { CSS } from '../../stitches.config';
import { __DEV__ } from '../utils/assertion';

import { useSelectContext } from './select-context';
import SelectItem from './select-item';
import { StyledSelectMenu } from './select.styles';

interface Props<T> extends AriaListBoxProps<T>, DOMProps, AriaLabelingProps {
  as?: keyof JSX.IntrinsicElements;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props<object>>;

export type SelectMenuProps<T = object> = Props<T> & NativeAttrs & { css?: CSS };

const SelectMenu = React.forwardRef(
  (props: SelectMenuProps, ref: React.Ref<HTMLUListElement | null>) => {
    const { css = {}, as, color = 'default', ...otherProps } = props;

    const context = useSelectContext();
    // const completeProps = {
    //   ...mergeProps(context, otherProps),
    // };
    const domRef = useDOMRef(ref);
    // saba: need to use list state
    // const state = useTreeState(completeProps);
    // const { listBoxProps } = useListBox(completeProps, state, domRef);

    useSyncRef(context, domRef);

    return (
      <StyledSelectMenu ref={domRef} as={as} css={{ ...(css as any) }} {...context.listBoxProps}>
        {[...context.state.collection].map((item) => {
          let selectItem = (
            <SelectItem key={item.key} color={color} item={item} state={context.state} />
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
  SelectMenu.displayName = 'PotionUI.SelectMenu';
}

type SelectComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>;

SelectMenu.toString = () => '.potionui-select-menu';

export default SelectMenu as SelectComponent<HTMLUListElement, SelectMenuProps>;
