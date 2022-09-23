import React, { RefAttributes, PropsWithoutRef, useState } from 'react';

import { useListBox } from '@react-aria/listbox';
import { mergeProps } from '@react-aria/utils';
import { useTreeState } from '@react-stately/tree';
import { AriaListBoxProps } from '@react-types/listbox';
import { DOMProps, AriaLabelingProps } from '@react-types/shared';

import { CSS } from '../../stitches.config';
import { __DEV__ } from '../utils/assertion';
import { useDOMRef, useSyncRef } from '../utils/dom';
import { useDropdownContext } from './dropdown-context';
import DropdownItem from './dropdown-item';
import { StyledDropdownMenu, StyledDropdownUnorderedList } from './dropdown.styles';
import { ListProps, useListState } from '@react-stately/list';
import { Flex } from '../../components/Flex';
import { Text } from '../Text';
import { Button } from '../Button';
import { DropdownSearch } from './dropdown-search';

import {
  DndContext,
  MouseSensor,
  UniqueIdentifier,
  useDndMonitor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove as reorderItems, NewIndexGetter } from '@dnd-kit/sortable';
import { SItem } from './SItem';

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
  } = context;

  const completeProps = {
    ...mergeProps(context, otherProps),
  };

  const width = selection === 'multiple' ? '216px' : selection === 'single' ? '130px' : '114px';

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

  // const items = Object.fromEntries(
  //   [...state.collection].map((item) => {
  //     return [item.key, item.props.children];
  //   })
  // );
  const [activeId, setActiveId] = useState<React.Key | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { delay: 150, tolerance: 1 },
    })
  );

  const { listBoxProps } = useListBox(completeProps, state, domRef);

  // const getIndex = (id: string) => items.findIndex((item) => item.id === id);

  const ts = [
    { id: 'p1', name: 'p1' },
    { id: 'p2', name: 'p2' },
  ];
  const getIndex = (id: UniqueIdentifier) => items.findIndex((item) => item.id === id);
  const activeIndex = activeId ? getIndex(activeId) : -1;
  // saba: need to fix padding
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
                  maxHeight: 'min-content',
                  alignItems: 'flex-start',
                  alignContent: 'flex-start',
                }}
                onClick={() => {
                  console.log('Hello saba');
                  reset();
                }}
              >
                <Text variant="rabbit" color="$primaryBlue">
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
            onDragStart={({ active }) => {
              console.log('dnd active id', active, active.id);
              if (!active) {
                return;
              }

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
            }}
            onDragCancel={() => setActiveId(null)}
          >
            {/* <SortableContext items={items}> */}
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
                  />
                );
                if (item.wrapper) {
                  selectItem = item.wrapper(selectItem);
                }

                return selectItem;
              })}
            {/* </SortableContext> */}
          </DndContext>

          {/* <DndContext
            sensors={sensors}
            onDragStart={({ active }) => {
              console.log('dnd active id', active, active.id.toString());
              if (!active) {
                return;
              }

              setActiveId(active.id.toString());
            }}
            onDragEnd={({ over }) => {
              setActiveId(null);

              if (over) {
                const overIndex = getIndex(over.id.toString());
                if (activeIndex !== overIndex) {
                  setItems((items) => reorderItems(items, activeIndex, overIndex));
                }
              }
            }}
            onDragCancel={() => setActiveId(null)}
          >
            <SortableContext items={ts}>
              {ts.map((it) => (
                <SItem id={it.id} name={it.name} />
              ))}
            </SortableContext>
          </DndContext> */}
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
