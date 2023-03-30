import React from 'react';

import { useButton } from '@react-aria/button';
import { mergeProps } from '@react-aria/utils';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

import { styled } from '../../stitches.config';
import { useDOMRef } from '../utils/dom';
import { useDropdownContext } from './dropdown-context';
import type { Option } from './use-dropdown';

export const StyledButton = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '4px',
  padding: '12px',
  // width: '224px',
  height: '36px',

  fontFamily: '$system',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '13px',
  lineHeight: '16px',
  border: '1px solid #E8E8E8',

  gap: 5,
  backgroundColor: 'white',
  color: '$textBlack',

  variants: {
    status: {
      empty: {
        color: '#C2C2C2',
      },
      full: {
        color: '#333333',
      },
    },
    isOpen: {
      true: {
        padding: '11px',
        border: '2px solid #0069DA',
      },
      false: {},
    },
  },
});

const getTitleFromDropdownedKeys = (items: Option[], selectedKeys: Set<React.Key>) => {
  let titleStrings = items
    .filter(({ id, name }) => {
      return selectedKeys.has(id);
    })
    .map(({ id, name }) => name)
    .join(', ');
  if (titleStrings.length > 31) {
    titleStrings = titleStrings.substr(0, 28).concat('...');
  }
  return titleStrings;
};

export const SelectButton = React.forwardRef<
  HTMLButtonElement,
  { isOpen: boolean; placeholder: string }
>((props, ref) => {
  const demoRef = useDOMRef(ref);
  const { buttonProps } = useButton(props, demoRef);
  const { items, selectedKeys, width } = useDropdownContext();
  let title = getTitleFromDropdownedKeys(items, selectedKeys);
  const { isOpen, placeholder } = props;
  let status;
  if (!title || title == '') {
    status = 'empty';
    title = placeholder;
  } else status = 'full';
  return (
    <StyledButton
      ref={demoRef}
      status={status}
      isOpen={isOpen}
      css={{ width }}
      {...mergeProps(buttonProps)}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>{title}</p>
        {isOpen && <AiOutlineUp height="6px" width="8.91px" />}
        {!isOpen && <AiOutlineDown color={'#C2C2C2'} height="6px" width="8.91px" />}
      </div>
    </StyledButton>
  );
});
