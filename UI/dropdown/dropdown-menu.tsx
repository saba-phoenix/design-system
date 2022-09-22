import React, { RefAttributes, PropsWithoutRef } from 'react';

import { useListBox } from '@react-aria/listbox';
import { mergeProps } from '@react-aria/utils';
import { useTreeState } from '@react-stately/tree';
import { AriaListBoxProps } from '@react-types/listbox';
import { DOMProps, AriaLabelingProps } from '@react-types/shared';

import { CSS } from '../../stitches.config';
import { __DEV__ } from '../utils/assertion';
import { useDOMRef, useSyncRef } from '../utils/dom';
import { useDropdownContext } from './dropdown-context';
import DropdownItem from './dropdown-item';
import { StyledDropdownMenu, StyledDropdownUnorderedList } from './dropdown.styles';
import { ListProps, useListState } from '@react-stately/list';
import { Flex } from '../../components/Flex';
import { Text } from '../Text';
import { Button } from '../Button';
import { DropdownSearch } from './dropdown-search';

interface Props<T> extends AriaListBoxProps<T>, DOMProps, AriaLabelingProps {
  as?: keyof JSX.IntrinsicElements;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props<object>>;

export type SelectMenuProps<T = object> = Omit<Props<T> & NativeAttrs & { css?: CSS }, 'children'>;

const DropdownMenu = (props: SelectMenuProps) => {
  const { css = {}, as, color = 'default', ...otherProps } = props;

  const context = useDropdownContext();
  const { selection, state, reset, search, isReset, title } = context;
  const completeProps = {
    ...mergeProps(context, otherProps),
  };

  const width = selection === 'multiple' ? '216px' : selection === 'single' ? '130px' : '114px';

  const domRef = useDOMRef(context.ref);

  const items = Object.fromEntries(
    [...state.collection].map((item) => {
      return [item.key, item.props.children];
    })
  );

  const { listBoxProps } = useListBox(completeProps, state, domRef);

  // saba: need to fix padding
  return (
    <StyledDropdownMenu
      css={{
        width: `${width} !important`,
        maxWidth: `${width} !important`,
        minWidth: `${width} !important`,
      }}
    >
      <Flex direction="column" gap="0px">
        {search && <DropdownSearch />}

        {(isReset || !!title) && (
          <Flex
            direction="row"
            justify="between"
            css={{
              paddingBlock: '8px',
              paddingInline: '8px',
            }}
          >
            {title && (
              <Text variant="rabbit" color="$textGray">
                {title}
              </Text>
            )}
            {isReset && (
              <Button
                variant="noStyle"
                css={{
                  maxHeight: 'min-content',
                  alignItems: 'flex-start',
                  alignContent: 'flex-start',
                }}
                onClick={() => {
                  console.log('Hello saba');
                  reset();
                }}
              >
                <Text variant="rabbit" color="$primaryBlue">
                  Reset
                </Text>
              </Button>
            )}
          </Flex>
        )}
        <StyledDropdownUnorderedList
          ref={domRef}
          as={as}
          css={{ ...(css as any) }}
          {...listBoxProps}
        >
          {[...state.collection].map((item) => {
            let selectItem = <DropdownItem key={item.key} color={color} item={item} />;

            if (item.wrapper) {
              selectItem = item.wrapper(selectItem);
            }

            return selectItem;
          })}
        </StyledDropdownUnorderedList>
      </Flex>
    </StyledDropdownMenu>
  );
};
if (__DEV__) {
  DropdownMenu.displayName = 'PotionUI.DropdownMenu';
}

type DropdownComponent<T, P = Record<string, unknown>> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>;

DropdownMenu.toString = () => '.potionui-Dropdown-menu';

export default DropdownMenu as DropdownComponent<HTMLUListElement, SelectMenuProps>;
