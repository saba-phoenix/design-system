import { CSS } from '@stitches/react';
import { Flex } from '../components/Flex';
import { styled } from '../stitches.config';
import { Text } from './Text';

export const StyledInput = styled('input', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  margin: '0',
  outline: 'none',
  padding: '12px',
  width: '100%',
  borderRadius: '$radii$default',
  height: '36px',
  color: '$textBlack',

  fontFamily: '$system',
  fontStyle: 'normal',
  fontWeight: '$semibold',
  fontSize: '13px',
  lineHeight: '16px',
  backgroundColor: '$white',

  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  '&::placeholder': {
    color: '$inactiveTextGray',
  },
  '&:focus': {
    '&::placeholder': {
      color: 'transparent',
    },
  },

  variants: {
    variant: {
      ghost: {
        backgroundColor: 'transparent',
        border: '1px solid $dividerGray',

        '&:focus': {
          border: '1px solid $primaryBlue',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
      },
    },
    error: {
      true: {
        border: '2px solid $red',
        '&:focus': {
          border: '2px solid $red',
        },
      },
      false: {},
    },
    cursor: {
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
  defaultVariants: {
    variant: 'ghost',
  },
});

type Props = {
  variant?: 'ghost';
  placeholder?: string;
  value?: string;
  error?: boolean;
  height?: string | number;
  width?: string | number;
  label?: string;
  status?: string;
  css?: CSS;
};

export const Input = ({ variant, placeholder, value, error, label, status, ...props }: Props) => {
  const InputField = (
    <StyledInput
      variant={variant ?? 'ghost'}
      placeholder={placeholder ?? ''}
      value={value}
      error={error}
      css={{
        ...props.css,
        height: props.height ? `${props.height} !important` : '32px',
        width: props.width ? `${props.width} !important` : '100%',
      }}
    />
  );
  return (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="8">
        {label && <Text variant="rabbit"> {label} </Text>}
        {InputField}
      </Flex>
      {status && <Text variant="rabbit"> {status}</Text>}
    </Flex>
  );
};
