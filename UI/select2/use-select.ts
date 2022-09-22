import React, { useRef, useState } from 'react';
import { useListState } from '@react-stately/list';
import { AriaListBoxProps } from '@react-types/listbox';

type PopoverProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  type: 'multi' | 'single';
};

export interface UseSelectProps extends PopoverProps, AriaListBoxProps<any> {}

/**
 * @internal
 */
export function useSelect(props: UseSelectProps) {
  const { type, ...popoverProps } = props;

  const [isOpen, setOpen] = useState<boolean>(false);

  const state = useListState({
    ...props,
    selectionMode: type === 'multi' ? 'multiple' : 'single',
    selectionBehavior: type === 'multi' ? 'toggle' : 'replace',
  });

  const items = Object.fromEntries(
    [...state.collection].map((item) => {
      return [item.key, item.props.children];
    })
  );

  console.log('items', items);
  return {
    selectedKeys: state.selectionManager.selectedKeys,
    setSelectedKeys: state.selectionManager.setSelectedKeys,
    isOpen,
    setOpen,
    type,
    items,
    popoverProps,
    state,
    onClose: state.selectionManager.setFocused,
    autoFocus: state.selectionManager.isFocused || true,
  };
}

export type UseSelectReturn = ReturnType<typeof useSelect>;
