import { useState } from 'react';
import { styled, VariantProps } from '../../stitches.config';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDropdownContext } from './dropdown-context';
const StyledSearch = styled('div', {
  padding: '9.5px',
  paddingLeft: '8px',
  margin: '0px',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '13.75px',
});

const StyledInput = styled('input', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  margin: '0',
  outline: 'none',
  //   padding: '12px',
  width: '100%',
  borderRadius: '$radii$default',
  //   height: '36px',
  color: '$textBlack',

  fontFamily: '$system',
  fontStyle: 'normal',
  fontWeight: '$semibold',
  fontSize: '13px',
  lineHeight: '16px',
  backgroundColor: '$white',
  //   border: '1px solid $dividerGray',

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
});
export const DropdownSearch = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [text, setText] = useState<string | undefined>(undefined);
  const { setSearchPhrase } = useDropdownContext();
  return (
    <StyledSearch>
      <AiOutlineSearch color="#C2C2C2" height={'12.5px'} width={'12.5px'} />
      <StyledInput
        placeholder="Search..."
        value={text}
        onFocus={(e) => {
          setFocus(true);
        }}
        onBlur={(e) => {
          setFocus(false);
        }}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && focus) {
            setSearchPhrase(text);
          }
        }}
      />
      {/* <input /> */}
    </StyledSearch>
  );
};
