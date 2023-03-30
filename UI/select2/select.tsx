import React, { useRef } from 'react';

import * as Popover from '@radix-ui/react-popover';
import { Section } from '@react-stately/collections';

// import { Popover } from '@nextui-org/react';
import { CollectionChildren } from '@react-types/shared';

import { __DEV__ } from '../utils/assertion';
import SelectItemBase from './base/select-item-base';
import { SelectProvider } from './select-context';
import SelectMenu from './select-menu';
import SelectTrigger from './select-trigger';
import { useSelect, UseSelectProps } from './use-select';
import { contrast } from 'chroma-js';

interface Props extends UseSelectProps {
  /**
   * The content of the select. It is usually the `Select.Trigger`,
   * and `Select.Menu`
   */
  placeholder: string;
  type: 'single' | 'multi';
  children: CollectionChildren<any>;
}

export type SelectProps = Props;

const Select = (props: SelectProps) => {
  const { children, type = 'multi', placeholder } = props;
  const context = useSelect(props);
  const ref = useRef<HTMLUListElement>(null);
  console.log('rerendered');

  return (
    <SelectProvider value={context}>
      <Popover.Root {...context.popoverProps} open={context.isOpen} onOpenChange={context.setOpen}>
        <SelectTrigger placeholder={placeholder} />
        <Popover.Portal>
          <Popover.Content
            side="bottom"
            sideOffset={4}
            // asChild
            // onP
            // onBlur={(e) => {
            //   if (context.isOpen) context.setOpen(false);
            //   console.log('iii pointer down outside');
            // }}
            // onLostPointerCapture={(e) => {
            //   if (context.isOpen) context.setOpen(false);
            //   console.log('iii pointer down outside');
            // }}
            // onAuxClick={(e) => {
            //   if (context.isOpen) context.setOpen(false);
            //   console.log('iii pointer down outside');
            // }}
            // onFocusOutside={(e) => {
            //   if (context.isOpen) context.setOpen(false);
            //   console.log('iii pointer down outside');
            // }}
            // onPointerDownOutside={(e) => {
            //   if (context.isOpen) context.setOpen(false);
            //   console.log('iii pointer down outside');
            // }}
            // onPointerDown={(e) => {
            //   console.log('iii clicked');
            //   if (type === 'single') {
            //     context.setOpen(false);
            //   }
            // }}
          >
            <SelectMenu aria-label="select-menu" ref={ref}>
              {children}
            </SelectMenu>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </SelectProvider>
  );
};

if (__DEV__) {
  Select.displayName = 'PotionUI.Select';
}

type SelectComponent<P = Record<string, unknown>> = React.FC<P> & {
  Trigger: typeof SelectTrigger;
  Menu: typeof SelectMenu;
  Item: typeof SelectItemBase;
  Section: typeof Section;
};

Select.toString = () => '.potionui-select';

export default Select as SelectComponent<SelectProps>;
