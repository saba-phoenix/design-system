import React from 'react';
import { styled } from '../stitches.config';
import { violet } from '@radix-ui/colors';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '100%',
  variants: {
    size: {
      small: {
        width: '20px',
        height: '20px',
      },
    },
  },
  padding: 0,
  margin: 0,
  defaultVariants: {
    size: 'small',
  },
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: violet.violet11,
  color: '$white',
  fontSize: 13,
  lineHeight: 1,
  fontWeight: 500,
});

// Exports
export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

export type AvatarProps = {
  src?: string;
  fallback?: string;
  delay?: number;
};

const AvatarDemo = ({ src, fallback = '?', delay = 100 }: AvatarProps) => (
  <Avatar>
    <AvatarImage src={src} alt="Colm Tuite" />
    <AvatarFallback delayMs={delay}>{fallback}</AvatarFallback>
  </Avatar>
);

export default AvatarDemo;
