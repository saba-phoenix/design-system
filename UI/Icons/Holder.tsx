import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { forwardRef } from 'react';
import { AiOutlineHolder } from 'react-icons/ai';
import { styled } from '../../stitches.config';

const StyledHolder = styled('div', {
  display: 'flex',

  color: '$inactiveTextGray',
  variants: {
    variant: {
      dropdown: {
        py: '13px',
      },
    },

    isDragging: {
      true: {
        cursor: 'grabbing !important',
      },
    },
  },
  '&:hover': {
    cursor: 'grab',
  },

  '&:active': {
    cursor: 'grabbing !important',
    color: '$textBlack',
    zIndex: 100,
    '*': {
      cursor: 'grabbing !important',
    },
  },

  defaultVariants: {
    variant: 'dropdown',
    // isDragging: false,
  },
});

type HolderProp = {
  variant?: 'dropdown';
  listeners?: SyntheticListenerMap;
  isDragging?: boolean;
};
export const Holder = forwardRef<HTMLDivElement, HolderProp>((allProps: HolderProp, ref) => {
  const { variant, listeners, isDragging } = allProps;
  //   console.log('rrr: isDragging', isDragging);
  return (
    <StyledHolder variant={variant} isDragging={isDragging} ref={ref} {...listeners}>
      <AiOutlineHolder width={'9px'} height={'14px'} />
    </StyledHolder>
  );
});
