import React, { ReactNode } from 'react';
import { Section } from '@react-stately/collections';

// import { Popover } from '@nextui-org/react';
import * as Popover from '@radix-ui/react-popover';
import { __DEV__ } from '../utils/assertion';

import SelectItemBase from './base/select-item-base';
import { SelectProvider } from './select-context';
import SelectTrigger from './select-trigger';
import SelectMenu from './select-menu';
import SelectButton from './select-button';
import { useSelect1, UseSelectProps } from './use-select';
import { CollectionChildren } from '@react-types/shared';
import SelectItem from './select-item';

interface Props extends UseSelectProps {
  /**
   * The content of the select. It is usually the `Select.Trigger`,
   * and `Select.Menu`
   */
  // children: CollectionChildren<any>;
}

export type SelectProps = Props;

const Select = (props: SelectProps) => {
  const { children, ...otherProps } = props;
  const context = useSelect1(props);
  console.log('selected key', context.state.selectedKey, context.state.selectedItem);

  return (
    <SelectProvider value={context}>
      <Popover.Root {...context.popoverProps} open={context.state.isOpen}>
        {/* <Popover.Portal> */}
        <Popover.Content side="bottom" sideOffset={4}>
          <SelectMenu aria-label="dfnkaf">{children}</SelectMenu>
        </Popover.Content>
        {/* </Popover.Portal> */}
      </Popover.Root>
    </SelectProvider>
  );
};

if (__DEV__) {
  Select.displayName = 'NextUI.Select';
}

type SelectComponent<P = {}> = React.FC<P> & {
  Trigger: typeof SelectTrigger;
  Button: typeof SelectButton;
  Menu: typeof SelectMenu;
  // Item: typeof SelectItemBase;
  Section: typeof Section;
};

Select.toString = () => '.nextui-select';

export default Select as SelectComponent<SelectProps>;
