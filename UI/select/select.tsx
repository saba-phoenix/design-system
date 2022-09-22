import React, { ReactNode, useState, useRef } from 'react';
import { Section } from '@react-stately/collections';

// import { Popover } from '@nextui-org/react';
import * as Popover from '@radix-ui/react-popover';
import { __DEV__ } from '../utils/assertion';

import SelectItemBase from './base/select-item-base';
import { SelectProvider } from './select-context';
import SelectTrigger from './select-trigger';
import SelectMenu from './select-menu';
import { useSelect, UseSelectProps } from './use-select';
import { CollectionChildren } from '@react-types/shared';

interface Props extends UseSelectProps {
  /**
   * The content of the select. It is usually the `Select.Trigger`,
   * and `Select.Menu`
   */
  // type: 'single' | 'multi';
  children: CollectionChildren<any>;
}

export type SelectProps = Props;

const Select = (props: SelectProps) => {
  const { children, selectionMode, ...otherProps } = props;
  // const context = useSelect(props);
  const btnRef = useRef<HTMLButtonElement>(null);

  // saba: i deleted context.popover props from popover.root

  return (
    <p>fg</p>
    // <SelectProvider value={context}>
    //   <Popover.Root open={context.isOpen} onOpenChange={(open) => {}} modal={false}>
    //     <SelectTrigger />
    //     <Popover.Portal>
    //       <Popover.Content
    //         {...context.listBoxProps}
    //         side="bottom"
    //         sideOffset={4}
    //         onPointerDownOutside={(e) => {
    //           context.setOpen(false);
    //         }}
    //         onClick={(e) => {
    //           if (selectionMode === 'single') {
    //             context.setOpen(false);
    //           }
    //         }}
    //         ref={(context.ref as any) as React.Ref<HTMLDivElement>}
    //         asChild
    //       >
    //         <SelectMenu aria-label="select-menu" ref={context.ref}>
    //           {children}
    //         </SelectMenu>
    //       </Popover.Content>
    //     </Popover.Portal>
    //   </Popover.Root>
    //   //{' '}
    // </SelectProvider>
    // <Popover.Root open={true} onOpenChange={(open) => {}} modal={false}>
    //   <SelectTrigger ref={btnRef} />
    //   <Popover.Portal>
    //     <Popover.Content
    //       // {...context.listBoxProps}
    //       side="bottom"
    //       sideOffset={4}
    //       onPointerDownOutside={(e) => {}}
    //       onClick={(e) => {
    //         if (selectionMode === 'single') {
    //         }
    //       }}
    //       asChild
    //     >
    //       <SelectMenu aria-label="select-menu">{children}</SelectMenu>
    //     </Popover.Content>
    //   </Popover.Portal>
    // </Popover.Root>
  );
};

// if (__DEV__) {
//   Select.displayName = 'PotionUI.Select';
// }

type SelectComponent<P = {}> = React.FC<P> & {
  Trigger: typeof SelectTrigger;
  Menu: typeof SelectMenu;
  Item: typeof SelectItemBase;
  Section: typeof Section;
};

Select.toString = () => '.potionui-select';

export default Select as SelectComponent<SelectProps>;
