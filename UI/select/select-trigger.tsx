import type { ReactRef } from '../utils/refs';

import React from 'react';

import * as Popover from '@radix-ui/react-popover';
import { CSS } from '../../stitches.config';
import { __DEV__ } from '../utils/assertion';

import { useSelectContext } from './select-context';
import { Demo } from '../Demo';
import { useDOMRef } from '../utils/dom';

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
    const { children, css, ...otherProps } = props;
    const { state, listBoxProps } = useSelectContext();
    // const buttonRef = useDOMRef(ref);
    // saba: i deleted the triggerprops here. will anything change?
    return (
      <Popover.Trigger asChild>
        <Demo isOpen={true} title={'hello'} ref={ref} />
      </Popover.Trigger>
    );
  }
);

if (__DEV__) {
  SelectTrigger.displayName = 'PotionUI.SelectTrigger';
}

SelectTrigger.toString = () => '.potionui-select-trigger';

type SelectTriggerComponent<T, P = {}> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;

export default SelectTrigger as SelectTriggerComponent<HTMLElement, SelectTriggerProps>;
