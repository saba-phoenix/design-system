import React, { useRef, useCallback, ReactNode, useState } from 'react';
import { useSelect as useSelectAria } from '@react-aria/select';
import { useListBox } from '@react-aria/listbox';
import { useSelectState } from '@react-stately/select';
import { useListState } from '@react-stately/list';
import { Selection } from '@react-types/shared';
// import { AriaSelectProps } from '@react-types/select';
import { CollectionChildren } from '@react-types/shared';
import { AriaListBoxProps } from '@react-types/listbox';

type PopoverProps = {
  open?: boolean;
  // type: 'multi' | 'single';
};

type SelectionBehavior = 'toggle' | 'replace';

// type ListStateProps<T> = {
//   children: CollectionChildren<T>;
//   selectionBehavior?: SelectionBehavior;
//   selectionMode?: 'none' | 'single' | 'multiple';
//   selectedKeys?: Iterable<React.Key>;
//   // onSelectionChange?: (selectedList: Set<React.Key>) => any;
// };

export interface UseSelectProps extends PopoverProps, AriaListBoxProps<any> {}

/**
 * @internal
 */
export function useSelect(props: UseSelectProps) {
  const { children, open, selectionMode, ...selectionProp } = props;

  const [selectedList, setSelectedList] = useState<Set<React.Key>>(new Set());
  const [isOpen, setOpen] = useState<boolean>(open ?? false);

  const selectionBehavior: SelectionBehavior = selectionMode === 'single' ? 'replace' : 'toggle';

  const listProps = {
    children,
    selectionMode,
    selectionBehavior,
    selectedKeys: selectedList,
    // onSelectionChange: (selectedList) => {},
  };

  const state = useListState(props);
  const ref = useRef<HTMLUListElement>(null);
  const { listBoxProps, labelProps } = useListBox({ ...props, ...listProps }, state, ref);

  const listBoxProps1 = {};
  const labelProps1 = {};

  return {
    // ...listBoxProps1,
    listBoxProps,
    selectionBehavior,
    selectionMode,
    labelProps,
    state,
    ref,
    isOpen,
    setOpen,
    // onClose: state.close,
    // autoFocus: state.focusStrategy || true,
  };
}

export type UseSelectReturn = ReturnType<typeof useSelect>;
