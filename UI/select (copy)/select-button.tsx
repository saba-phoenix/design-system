import React, { useMemo, RefAttributes, PropsWithoutRef, ReactNode } from 'react';

import { useDOMRef } from '../utils/dom';
import { __DEV__ } from '../utils/assertion';

import SelectTrigger from './select-trigger';
import { useSelectContext } from './select-context';
import SelectIcon from './select-icon';
import { Demo } from '../Demo';
import { CSS } from '../../stitches.config';

export type SelectButtonProps = {
  css?: CSS;
  children?: ReactNode;
};

const SelectButton = React.forwardRef(
  (props: SelectButtonProps, ref: React.Ref<HTMLButtonElement | null>) => {
    const { css } = props;

    const { state } = useSelectContext();

    const buttonRef = useDOMRef(ref);

    return (
      <SelectTrigger
        css={{
          ...css,
        }}
      >
        <Demo isOpen={state.isOpen} title={state.selectedItem?.props?.children} ref={buttonRef} />
      </SelectTrigger>
    );
  }
);

if (__DEV__) {
  SelectButton.displayName = 'PotionUI.SelectButton';
}

type SelectButtonComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
> & {};

SelectButton.toString = () => '.potionui-select-button';

export default SelectButton as SelectButtonComponent<HTMLButtonElement, SelectButtonProps>;
