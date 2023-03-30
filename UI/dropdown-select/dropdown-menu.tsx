import React, { RefAttributes, PropsWithoutRef, useState } from 'react';

import { useListBox } from '@react-aria/listbox';
import { mergeProps } from '@react-aria/utils';
import { AriaListBoxProps } from '@react-types/listbox';
import { DOMProps, AriaLabelingProps } from '@react-types/shared';

import { CSS } from '../../stitches.config';
import { __DEV__ } from '../utils/assertion';
import { useDOMRef } from '../utils/dom';
import { useDropdownContext } from './dropdown-context';
import DropdownItem from './dropdown-item';
import { StyledDropdownMenu, StyledDropdownUnorderedList } from './dropdown.styles';
import { useListState } from '@react-stately/list';
import { Flex } from '../../components/Flex';
import { Text } from '../Text';
import { Button } from '../Button';
import { DropdownSearch } from './dropdown-search';

import { DndContext, MouseSensor, UniqueIdentifier, useSensor, useSensors } from '@dnd-kit/core';

import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';
import { SortableContext, arrayMove as reorderItems } from '@dnd-kit/sortable';

interface Props<T> extends AriaListBoxProps<T>, DOMProps, AriaLabelingProps {
  as?: keyof JSX.IntrinsicElements;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props<object>>;

export type SelectMenuProps<T = object> = Omit<Props<T> & NativeAttrs & { css?: CSS }, 'children'>;

const DropdownMenu = (props: SelectMenuProps) => {
  const { css = {}, as, color = 'default', ...otherProps } = props;

  const context = useDropdownContext();
  const {
    selection,
    search,
    isReset,
    title,
    searchFunc,
    items,
    setItems,
    collections,
    selectedKeys,
    setSelectedKeys,
    setDragging,
    width,
  } = context;

  const completeProps = {
    ...mergeProps(context, otherProps),
  };

  const domRef = useDOMRef(context.ref);

  const state = useListState({
    ...props,
    children: collections,
    selectionMode:
      selection === 'multiple' ? 'multiple' : selection === 'single' ? 'single' : 'none',
    selectionBehavior: selection === 'multiple' ? 'toggle' : 'replace',
    selectedKeys,
    onSelectionChange: (keys) => {
      setSelectedKeys(keys as Set<React.Key>);
    },
  });

  const reset = () => {
    state.selectionManager.clearSelection();
  };

  const [activeId, setActiveId] = useState<React.Key | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { delay: 1, tolerance: 5 },
    })
  );

  const { listBoxProps } = useListBox(completeProps, state, domRef);

  const getIndex = (id: UniqueIdentifier) => items.findIndex((item) => item.id === id);
  const activeIndex = activeId ? getIndex(activeId) : -1;

  return (
    <StyledDropdownMenu
      css={{
        width: `${width} !important`,
        maxWidth: `${width} !important`,
        minWidth: `${width} !important`,
      }}
    >
      <Flex direction="column" gap="1">
        {search && <DropdownSearch />}

        {(isReset || !!title) && (
          <Flex
            direction="row"
            justify="between"
            css={{
              paddingBlock: '8px',
              paddingInline: '8px',
            }}
          >
            {title && (
              <Text variant="rabbit" color="$textGray">
                {title}
              </Text>
            )}
            {isReset && (
              <Button
                variant="noStyle"
                css={{
                  color: '$clickBlue',
                  maxHeight: 'min-content',
                  alignItems: 'flex-start',
                  alignContent: 'flex-start',
                }}
                onClick={() => {
                  reset();
                }}
              >
                <Text variant="rabbit" color="$primaryBlue" css={{ color: '$primaryBlue' }}>
                  Reset
                </Text>
              </Button>
            )}
          </Flex>
        )}
        <StyledDropdownUnorderedList
          ref={domRef}
          as={as}
          css={{ ...(css as any) }}
          {...listBoxProps}
        >
          <DndContext
            sensors={sensors}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
            onDragStart={({ active }) => {
              if (!active) {
                return;
              }
              setDragging(true);
              setActiveId(active.id);
            }}
            onDragEnd={({ over }) => {
              setActiveId(null);

              if (over) {
                const overIndex = getIndex(over.id);
                if (activeIndex !== overIndex) {
                  setItems((items) => reorderItems(items, activeIndex, overIndex));
                }
              }
              setDragging(false);
            }}
            onDragCancel={() => setActiveId(null)}
          >
            <SortableContext items={items}>
              {[...state.collection]
                .filter((item) => searchFunc(item))
                .map((item) => {
                  let selectItem = (
                    <DropdownItem
                      key={item.key}
                      color={color}
                      id={item.key.toString()}
                      item={item}
                      state={state}
                      avatarSrc={item.props.avatarSrc}
                      avatarFallback={item.props.avatarFallback}
                    />
                  );
                  if (item.wrapper) {
                    selectItem = item.wrapper(selectItem);
                  }

                  return selectItem;
                })}
            </SortableContext>
          </DndContext>
        </StyledDropdownUnorderedList>
      </Flex>
    </StyledDropdownMenu>
  );
};
if (__DEV__) {
  DropdownMenu.displayName = 'PotionUI.DropdownMenu';
}

type DropdownComponent<T, P = Record<string, unknown>> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>;

DropdownMenu.toString = () => '.potionui-Dropdown-menu';

export default DropdownMenu as DropdownComponent<HTMLUListElement, SelectMenuProps>;
