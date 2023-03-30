import React, { useRef } from 'react';

import * as Popover from '@radix-ui/react-popover';

import { __DEV__ } from '../utils/assertion';
import DropdownItemBase from './base/dropdown-item-base';
import { DropdownProvider } from './dropdown-context';
import DropdownMenu from './dropdown-menu';
import DropdownTrigger from './dropdown-trigger';
import { SelectButton } from './select-button';
import { useDropdown, UseDropdownProps } from './use-dropdown';

interface Props extends UseDropdownProps {}

export type DropdownProps = Props;

const Dropdown = (props: DropdownProps) => {
  const { children, options } = props;

  const ref = useRef<HTMLUListElement>(null);
  const context = useDropdown({ ...props, options, ref });

  return (
    <DropdownProvider value={context}>
      <Popover.Root {...context.popoverProps} open={context.isOpen} onOpenChange={context.setOpen}>
        {children}
        <Popover.Portal>
          <Popover.Content
            side="bottom"
            sideOffset={4}
            align={'start'}
            onPointerDownOutside={() => {
              if (context.isOpen === true) {
                context.setOpen(false);
              }
            }}
          >
            <DropdownMenu aria-label="select-menu" ref={ref} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </DropdownProvider>
  );
};

if (__DEV__) {
  Dropdown.displayName = 'PotionUI.Dropdown';
}

type DropdownComponent<P = Record<string, unknown>> = React.FC<P> & {
  Trigger: typeof DropdownTrigger;
  Menu: typeof DropdownMenu;
  Item: typeof DropdownItemBase;
  SelectButton: typeof SelectButton;
};

Dropdown.toString = () => '.potionui-Dropdown';

export default Dropdown as DropdownComponent<DropdownProps>;
