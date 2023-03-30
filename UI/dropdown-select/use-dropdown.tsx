import React, { useState } from 'react';
import { AriaListBoxProps } from '@react-types/listbox';
import { Node } from '@react-types/shared';
import DropdownItemBase from './base/dropdown-item-base';

export type Option = {
  id: string;
  name: string;
  avatarSrc?: string;
  avatarFallback?: string;
};

type PopoverProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  width: string;
  selection: 'single' | 'multiple' | 'none';
  ref?: React.RefObject<HTMLUListElement | null>;
  title?: string;
  search?: boolean;
  isReset?: boolean;
  options: Option[];
  drag?: boolean;
  avatar?: boolean;
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
    avatar,
    width,
    ...popoverProps
  } = props;

  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedKeys, setSelectedKeys] = useState<Set<React.Key>>(new Set());
  const [searchPhrase, setSearchPhrase] = useState<string | undefined>('');
  const [items, setItems] = useState<Option[]>(options);
  const [isDragging, setDragging] = useState<boolean>(false);

  const collections = items.map(({ id, name, avatarSrc, avatarFallback }) => (
    <DropdownItemBase key={id} avatarSrc={avatarSrc} avatarFallBack={avatarFallback}>
      {name}
    </DropdownItemBase>
  ));

  const searchFunc = (item: Node<any>) => {
    if (!search || searchPhrase === '') return true;
    const option = item.props.children;
    return option.includes(searchPhrase);
  };

  return {
    width,
    avatar,
    isOpen,
    setOpen,
    selection,
    ref,
    drag,
    search,
    isReset,
    title,
    items,
    collections,
    popoverProps,
    searchFunc,
    setSearchPhrase,
    setItems,
    selectedKeys,
    setSelectedKeys,
    isDragging,
    setDragging,
  };
}

export type UseDropdownReturn = ReturnType<typeof useDropdown>;
