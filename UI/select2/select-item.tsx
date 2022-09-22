import React, { ReactNode, Key, useRef, useMemo } from 'react';

import { useFocusRing } from '@react-aria/focus';
import { useHover, usePress } from '@react-aria/interactions';
import { useOption } from '@react-aria/listbox';
import { mergeProps } from '@react-aria/utils';
import { TreeState } from '@react-stately/tree';
import { ListState } from '@react-stately/list';
import { Node } from '@react-types/shared';
import type { FocusableProps } from '@react-types/shared';

import { CSS } from '../../stitches.config';
import { CheckBox } from '../CheckBox';
import { __DEV__ } from '../utils/assertion';
import { useSelectContext } from './select-context';
import type { IFocusRingAria, IOptionAria } from './select-types';
import { StyledSelectItem, StyledSelectItemContent } from './select.styles';
import { ContextMenu } from '@radix-ui/react-context-menu';

interface Props<T> extends FocusableProps {
  item: Node<T>;
  state: ListState<T>;
  isVirtualized?: boolean;
  withDivider?: boolean;
  command?: string;
  description?: string;
  icon?: ReactNode;
  as?: keyof JSX.IntrinsicElements;

  onAction?: (key: Key) => void;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props<object>>;

export type SelectItemProps<T = object> = Props<T> & NativeAttrs & { css?: CSS };

const SelectItem = <T extends object>({ as, css, item, state, autoFocus }: SelectItemProps<T>) => {
  const { rendered, key } = item;

  const { type } = useSelectContext();
  // const isSelected = key === selectState.selectedKey;
  const isSelected = state.selectionManager.isSelected(key);
  const isFocused = state.selectionManager.focusedKey === key;
  const isDisabled = false;

  console.log('is selected', key, isSelected);

  const ref = useRef<HTMLLIElement>(null);

  const { pressProps, isPressed } = usePress({
    ref,
    isDisabled,
  });
  const context = useSelectContext();

  if (isPressed) {
    const ad = new Set<React.Key>().add(key);
    console.log('ad', ad);
    const ad1 = [...context.state.selectionManager.selectedKeys, key];
    console.log('ad1', ad1);
    const ad2 = new Set(ad1);
    if (type === 'single') {
      context.state.selectionManager.setSelectedKeys(ad);
      context.setOpen(false);
    }

    console.log('all items', context.state.selectionManager.selectionBehavior);

    // console.log('state selected', context.state.selectionManager.selectedKeys);
  }

  const { isFocusVisible, focusProps }: IFocusRingAria = useFocusRing({
    autoFocus,
  });

  const { optionProps, labelProps }: IOptionAria = useOption(
    {
      key,
      'aria-label': item['aria-label'],
      isDisabled,
      isSelected,
      shouldSelectOnPressUp: false,
      shouldFocusOnHover: true,
    },
    state,
    ref
  );

  const { hoverProps, isHovered } = useHover({ isDisabled });
  // console.log('hover', key, isHovered);

  const isSelectable = state.selectionManager.selectionMode !== 'none' && !isDisabled;
  // const isSelectable = false;
  const getState = useMemo(() => {
    if (isHovered) return 'hovered';
    if (isSelected) return 'selected';
    if (isPressed) return 'pressed';

    return isDisabled ? 'disabled' : 'ready';
  }, [isSelected, isDisabled, isHovered, isPressed]);

  return (
    <StyledSelectItem
      ref={ref}
      hovered={isHovered}
      {...mergeProps(optionProps, hoverProps, pressProps, focusProps)}
      as={item.props.as || as}
      // color={item.props.color || color}
      css={{ ...mergeProps(css, item.props.css) }}
      data-state={getState}
      // isDisabled={isDisabled}
      // isFocusVisible={isFocusVisible}
      isFocused={isFocused}
    >
      <StyledSelectItemContent className="potionui-select-item-content" {...labelProps}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
            gap: '9px',
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <CheckBox status={isSelected ? 'selected' : type === 'single' ? 'plain' : 'unselected'} />
          {rendered}
        </div>
      </StyledSelectItemContent>
    </StyledSelectItem>
  );
};

if (__DEV__) {
  SelectItem.displayName = 'PotionUI.SelectItem';
}
SelectItem.toString = () => '.potionUI-select-item';

export default SelectItem;
