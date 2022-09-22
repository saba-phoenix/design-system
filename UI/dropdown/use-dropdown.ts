import React, { useRef, useState } from 'react';
import { ListProps, ListState, useListState } from '@react-stately/list';
import { AriaListBoxProps } from '@react-types/listbox';
import { CollectionChildren } from '@react-types/shared';

type PopoverProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  selection: 'single' | 'multiple' | 'none';
  children: CollectionChildren<any>;
  ref?: React.RefObject<HTMLUListElement | null>;
  title?: string;
  search?: boolean;
  isReset?: boolean;
};

export interface UseDropdownProps extends PopoverProps, AriaListBoxProps<any> {}

/**
 * @internal
 */
export function useDropdown(props: UseDropdownProps) {
  const { ref, selection, isReset = false, search = false, title, ...popoverProps } = props;

  const [isOpen, setOpen] = useState<boolean>(false);
  // const [state, setState] = useState<ListState<any | null>>();
  // const [state, setState] = useState<ListProps<any>>(null);

  const state = useListState({
    ...props,
    selectionMode:
      selection === 'multiple' ? 'multiple' : selection === 'single' ? 'single' : 'none',
    selectionBehavior: selection === 'multiple' ? 'toggle' : 'replace',
  });

  const reset = () => {
    state.selectionManager.clearSelection();
  };

  // console.log('items', items);
  return {
    // selectedKeys: state.selectionManager.selectedKeys,
    // setSelectedKeys: state.selectionManager.setSelectedKeys,
    isOpen,
    setOpen,
    selection,
    ref,
    state,
    reset,
    search,
    isReset,
    title,
    // setState,
    // items,
    popoverProps,
    // state,
    // onClose: state.selectionManager.setFocused,
    // autoFocus: state.selectionManager.isFocused || true,
  };
}

export type UseDropdownReturn = ReturnType<typeof useDropdown>;
