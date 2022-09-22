import type { ReactRef } from '../utils/refs';

import React from 'react';

import * as Popover from '@radix-ui/react-popover';
import { CSS } from '../../stitches.config';
import { __DEV__ } from '../utils/assertion';

import { useSelectContext } from './select-context';

export interface SelectTriggerProps {
  children?: React.ReactNode;
  css?: CSS;
}

/**
 * SelectTrigger opens the popover's content. It must be an interactive element
 * such as `button` or `a`.
 */
const SelectTrigger = React.forwardRef((props: SelectTriggerProps, _: ReactRef<HTMLElement>) => {
  const { children, ...otherProps } = props;
  const { triggerProps } = useSelectContext();

  return (
    <Popover.Trigger asChild {...triggerProps}>
      {children}
    </Popover.Trigger>
  );
});

if (__DEV__) {
  SelectTrigger.displayName = 'NextUI.SelectTrigger';
}

SelectTrigger.toString = () => '.nextui-select-trigger';

type SelectTriggerComponent<T, P = {}> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;

export default SelectTrigger as SelectTriggerComponent<HTMLElement, SelectTriggerProps>;
