import React, { ReactNode, Key, useRef } from 'react';

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
import type { IOptionAria } from './dropdown-types';
import {
  StyledDropdownItem,
  StyledDropdownItemContent,
  StyledDropdownItemWrapper,
} from './dropdown.styles';
import { useSortable } from '@dnd-kit/sortable';
import { CSS as DndCSS } from '@dnd-kit/utilities';
import { Holder } from '../Icons/Holder';
import { Flex } from '../Flex';

interface Props<T> extends FocusableProps {
  item: Node<T>;
  state: ListState<T>;
  description?: string;
  icon?: ReactNode;
  id: string;
  as?: keyof JSX.IntrinsicElements;

  onAction?: (key: Key) => void;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props<object>>;

export type SelectItemProps<T = object> = Props<T> & NativeAttrs & { css?: CSS };

const DropdownItem = <T extends object>({ item, state }: SelectItemProps<T>) => {
  const { rendered, key } = item;

  const { selection, setOpen } = useDropdownContext();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({
    id: key,
  });

  const isSelected = state.selectionManager.isSelected(key);
  const isDisabled = state.selectionManager.isDisabled(key);

  const ref = useRef<HTMLDivElement | null>(null);

  const { pressProps, isPressed } = usePress({
    ref,
    isDisabled,
  });

  const context = useDropdownContext();

  const { optionProps, labelProps }: IOptionAria = useOption(
    {
      key,
      'aria-label': item['aria-label'],
      shouldSelectOnPressUp: true,
    },
    state,
    ref
  );

  if (isPressed) {
    console.log('isPressed', isPressed);
    switch (selection) {
      case 'multiple':
        break;
      case 'none':
      // perform operation ^
      default:
        setOpen(false);
    }
  }

  const { hoverProps, isHovered } = useHover({ isDisabled });

  return (
    <>
      <StyledDropdownItemWrapper
        ref={setNodeRef}
        hovered={isHovered}
        css={{
          transform: DndCSS.Transform.toString(transform),
          transition,
        }}
        {...attributes}
        {...hoverProps}
      >
        <StyledDropdownItem
          ref={(el) => {
            ref.current = el;
          }}
          {...mergeProps(optionProps, pressProps)}
        >
          <StyledDropdownItemContent
            className="potionui-Dropdown-item-content"
            onClick={(e) => {
              console.log('dnd act item pressed');
            }}
            {...labelProps}
          >
            {selection !== 'none' && (
              <Flex direction="row" gap={8}>
                <CheckBox
                  status={
                    isSelected ? 'selected' : selection === 'multiple' ? 'unselected' : 'plain'
                  }
                />
                {rendered}
              </Flex>
            )}
            {selection === 'none' && <>{rendered}</>}
          </StyledDropdownItemContent>
        </StyledDropdownItem>
        {context.drag && (
          <Holder ref={setActivatorNodeRef} listeners={listeners} isDragging={context.isDragging} />
        )}
      </StyledDropdownItemWrapper>
    </>
  );
};

if (__DEV__) {
  DropdownItem.displayName = 'PotionUI.DropdownItem';
}
DropdownItem.toString = () => '.potionUI-Dropdown-item';

export default DropdownItem;
