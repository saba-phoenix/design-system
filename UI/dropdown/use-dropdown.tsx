import React, { useRef, useState } from 'react';
import { ListProps, ListState, useListState } from '@react-stately/list';
import { AriaListBoxProps } from '@react-types/listbox';
import { CollectionChildren, Node } from '@react-types/shared';
import DropdownItemBase from './base/dropdown-item-base';
import { UniqueIdentifier } from '@dnd-kit/core';

type Option = {
  id: string;
  name: string;
};

type PopoverProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  selection: 'single' | 'multiple' | 'none';
  // children: CollectionChildren<any>;
  ref?: React.RefObject<HTMLUListElement | null>;
  title?: string;
  search?: boolean;
  isReset?: boolean;
  options: Option[];
  drag?: boolean;
};

export interface UseDropdownProps extends PopoverProps, AriaListBoxProps<any> {}

/**
 * @internal
 */
export function useDropdown(props: UseDropdownProps) {
  const {
    ref,
    selection,
    isReset = false,
    search = false,
    title,
    options,
    drag,
    ...popoverProps
  } = props;

  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedKeys, setSelectedKeys] = useState<Set<React.Key>>(new Set());
  const [searchPhrase, setSearchPhrase] = useState<string | undefined>('');
  const [items, setItems] = useState<Option[]>(options);
  const [isDragging, setDragging] = useState<boolean>(false);

  console.log('selected keys', selectedKeys);

  const collections = items.map(({ id, name }) => (
    <DropdownItemBase key={id}>{name}</DropdownItemBase>
  ));

  // const state = useListState({
  //   ...props,
  //   children: collections,
  //   selectionMode:
  //     selection === 'multiple' ? 'multiple' : selection === 'single' ? 'single' : 'none',
  //   selectionBehavior: selection === 'multiple' ? 'toggle' : 'replace',
  //   selectedKeys,
  //   onSelectionChange: (keys) => {
  //     setSelectedKeys(keys as Set<React.Key>);
  //   },
  // });

  // const reset = () => {
  //   state.selectionManager.clearSelection();
  // };

  const searchFunc = (item: Node<any>) => {
    const option = item.props.children;
    console.log('item value', option);

    if (!search || searchPhrase === '') return true;

    // console.log('item value', item.value);
    return option.includes(searchPhrase);
  };

  // console.log('items', items);
  return {
    // selectedKeys: state.selectionManager.selectedKeys,
    // setSelectedKeys: state.selectionManager.setSelectedKeys,
    isOpen,
    setOpen,
    selection,
    ref,
    drag,
    // state,
    // reset,
    search,
    isReset,
    title,
    items,
    collections,
    // setState,
    // items,
    popoverProps,
    searchFunc,
    setSearchPhrase,
    setItems,
    selectedKeys,
    setSelectedKeys,
    isDragging,
    setDragging,
    // state,
    // onClose: state.selectionManager.setFocused,
    // autoFocus: state.selectionManager.isFocused || true,
  };
}

export type UseDropdownReturn = ReturnType<typeof useDropdown>;
