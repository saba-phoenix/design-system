import { forwardRef } from 'react';

import { CSS } from '@stitches/react/types/css-util';

import { styled, css } from '../stitches.config';

export const StyledText = styled('span', {
  // Reset
  margin: '0',
  display: 'block',
  fontFamily: '$system',
  color: '$textBlack',
  letterSpacing: '0px',

  variants: {
    variant: {
      hamster: {
        fontSize: '11px',
        lineHeight: '12px',
        fontWeight: '$semibold',
      },
      rabbit: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: '$semibold',
      },
      skinnyDog: {
        fontSize: '13px',
        lineHeight: '16px',
        fontWeight: '$regular',
      },
      dog: {
        fontSize: '13px',
        lineHeight: '16px',
        fontWeight: '$semibold',
      },
      fatDog: {
        fontSize: '13px',
        lineHeight: '16px',
        fontWeight: '$bold',
      },
      wolf: {
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: '$semibold',
      },
      moose: {
        fontSize: '16px',
        lineHeight: '18px',
        fontWeight: '$bold',
      },
      bear: {
        fontSize: '18px',
        lineHeight: '18px',
        fontWeight: '$bold',
      },
      skinnyElephant: {
        fontSize: '24px',
        lineHeight: '40px',
        fontWeight: '$semibold',
      },
      elephant: {
        fontSize: '24px',
        lineHeight: '40px',
        fontWeight: '$bold',
      },
    },
  },
  defaultVariants: {
    variant: 'dog',
  },
});

type Props = {
  variant:
    | 'hamster'
    | 'rabbit'
    | 'skinnyDog'
    | 'dog'
    | 'fatDog'
    | 'wolf'
    | 'moose'
    | 'bear'
    | 'skinnyElephant'
    | 'elephant';
  align?: 'start' | 'end' | 'center' | 'normal';
  color?: string;
  css?: CSS;
  children?: string | string[];
};

export const Text = forwardRef<HTMLSpanElement, Props>(
  ({ variant, children, color, ...props }, ref) => {
    return (
      <StyledText
        ref={ref}
        {...props}
        variant={variant}
        css={{
          ...css,
          color: color ? `${color} !important` : undefined,
          textAlign: props.align ? props.align : 'normal',
          ...props.css,
        }}
      >
        {children}
      </StyledText>
    );
  }
);
