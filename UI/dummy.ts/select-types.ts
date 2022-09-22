import type { HTMLAttributes } from 'react';
import type { FocusRingAria } from '@react-aria/focus';
import { useOption } from '@react-aria/listbox';

export type OptionAria = ReturnType<typeof useOption>;

export interface IFocusRingAria extends FocusRingAria {
  focusProps: Omit<HTMLAttributes<HTMLElement>, 'css'>;
}

export interface IOptionAria extends OptionAria {
  /** Props for the main text element inside the menu item. */
  labelProps: Omit<HTMLAttributes<HTMLElement>, 'css'>;
}
