import { useRef, useCallback, ReactNode } from 'react';
import { useSelect } from '@react-aria/select';
import { useSelectState } from '@react-stately/select';
import { AriaSelectProps } from '@react-types/select';

type PopoverProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
};

export interface UseSelectProps extends PopoverProps, AriaSelectProps<any> {}

/**
 * @internal
 */
export function useSelect1(props: UseSelectProps) {
  const {
    // triggerRef: triggerRefProp,
    isDisabled = false,
    ...popoverProps
  } = props;

  let state = useSelectState(props);
  let ref = useRef<HTMLElement>(null);
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  return {
    ...menuProps,
    menuProps,
    popoverProps,
    labelProps,
    valueProps,
    triggerProps,
    state,
    ref,
    onClose: state.close,
    autoFocus: state.focusStrategy || true,
    // disableTriggerPressedAnimation,
    // closeOnSelect,
    // getMenuTriggerProps,
  };
}

export type UseSelectReturn = ReturnType<typeof useSelect1>;
