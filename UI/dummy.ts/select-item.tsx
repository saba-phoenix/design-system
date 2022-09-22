import type { FocusableProps } from '@react-types/shared';
import type { SimpleColors, NormalWeights, SelectVariants } from '../utils/prop-types';
// import type { IFocusRingAria, IMenuItemAria } from './select-types';
import type { IFocusRingAria, IOptionAria } from './select-types';

import React, { ReactNode, Key, useRef, useMemo } from 'react';
import { Node } from '@react-types/shared';
import { mergeProps } from '@react-aria/utils';
import { TreeState } from '@react-stately/tree';
import { useFocusRing } from '@react-aria/focus';
import { useHover, usePress } from '@react-aria/interactions';
import { useOption } from '@react-aria/listbox';

import { CSS } from '../theme/stitches.config';
import clsx from '../utils/clsx';
import { __DEV__ } from '../utils/assertion';

import { useSelectContext } from './select-context';
import { StyledSelectItem, StyledSelectItemContent } from './select.styles';
import { CheckBox } from '../CheckBox';

interface Props<T> extends FocusableProps {
  item: Node<T>;
  state: TreeState<T>;
  color?: SimpleColors;
  variant?: SelectVariants;
  textColor?: SimpleColors;
  isVirtualized?: boolean;
  withDivider?: boolean;
  command?: string;
  description?: string;
  icon?: ReactNode;
  dividerWeight?: NormalWeights;
  as?: keyof JSX.IntrinsicElements;
  /**
   * Whether the item description should be truncated or not.
   */
  showFullDescription?: boolean;
  onAction?: (key: Key) => void;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props<object>>;

export type SelectItemProps<T = object> = Props<T> & NativeAttrs & { css?: CSS };

const SelectItem = <T extends object>({
  as,
  css,
  item,
  state,
  color,
  icon,
  command,
  description,
  textColor,
  variant,
  autoFocus,
  isVirtualized,
  withDivider,
  dividerWeight,
  showFullDescription,
  className,
  onAction,
}: SelectItemProps<T>) => {
  // const { onClose, closeOnSelect } = useSelectContext();

  const { rendered, key } = item;

  const isSelected = state.selectionManager.isSelected(key);
  const isFocused = state.selectionManager.focusedKey === item.key;
  const isDisabled = state.disabledKeys.has(key);
  const { state: st1 } = useSelectContext();
  const mvp = key === st1.selectedKey;

  console.log('key', key, 'isSelected', mvp, 'selected', st1.selectedKey);

  const ref = useRef<HTMLLIElement>(null);

  const { pressProps, isPressed } = usePress({
    ref,
    isDisabled,
  });
  const context = useSelectContext();

  if (isPressed) {
    console.log('hurrayy pressed ', key);
    context.state.setSelectedKey(key);
  }

  const { isFocusVisible, focusProps }: IFocusRingAria = useFocusRing({
    autoFocus,
  });

  const {
    optionProps,
    // isSelected,
    // isDisabled,
    // isFocused,
    // isPressed,
    labelProps,
  }: IOptionAria = useOption(
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

  const isSelectable = state.selectionManager.selectionMode !== 'none' && !isDisabled;
  const getState = useMemo(() => {
    // saba: changed here
    if (isHovered) return 'hovered';
    // if (isFocused) return 'hovered';
    if (isSelected) return 'selected';
    if (isPressed) return 'pressed';

    return isDisabled ? 'disabled' : 'ready';
  }, [isSelected, isDisabled, isHovered, isPressed]);

  const getTextColor = useMemo(() => {
    if (item.props.textColor) {
      return item.props.textColor;
    }
    if (item.props.color && textColor === 'default') {
      return item.props.color;
    }

    return textColor;
  }, [textColor, item.props.color, item.props.textColor]);

  const withIcon = <CheckBox status={isSelected ? 'selected' : 'plain'} />;

  return (
    <StyledSelectItem
      ref={ref}
      // {...mergeProps(menuItemProps, hoverProps, pressProps, focusProps)}
      {...mergeProps(optionProps, hoverProps, pressProps, focusProps)}
      as={item.props.as || as}
      className={clsx(
        'nextui-select-item',
        {
          'is-disabled': isDisabled,
          'is-selected': isSelected,
          'is-selectable': isSelectable,
          'is-hovered': isHovered,
          'is-focused': isFocused,
          'is-pressed': isPressed,
        },
        className,
        item.props.className
      )}
      color={item.props.color || color}
      css={{ ...mergeProps(css, item.props.css) }}
      data-state={getState}
      dividerWeight={dividerWeight || item.props.dividerWeight}
      isDisabled={isDisabled}
      isFocusVisible={isFocusVisible}
      isFocused={isFocused}
      isHovered={isHovered}
      isPressed={isPressed}
      isSelectable={isSelectable}
      isSelected={isSelected}
      shouldShowOutline={isFocusVisible && variant === 'shadow'}
      showFullDescription={showFullDescription || item.props.showFullDescription}
      textColor={getTextColor}
      variant={item.props.variant || variant}
      withDivider={withDivider || item.props.withDivider}
    >
      {/* {withIcon && (
        <StyledSelectItemIconWrapper className="nextui-select-item-icon-wrapper">
          {withIcon}
        </StyledSelectItemIconWrapper>
      )} */}
      {/* {withIcon} */}

      <StyledSelectItemContent className="nextui-select-item-content" {...labelProps}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
            gap: '4px',
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <CheckBox status={mvp ? 'selected' : 'plain'} />
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
