import { createContext } from '../utils/context';
import { UseSelectReturn } from './use-select';

export const [SelectProvider, useSelectContext] =
  createContext<UseSelectReturn>({
    name: 'SelectContext',
    errorMessage:
      'useSelectContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Select />`',
  });
