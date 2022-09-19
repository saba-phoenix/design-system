import React, { useMemo, RefAttributes, PropsWithoutRef, ReactNode } from 'react';

import { useDOMRef } from '../utils/dom';
import { __DEV__ } from '../utils/assertion';

import DropdownTrigger from './dropdown-trigger';
import { useDropdownContext } from './dropdown-context';
import DropdownIcon from './dropdown-icon';
import { Demo } from '../Demo';
import { CSS } from '../../stitches.config';

export type DropdownButtonProps = {
  css?: CSS;
  children?: ReactNode;
};

const DropdownButton = React.forwardRef(
  (props: DropdownButtonProps, ref: React.Ref<HTMLButtonElement | null>) => {
    const { css } = props;

    const { state } = useDropdownContext();

    const buttonRef = useDOMRef(ref);

    return (
      <DropdownTrigger
        css={{
          ...css,
        }}
      >
        <Demo isOpen={state.isOpen} title={state.selectedItem?.props?.children} ref={buttonRef} />
      </DropdownTrigger>
    );
  }
);

if (__DEV__) {
  DropdownButton.displayName = 'PotionUI.DropdownButton';
}

type DropdownButtonComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
> & {};

DropdownButton.toString = () => '.potionui-dropdown-button';

export default DropdownButton as DropdownButtonComponent<HTMLButtonElement, DropdownButtonProps>;
