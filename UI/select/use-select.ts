import { useRef, useCallback, ReactNode } from 'react';
import { useSelect as useSelectAria } from '@react-aria/select';
import { useSelectState } from '@react-stately/select';
import { AriaSelectProps } from '@react-types/select';

type PopoverProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  type: 'multi' | 'single';
};

export interface UseSelectProps extends PopoverProps, AriaSelectProps<any> {}

/**
 * @internal
 */
export function useSelect(props: UseSelectProps) {
  const { isDisabled = false, type, ...popoverProps } = props;

  let state = useSelectState(props);
  let ref = useRef<HTMLElement>(null);
  let { labelProps, triggerProps, valueProps, menuProps } = useSelectAria(props, state, ref);

  return {
    ...menuProps,
    menuProps,
    type,
    popoverProps,
    labelProps,
    valueProps,
    triggerProps,
    state,
    ref,
    onClose: state.close,
    autoFocus: state.focusStrategy || true,
  };
}

export type UseSelectReturn = ReturnType<typeof useSelect>;
