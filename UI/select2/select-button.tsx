import React from 'react';

import { useButton } from '@react-aria/button';
import { mergeProps } from '@react-aria/utils';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

import { styled } from '../../stitches.config';
import { useDOMRef } from '../utils/dom';
import { useSelectContext } from './select-context';

export const StyledButton = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '4px',
  padding: '12px',
  width: '224px',
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
        border: '2px solid #0069DA',
      },
      false: {},
    },
  },
});

const getTitleFromSelectedKeys = (
  items: {
    [k: string]: string;
  },
  selectedKeys: Set<React.Key>
) => {
  let titleStrings = Object.entries(items)
    .filter(([key, value]) => selectedKeys.has(key))
    .map(([key, value]) => value)
    .join(', ');
  if (titleStrings.length > 33) {
    titleStrings = titleStrings.substr(0, 30).concat('...');
  }
  return titleStrings;
};

export const SelectButton = React.forwardRef<HTMLButtonElement, { isOpen: boolean }>(
  (props, ref) => {
    const demoRef = useDOMRef(ref);
    const { buttonProps } = useButton(props, demoRef);
    const { items, selectedKeys } = useSelectContext();
    let title = getTitleFromSelectedKeys(items, selectedKeys);
    // eslint-disable-next-line prefer-const
    let { isOpen } = props;
    let status;
    if (!title || title == '') {
      status = 'empty';
      title = 'Select input';
    } else status = 'full';
    return (
      <StyledButton ref={demoRef} status={status} isOpen={isOpen} {...mergeProps(buttonProps)}>
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
          {isOpen && <AiOutlineUp />}
          {!isOpen && <AiOutlineDown color={'#C2C2C2'} />}
        </div>
      </StyledButton>
    );
  }
);
