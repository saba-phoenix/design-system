import { styled, VariantProps } from '../theme/stitches.config';
import { cssFocusVisible } from '../theme/shared-css';

export const StyledSelectMenu = styled('ul', {
  $$selectItemHeight: '$space$13',
  $$selectMenuPadding: '8px',
  $$selectMenuWidth: '224px',
  $$selectMenuMinWidth: '224px',
  listStyle: 'none',
  position: 'relative',
  maxWidth: '$$selectMenuWidth',
  minWidth: '$$selectMenuMinWidth',
  width: '100%',
  p: '$$selectMenuPadding',
  m: 0,
  outline: 'none',
  backgroundColor: '$white',
  borderRadius: '4px',
  boxShadow: '0px 0px 12px 4px rgba(0, 0, 0, 0.06)',
});

export const StyledSelectItemIconWrapper = styled('span', {
  dflex: 'center',
  flexShrink: 0,
  mr: '$4',
});

export const StyledSelectItemContentWrapper = styled('div', {
  d: 'flex',
  flex: '1 1 0%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  lineHeight: 1.2,
});

export const StyledSelectItemContent = styled('span', {
  flex: '1 1 0%',
});

export const StyledSelectItem = styled(
  'li',
  {
    $$selectItemPressedScale: 0.97,
    $$selectItemTextColor: '$colors$text',
    $$selectItemBorderRadius: '$radii$sm',
    $$selectItemKeyboardColor: '$colors$accents8',
    $$selectItemDescriptionColor: '$colors$accents8',
    dflex: 'center',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: 'system-ui',
    fontSize: '13px',
    fontWeight: 500,
    borderRadius: '4px',

    justifyContent: 'space-between',
    bg: 'transparent',
    position: 'relative',
    height: '40px',
    px: '6px',
    br: '$$selectItemBorderRadius',
    color: '$$selectItemTextColor',
    mb: 0,
    transition: '$selectItem',
    /* Avoid blurriness */
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
    $$selectItemShadow: '$colors$primaryShadow',

    '@hover': {
      '&:hover': {
        backgroundColor: '#F2F4F7',
      },
    },

    defaultVariants: {
      color: 'default',
      textColor: 'default',
      dividerWeight: 'light',
      variant: 'flat',
    },
  },
  cssFocusVisible
);

export const StyledSelectSectionWrapper = styled('li', {
  mb: 0,
});

export type SelectItemVariantsProps = VariantProps<typeof StyledSelectItem>;
