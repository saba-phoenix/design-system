import React, { ReactElement } from 'react';

import * as Popover from '@radix-ui/react-popover';

import { CSS } from '../../stitches.config';
import { __DEV__ } from '../utils/assertion';
import type { ReactRef } from '../utils/refs';
import { useDropdownContext } from './dropdown-context';

export interface SelectTriggerProps {
  children?: React.ReactNode;
  css?: CSS;
}

/**
 * DropdownTrigger opens the popover's content. It must be an interactive element
 * such as `button` or `a`.
 */
const DropdownTrigger = React.forwardRef(
  (props: SelectTriggerProps, ref: ReactRef<HTMLButtonElement>) => {
    const { children } = props;
    const { isOpen } = useDropdownContext();
    return (
      <Popover.Trigger asChild ref={ref}>
        {React.cloneElement(children as ReactElement, { focused: isOpen, isOpen: isOpen })}
      </Popover.Trigger>
    );
  }
);

if (__DEV__) {
  DropdownTrigger.displayName = 'PotionUI.DropdownTrigger';
}

DropdownTrigger.toString = () => '.potionui-Dropdown-trigger';

type DropdownTriggerComponent<T, P = Record<string, unknown>> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;

export default DropdownTrigger as DropdownTriggerComponent<HTMLElement, SelectTriggerProps>;
