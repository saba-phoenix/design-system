import React, { useRef } from 'react';

import * as Popover from '@radix-ui/react-popover';
import { Section } from '@react-stately/collections';

// import { Popover } from '@nextui-org/react';
import { CollectionChildren } from '@react-types/shared';

import { __DEV__ } from '../utils/assertion';
import DropdownItemBase from './base/dropdown-item-base';
import { DropdownProvider } from './dropdown-context';
import DropdownMenu from './dropdown-menu';
import DropdownTrigger from './dropdown-trigger';
import { useDropdown, UseDropdownProps } from './use-dropdown';
import { contrast } from 'chroma-js';

type Option = {
  key: string;
  name: string;
};

interface Props extends UseDropdownProps {
  /**
   * The content of the select. It is usually the `Select.Trigger`,
   * and `Select.Menu`
   */
  options: Option[];
}

export type DropdownProps = Props;

const Dropdown = (props: DropdownProps) => {
  const { children, selection = 'multiple', options } = props;

  const ref = useRef<HTMLUListElement>(null);
  console.log('rerendered');
  const collections = options.map(({ key, name }) => (
    <DropdownItemBase key={key}>{name}</DropdownItemBase>
  ));
  // const [dropdownTrigger, menu] = React.Children.toArray(children);
  const context = useDropdown({ ...props, children: collections, ref });

  return (
    <DropdownProvider value={context}>
      <Popover.Root {...context.popoverProps} open={context.isOpen} onOpenChange={context.setOpen}>
        {children}
        <Popover.Portal>
          <Popover.Content
            side="bottom"
            sideOffset={4}
            align={'start'}
            onPointerDownOutside={(e) => {
              console.log('pointer down outside');
              context.setOpen(false);
            }}
            onPointerDown={(e) => {
              console.log('clicked');
              if (selection !== 'multiple') {
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
  Section: typeof Section;
};

Dropdown.toString = () => '.potionui-Dropdown';

export default Dropdown as DropdownComponent<DropdownProps>;
