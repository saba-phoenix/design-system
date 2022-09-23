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
import { useDropdownContext } from './dropdown-context';
import type { IFocusRingAria, IOptionAria } from './dropdown-types';
import { AiOutlineHolder } from 'react-icons/ai';
import {
  StyledDropdownItem,
  StyledDropdownItemContent,
  StyledDropdownItemWrapper,
} from './dropdown.styles';
import { ContextMenu } from '@radix-ui/react-context-menu';
import { useSortable } from '@dnd-kit/sortable';
import { cornersOfRectangle } from '@dnd-kit/core/dist/utilities/algorithms/helpers';
import { SItem } from './SItem';
import { SItemD } from './SItemD';
import { CSS as DndCSS } from '@dnd-kit/utilities';
import { Holder } from '../Icons/Holder';

interface Props<T> extends FocusableProps {
  item: Node<T>;
  state: ListState<T>;
  isVirtualized?: boolean;
  withDivider?: boolean;
  command?: string;
  description?: string;
  icon?: ReactNode;
  id: string;
  as?: keyof JSX.IntrinsicElements;

  onAction?: (key: Key) => void;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props<object>>;

export type SelectItemProps<T = object> = Props<T> & NativeAttrs & { css?: CSS };

const DropdownItem = <T extends object>({
  as,
  css,
  item,
  id,
  state,
  autoFocus,
}: SelectItemProps<T>) => {
  const { rendered, key } = item;

  const { selection } = useDropdownContext();

  console.log('dnd id', key);

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: key,
  });

  // const isSelected = key === selectState.selectedKey;
  const isSelected = state.selectionManager.isSelected(key);
  const isFocused = state.selectionManager.focusedKey === key;
  const isDisabled = false;

  console.log('is selected', key, isSelected);

  const myRef = useRef<HTMLDivElement | null>(null);

  // const { pressProps, isPressed } = usePress({
  //   ref: myRef,
  //   isDisabled,
  // });
  const context = useDropdownContext();

  // const { isFocusVisible, focusProps }: IFocusRingAria = useFocusRing({
  //   autoFocus,
  // });

  const { isPressed, optionProps, labelProps }: IOptionAria = useOption(
    {
      key,
      'aria-label': item['aria-label'],
      // isDisabled,
      // isSelected,
      // shouldSelectOnPressUp: false,
      // shouldFocusOnHover: true,
    },
    state,
    myRef
  );

  // if (isPressed) {
  //   const ad = new Set<React.Key>().add(key);
  //   console.log('ad', ad);
  //   // const ad1 = [...state.selectionManager.selectedKeys, key];
  //   // console.log('ad1', ad1);
  //   // const ad2 = new Set(ad1);
  //   // if (selection === 'single') {
  //   //   state.selectionManager.setSelectedKeys(ad);
  //   // }
  //   if (selection !== 'multiple') {
  //     // state.selectionManager.setSelectedKeys(ad);
  //     context.setOpen(false);
  //   }

  //   console.log('all items', state.selectionManager.selectionBehavior);

  //   // console.log('state selected', context.state.selectionManager.selectedKeys);
  // }

  const { hoverProps, isHovered } = useHover({ isDisabled });
  // console.log('hover', key, isHovered);

  // const isSelectable = state.selectionManager.selectionMode !== 'none' && !isDisabled;
  // // const isSelectable = false;
  // const getState = useMemo(() => {
  //   // if (isHovered) return 'hovered';
  //   if (isSelected) return 'selected';
  //   if (isPressed) return 'pressed';

  //   return isDisabled ? 'disabled' : 'ready';
  // }, [isSelected, isDisabled, isPressed]);

  return (
    <>
      {/* <SItem id={33} name={'dd'} /> */}
      <StyledDropdownItemWrapper
        ref={setNodeRef}
        hovered={isHovered}
        css={{
          transform: DndCSS.Transform.toString(transform),
          transition,
          // transition: transition,
          // '--translate-x': transform ? `${Math.round(transform.x)}px` : undefined,
          // '--translate-y': transform ? `${Math.round(transform.y)}px` : undefined,
          // '--scale-x': transform?.scaleX ? `${transform.scaleX}` : undefined,
          // '--scale-y': transform?.scaleY ? `${transform.scaleY}` : undefined,
          // '--index': index,
          // '--color': color,
        }}
        style={{ transform: DndCSS.Transform.toString(transform), transition }}
        {...attributes}
        {...listeners}
        {...hoverProps}
      >
        <StyledDropdownItem
          ref={(el) => {
            myRef.current = el;
            // setNodeRef(el);
          }}
          {...mergeProps(optionProps)}
          // as={item.props.as || as}
          // color={item.props.color || color}
          // css={{ ...mergeProps(css, item.props.css) }}
          // data-state={getState}
        >
          <StyledDropdownItemContent
            className="potionui-Dropdown-item-content"
            onClick={(e) => {
              console.log('dnd act item pressed');
            }}
            {...labelProps}
          >
            {selection !== 'none' && (
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
                    isSelected ? 'selected' : selection === 'multiple' ? 'unselected' : 'plain'
                  }
                />
                {rendered}
              </div>
            )}
            {selection === 'none' && <>{rendered}</>}
          </StyledDropdownItemContent>
        </StyledDropdownItem>
        <Holder />
      </StyledDropdownItemWrapper>
    </>
  );
};

if (__DEV__) {
  DropdownItem.displayName = 'PotionUI.DropdownItem';
}
DropdownItem.toString = () => '.potionUI-Dropdown-item';

export default DropdownItem;
