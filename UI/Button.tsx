import { ReactNode, forwardRef } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { useDOMRef } from './utils/dom';
import { useButton } from '@react-aria/button';

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
      noStyle: {
        height: 'min-content',
        color: '$white',
      },
      primary: {
        backgroundColor: '$primaryBlue',
        color: '$white',
        px: '16px',
        py: '4px',
        '&:hover': {
          backgroundColor: '$hoverBlue',
        },

        '&:active': {
          backgroundColor: '$clickBlue',
        },
      },

      danger: {
        backgroundColor: '$red',
        color: '$white',
        px: '16px',
        py: '4px',

        '&:hover': {
          backgroundColor: '$hoverRed',
        },

        '&:active': {
          backgroundColor: '$clickRed',
        },
      },

      secondary: {
        boxSizing: 'border-box',
        backgroundColor: '$white',
        color: '$black',
        px: '16px',
        py: '4px',
        border: '1px solid $dividerGray',

        '&:hover': {
          border: '2px solid rgba(0, 105, 218, 0.2)',
          px: '15px',
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

        '&:hover': {
          backgroundColor: '$hoverBlue',
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

        '&:hover': {
          border: '2px solid rgba(0, 105, 218, 0.2)',
          px: '15px',
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

        '&:hover': {
          px: '7px',
          border: '2px solid rgba(0, 105, 218, 0.2)',
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

        '&:hover': {
          border: '2px solid rgba(0, 105, 218, 0.2)',
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

        '&:hover': {
          backgroundColor: '$dividerGray',
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

        '&:hover': {
          backgroundColor: '$dividerGray',
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

        '&:hover': {
          backgroundColor: '$dividerGray',
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

        '&:hover': {
          backgroundColor: '$dividerGray',
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
  noStyle: 'text',
  primary: 'text',
  danger: 'text',
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
    | 'noStyle'
    | 'primary'
    | 'secondary'
    | 'primaryPlusIcon'
    | 'secondaryPlusIcon'
    | 'secondaryIcon'
    | 'minimal'
    | 'minimalPlusIcon'
    | 'minimalIcon'
    | 'secondaryIconSmall'
    | 'minimalIconSmall'
    | 'danger';
  disabled?: boolean;
  css?: CSS;
  onClick?: () => void;
  children?: ReactNode | ReactNode[];
};

export const Button = forwardRef<HTMLButtonElement, Props>((allProps: Props, ref) => {
  const { variant, children, disabled = false, onClick, ...props } = allProps;
  const demoRef = useDOMRef(ref);
  const { buttonProps } = useButton(allProps, demoRef);
  return (
    <StyledButton
      ref={demoRef}
      variant={variant}
      disabled={disabled}
      {...buttonProps}
      onClick={onClick}
    >
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
});
