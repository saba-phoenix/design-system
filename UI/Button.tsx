import { ReactNode } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';

import { CSS, styled } from '../stitches.config';
import { Flex } from './Flex';

export const StyledButton = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: '32px',
  fontFamily: '$system',
  fontSize: '13px',
  fontWeight: '$semibold',
  lineHeight: '16px',
  borderRadius: '$radii$default',

  '&:disabled': {
    backgroundColor: '$dividerGray',
    color: '$textGray',
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$primaryBlue',
        color: '$white',
        px: '16px',
        py: '4px',
        '@hover': {
          '&:hover': {
            backgroundColor: '$hoverBlue',
          },
        },
        '&:active': {
          backgroundColor: '$clickBlue',
        },
      },

      secondary: {
        boxSizing: 'border-box',
        backgroundColor: '$white',
        color: '$black',
        px: '16px',
        py: '4px',
        border: '1px solid $dividerGray',
        '@hover': {
          '&:hover': {
            border: '2px solid rgba(0, 105, 218, 0.2)',
            px: '15px',
          },
        },
        '&:focus': {
          border: '1px solid $primaryBlue',
          px: '16px',
        },
        '&:active': {
          backgroundColor: '#F2F8FD',
          px: '15px',
          border: '2px solid rgba(0, 105, 218, 0.2)',
        },
      },

      primaryPlusIcon: {
        backgroundColor: '$primaryBlue',
        color: '$white',
        px: '16px',
        py: '10px',
        '@hover': {
          '&:hover': {
            backgroundColor: '$hoverBlue',
          },
        },
        '&:active': {
          backgroundColor: '$clickBlue',
        },
      },

      secondaryPlusIcon: {
        boxSizing: 'border-box',
        backgroundColor: '$white',
        color: '$black',
        px: '16px',
        py: '4px',
        border: '1px solid $dividerGray',
        '@hover': {
          '&:hover': {
            border: '2px solid rgba(0, 105, 218, 0.2)',
            px: '15px',
          },
        },
        '&:focus': {
          border: '1px solid $primaryBlue',
          px: '16px',
        },
        '&:active': {
          backgroundColor: '#F2F8FD',
          px: '15px',
          border: '2px solid rgba(0, 105, 218, 0.2)',
        },
      },

      secondaryIcon: {
        backgroundColor: '$white',
        color: '$black',
        width: '32px',
        px: '8px',
        py: '8px',
        border: '1px solid $dividerGray',
        '@hover': {
          '&:hover': {
            px: '7px',
            border: '2px solid rgba(0, 105, 218, 0.2)',
          },
        },
        '&:focus': {
          border: '1px solid $primaryBlue',
        },
        '&:active': {
          backgroundColor: '#F2F8FD',
          border: '2px solid rgba(0, 105, 218, 0.2)',
        },
      },

      secondaryIconSmall: {
        backgroundColor: '$white',
        color: '$black',
        height: '20px',
        width: '20px',
        px: '4px',
        py: '4px',
        border: '1px solid $dividerGray',
        '@hover': {
          '&:hover': {
            border: '2px solid rgba(0, 105, 218, 0.2)',
          },
        },
        '&:focus': {
          border: '1px solid $primaryBlue',
        },
        '&:active': {
          backgroundColor: '#F2F8FD',
          border: '2px solid rgba(0, 105, 218, 0.2)',
        },
      },

      minimal: {
        backgroundColor: '$white',
        color: '$textBlack',
        px: '16px',
        py: '10px',
        '@hover': {
          '&:hover': {
            backgroundColor: '$dividerGray',
          },
        },
        '&:active': {
          backgroundColor: '$inactiveTextGray',
        },
      },
      minimalPlusIcon: {
        backgroundColor: '$white',
        color: '$textBlack',
        px: '16px',
        py: '10px',
        '@hover': {
          '&:hover': {
            backgroundColor: '$dividerGray',
          },
        },
        '&:active': {
          backgroundColor: '$inactiveTextGray',
        },
      },
      minimalIcon: {
        backgroundColor: '$white',
        color: '$textBlack',
        width: '32px',
        padding: '8px',
        '@hover': {
          '&:hover': {
            backgroundColor: '$dividerGray',
          },
        },
        '&:active': {
          backgroundColor: '$inactiveTextGray',
        },
      },

      minimalIconSmall: {
        height: '20px',
        width: '20px',
        backgroundColor: '$white',
        color: '$textBlack',
        padding: '4px',
        '@hover': {
          '&:hover': {
            backgroundColor: '$dividerGray',
          },
        },
        '&:active': {
          backgroundColor: '$inactiveTextGray',
        },
      },
    },
    disabled: {
      true: {
        backgroundColor: '$dividerGray',
        color: '$textGray',
        pointerEvents: 'none',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const buttonType = {
  primary: 'text',
  secondary: 'text',
  primaryPlusIcon: 'text-icon',
  secondaryPlusIcon: 'text-icon',
  secondaryIcon: 'icon',
  secondaryIconSmall: 'icon',
  minimal: 'text',
  minimalPlusIcon: 'text-icon',
  minimalIcon: 'icon',
  minimalIconSmall: 'icon',
};

type Props = {
  variant:
    | 'primary'
    | 'secondary'
    | 'primaryPlusIcon'
    | 'secondaryPlusIcon'
    | 'secondaryIcon'
    | 'minimal'
    | 'minimalPlusIcon'
    | 'minimalIcon'
    | 'secondaryIconSmall'
    | 'minimalIconSmall';
  disabled?: boolean;
  css?: CSS;
  children?: ReactNode | ReactNode[];
};

export const Button = ({ variant, children, disabled = false, ...props }: Props) => {
  return (
    <StyledButton variant={variant} disabled={disabled}>
      <span style={{ position: 'relative' }}>
        {buttonType[variant] === 'text-icon' && (
          <Flex gap={'4'}>
            <AiOutlinePlus />
            {children}
          </Flex>
        )}
        {buttonType[variant] === 'icon' && (
          <Flex gap={'4'}>
            <AiOutlinePlus />
          </Flex>
        )}
        {buttonType[variant] === 'text' && children}
      </span>
    </StyledButton>
  );
};
