import React from 'react';

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


interface Props extends UseSelectProps {
  /**
   * The content of the select. It is usually the `Select.Trigger`,
   * and `Select.Menu`
   */
  type: 'single' | 'multi';
  children: CollectionChildren<any>;
}

export type SelectProps = Props;

const Select = (props: SelectProps) => {
  const { children, type = 'multi' } = props;
  const context = useSelect(props);

  return (
    <SelectProvider value={context}>
      <Popover.Root {...context.popoverProps} open={context.state.isOpen}>
        <SelectTrigger />
        <Popover.Portal>
          <Popover.Content
            side="bottom"
            sideOffset={4}
            onPointerDownOutside={e => {
              context.state.setOpen(false);
            }}
            onClick={e => {
              if (type === 'single') {
                context.state.setOpen(false);
              }
            }}
          >
            <SelectMenu aria-label="select-menu">{children}</SelectMenu>
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
