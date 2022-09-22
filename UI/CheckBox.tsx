import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

import { __DEV__ } from './utils/assertion';

// todo: add height, width
import { styled } from '../stitches.config';

export const StyledCheckBox = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  height: '12px',
  width: '12px',
  maxHeight: '12px',
  margin: '0px',
  color: 'White',
  borderRadius: '3px',
  variants: {
    status: {
      selected: {
        background: '$primaryBlue',
      },
      plain: {
        background: 'transparent',
        // height: '0px',
        // width: '0px',
      },
      unselected: {
        border: '1px solid #ABABAB',
      },
      none: {
        background: 'transparent',
        height: '0px',
        width: '0px',
      },
    },
  },
});

export interface CheckBoxProps {
  status: 'selected' | 'plain' | 'unselected';
}

export const CheckBox: React.FC<CheckBoxProps> = ({ status }: CheckBoxProps) => {
  return (
    <StyledCheckBox status={status} css={{ pl: '2px', pr: '2px', pt: '3px', pb: '2.5px' }}>
      {status === 'selected' && <AiOutlineCheck height={5.5} width={7.5} />}
    </StyledCheckBox>
  );
};
