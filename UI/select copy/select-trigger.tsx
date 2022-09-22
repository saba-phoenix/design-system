import React from 'react';

import * as Popover from '@radix-ui/react-popover';

import { CSS } from '../../stitches.config';
import { SelectButton } from './select-button';
import { __DEV__ } from '../utils/assertion';
import { useDOMRef } from '../utils/dom';
import type { ReactRef } from '../utils/refs';
import { useSelectContext } from './select-context';

export interface SelectTriggerProps {
  children?: React.ReactNode;
  css?: CSS;
}

/**
 * SelectTrigger opens the popover's content. It must be an interactive element
 * such as `button` or `a`.
 */
const SelectTrigger = React.forwardRef(
  (props: SelectTriggerProps, ref: ReactRef<HTMLButtonElement>) => {
    const { triggerProps, state } = useSelectContext();
    const buttonRef = useDOMRef(ref);

    return (
      <Popover.Trigger asChild {...triggerProps}>
        <SelectButton
          isOpen={state.isOpen}
          title={state.selectedItem?.props?.children}
          ref={buttonRef}
        />
      </Popover.Trigger>
    );
  },
);

if (__DEV__) {
  SelectTrigger.displayName = 'PotionUI.SelectTrigger';
}

SelectTrigger.toString = () => '.potionui-select-trigger';

type SelectTriggerComponent<
  T,
  P = Record<string, unknown>,
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;

export default SelectTrigger as SelectTriggerComponent<
  HTMLElement,
  SelectTriggerProps
>;
