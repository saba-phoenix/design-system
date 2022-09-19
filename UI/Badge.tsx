import { styled } from '../stitches.config';

export const Badge = styled('span', {
  // Reset
  alignItems: 'center',
  height: '20px',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,

  fontFamily: '$system',
  fontWeight: '$semibold',
  fontSize: '11px',
  lineHeight: '12px',

  justifyContent: 'center',
  verticalAlign: 'middle',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  borderRadius: '$radii$round',
  whiteSpace: 'nowrap',
  padding: '4px 8px 4px 8px',

  variants: {
    variant: {
      A: {
        backgroundColor: '#D6D3EB',
        color: '#1D1A4F',
      },
      B: {
        backgroundColor: '#DED3EA',
        color: '#3A1462',
      },
      C: {
        backgroundColor: '#ECD8ED',
        color: '#3A1462',
      },
      D: {
        backgroundColor: '#EDD8DD',
        color: '#601B28',
      },
      E: {
        backgroundColor: '#EFE4DE',
        color: '#66371F',
      },
      F: {
        backgroundColor: '#F7EFCC',
        color: '#504617',
      },
      G: {
        backgroundColor: '#F0F7CC',
        color: '#465017',
      },
      H: {
        backgroundColor: '#E1F7CC',
        color: '#335017',
      },
      I: {
        backgroundColor: '#D2F7CC',
        color: '#1F5017',
      },
      J: {
        backgroundColor: '#CCF7D5',
        color: '#175023',
      },
      K: {
        backgroundColor: '#CCF7E4',
        color: '#175037',
      },
      L: {
        backgroundColor: '#CCF7E4',
        color: '#17504B',
      },
      M: {
        backgroundColor: '#CCECF7',
        color: '#174150',
      },
      N: {
        backgroundColor: '#CCDDF7',
        color: '#1D1750',
      },
      O: {
        backgroundColor: '#CCCEF7',
        color: '#321750',
      },
      P: {
        backgroundColor: '#ECECEC',
        color: '#3A3A3A',
      },
      Q: {
        backgroundColor: '#BFBFBF',
        color: '#3A3A3A',
      },
    },
  },

  defaultVariants: {
    variant: 'A',
  },
});
