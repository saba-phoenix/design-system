import { forwardRef } from 'react';
import { AiOutlineHolder } from 'react-icons/ai';
import { styled } from '../../stitches.config';

const StyledHolder = styled('div', {
  display: 'flex',
  cursor: 'grabbing',
  variants: {
    variant: {
      dropdown: {
        py: '13px',
      },
    },
  },
  defaultVariants: {
    variant: 'dropdown',
  },
});

type HolderProp = {
  variant?: 'dropdown';
};
export const Holder = forwardRef<HTMLDivElement, HolderProp>((allProps: HolderProp, ref) => {
  return (
    <StyledHolder ref={ref}>
      <AiOutlineHolder width={'9px'} height={'14px'} />
    </StyledHolder>
  );
});
