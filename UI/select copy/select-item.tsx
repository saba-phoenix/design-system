
import React, { ReactNode, Key, useRef, useMemo } from 'react';

import { useFocusRing } from '@react-aria/focus';
import { useHover, usePress } from '@react-aria/interactions';
import { useOption } from '@react-aria/listbox';
import { mergeProps } from '@react-aria/utils';
import { TreeState } from '@react-stately/tree';
import { Node } from '@react-types/shared';
import type { FocusableProps } from '@react-types/shared';

import { CSS } from '../../stitches.config';
import { CheckBox } from '../CheckBox';
import { __DEV__ } from '../utils/assertion';
import { useSelectContext } from './select-context';
import type { IFocusRingAria, IOptionAria } from './select-types';
import { StyledSelectItem, StyledSelectItemContent } from './select.styles';

interface Props<T> extends FocusableProps {
  item: Node<T>;
  state: TreeState<T>;
  isVirtualized?: boolean;
  withDivider?: boolean;
  command?: string;
  description?: string;
  icon?: ReactNode;
  as?: keyof JSX.IntrinsicElements;

  onAction?: (key: Key) => void;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props<object>>;

export type SelectItemProps<T = object> = Props<T> &
  NativeAttrs & { css?: CSS };

const SelectItem = <T extends object>({
  as,
  css,
  item,
  state,
  color,

  autoFocus,
  className,
  onAction,
}: SelectItemProps<T>) => {
  const { rendered, key } = item;

  const { state: selectState, type } = useSelectContext();
  const isSelected = key === selectState.selectedKey;
  const isFocused = state.selectionManager.focusedKey === item.key;
  const isDisabled = state.disabledKeys.has(key);

  const ref = useRef<HTMLLIElement>(null);

  const { pressProps, isPressed } = usePress({
    ref,
    isDisabled,
  });

  if (isPressed) {
    selectState.setSelectedKey(key);
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
    ref,
  );

  const { hoverProps, isHovered } = useHover({ isDisabled });

  const isSelectable =
    state.selectionManager.selectionMode !== 'none' && !isDisabled;
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
      color={item.props.color || color}
      css={{ ...mergeProps(css, item.props.css) }}
      data-state={getState}
      isDisabled={isDisabled}
      isFocusVisible={isFocusVisible}
      isFocused={isFocused}
      isHovered={isHovered}
      isPressed={isPressed}
      isSelectable={isSelectable}
      isSelected={isSelected}
    >
      <StyledSelectItemContent
        className="potionui-select-item-content"
        {...labelProps}
      >
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
          <CheckBox
            status={
              isSelected
                ? 'selected'
                : type === 'single'
                ? 'plain'
                : 'unselected'
            }
          />
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
