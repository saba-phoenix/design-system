import React from 'react';
import { styled, keyframes } from './../stitches.config';
import { violet, blackA, mauve, green } from '@radix-ui/colors';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Button } from './Button';
import { Text } from './Text';
import { Flex } from './Flex';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$white',
  borderRadius: '$default',
  boxShadow: '0px 0px 12px 4px rgba(0, 0, 0, 0.06)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '504px',
  height: '166px',
  padding: '20px',
});

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title, {
  //   margin: 0,
  //   fontWeight: 500,
  //   color: mauve.mauve12,
  //   fontSize: 17,
});

const StyledDescription = styled(DialogPrimitive.Description, {
  //   margin: '10px 0 20px',
  //   color: mauve.mauve11,
  //   fontSize: 15,
  //   lineHeight: 1.5,
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;

// Your app...

const Box = styled('div', {});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: violet.violet4 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

// const Fieldset = styled('fieldset', {
//   all: 'unset',
//   display: 'flex',
//   gap: 20,
//   alignItems: 'center',
//   marginBottom: 15,
// });

// const Label = styled('label', {
//   fontSize: 15,
//   color: violet.violet11,
//   width: 90,
//   textAlign: 'right',
// });

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,

  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const Modal = ({
  title,
  description,
  danger,
}: {
  title: string;
  description: string;
  danger: boolean;
}) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="primary"> Button</Button>
    </DialogTrigger>
    <DialogContent asChild>
      <Flex direction="column" css={{ gap: '20px' }}>
        <DialogTitle asChild>
          <Text variant="moose">{title}</Text>
        </DialogTitle>
        <DialogDescription asChild>
          <Text variant="wolf" color="$textGray">
            {description}
          </Text>
        </DialogDescription>
        <Flex css={{ justifyContent: 'flex-end', gap: '8px' }}>
          <DialogClose asChild>
            <Button variant="minimal">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant={danger ? 'danger' : 'primary'}>Confirm</Button>
          </DialogClose>
        </Flex>
      </Flex>
      {/* <Fieldset>
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@peduarte" />
      </Fieldset>
      <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
        <DialogClose asChild>
          <Button variant="green">Save changes</Button>
        </DialogClose>
      </Flex> */}
      {/* <DialogClose asChild>
        <IconButton aria-label="Close">
          <Cross2Icon />
        </IconButton>
      </DialogClose> */}
    </DialogContent>
  </Dialog>
);

export default Modal;
