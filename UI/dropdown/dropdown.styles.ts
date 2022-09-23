import { styled, VariantProps } from '../../stitches.config';
export const StyledDropdownUnorderedList = styled('ul', {
  width: '100%',
  listStyle: 'none',
  m: 0,
  p: 0,
  // $$selectMenuPadding: '1px',
  // $$selectMenuWidth: '224px',
  // $$selectMenuMinWidth: '224px',

  // position: 'relative',
  // maxWidth: '$$selectMenuWidth',
  // minWidth: '$$selectMenuMinWidth',
  // $$selectItemHeight: '40px',
  // $$selectMenuPadding: '1px',
  // $$selectMenuWidth: '224px',
  // $$selectMenuMinWidth: '224px',
  // listStyle: 'none',
  // position: 'relative',
  // maxWidth: '$$selectMenuWidth',
  // minWidth: '$$selectMenuMinWidth',
  // width: '100%',
  // py: '4px',
  // px: '4px',
  // m: 0,
  // outline: 'none',
  // backgroundColor: '$white',
  // borderRadius: '4px',
  // boxShadow: '0px 0px 12px 4px rgba(0, 0, 0, 0.06)',
});

export const StyledDropdownMenu = styled('div', {
  $$selectItemHeight: '40px',
  $$selectMenuPadding: '1px',
  $$selectMenuWidth: '224px',
  $$selectMenuMinWidth: '224px',

  position: 'relative',
  maxWidth: '$$selectMenuWidth',
  minWidth: '$$selectMenuMinWidth',
  width: '216px',
  py: '4px',
  px: '4px',
  m: 0,
  outline: 'none',
  backgroundColor: '$white',
  borderRadius: '4px',
  boxShadow: '0px 0px 12px 4px rgba(0, 0, 0, 0.06)',
  // display: 'flex',
  // direction: 'column',
});

export const StyledDropdownItemIconWrapper = styled('span', {
  dflex: 'center',
  flexShrink: 0,
});

export const StyledDropdownItemContentWrapper = styled('div', {
  d: 'flex',
  flex: '1 1 0%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  lineHeight: 1.2,
});

export const StyledDropdownItemContent = styled('span', {
  flex: '1 1 0%',
});

export const StyledDropdownItemWrapper = styled('li', {
  $$selectItemPressedScale: 0.97,
  $$selectItemBorderRadius: '$radii$default',
  display: 'flex',
  outline: 'none',
  p: 0,
  m: 0,
  borderRadius: '4px',
  variants: {
    hovered: {
      true: {
        backgroundColor: '#F2F4F7',
      },
      false: {},
    },
  },
  // cursor: 'pointer',
  // fontFamily: '$system',
  // fontSize: '13px',
  // lineHeight: '16px',
  // fontWeight: 600,
  // borderRadius: '4px',

  // justifyContent: 'center',
  // justifyItems: 'center',
  // alignItems: 'center',
  // bg: 'transparent',
  // position: 'relative',
  // height: '40px',
  // pl: '7px',
  // py: '14px',
  // br: '$$selectItemBorderRadius',
  // color: '$textBlack',
  // /* Avoid blurriness */
  // transform: 'translateZ(0)',
  // backfaceVisibility: 'hidden',
  // variants: {
  //   hovered: {
  //     true: {
  //       backgroundColor: '#F2F4F7',
  //     },
  //     false: {},
  //   },
  // },
});

export const StyledDropdownItem = styled('div', {
  $$selectItemPressedScale: 0.97,
  $$selectItemBorderRadius: '$radii$default',
  display: 'flex',
  outline: 'none',
  cursor: 'pointer',
  fontFamily: '$system',
  fontSize: '13px',
  lineHeight: '16px',
  fontWeight: 600,

  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  bg: 'transparent',
  position: 'relative',
  height: '40px',
  // width: '100%',
  pl: '7px',
  py: '14px',
  br: '$$selectItemBorderRadius',
  color: '$textBlack',
  /* Avoid blurriness */
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden',
});

export const StyledDropdownSectionWrapper = styled('li', {
  mb: 0,
});

export type SelectItemVariantsProps = VariantProps<typeof StyledDropdownItem>;
