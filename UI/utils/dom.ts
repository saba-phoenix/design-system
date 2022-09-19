import { DOMRefValue, FocusableRef, FocusableRefValue } from '@react-types/shared';
import {
  Ref,
  RefObject,
  MutableRefObject,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

export function createDOMRef<T extends HTMLElement = HTMLElement>(ref: RefObject<T>) {
  return {
    UNSAFE_getDOMNode() {
      return ref.current;
    },
  } as DOMRefValue<T>;
}

export function useDOMRef<T extends HTMLElement = HTMLElement>(
  ref?: RefObject<T | null> | Ref<T | null>
) {
  const domRef = useRef<T>(null);

  useImperativeHandle(ref, () => domRef.current);

  return domRef;
}

export interface ContextValue<T> {
  ref?: MutableRefObject<T>;
}

// Syncs ref from context with ref passed to hook
export function useSyncRef<T>(context: ContextValue<T | null>, ref: RefObject<T>) {
  useLayoutEffect(() => {
    if (context && context.ref && ref && ref.current) {
      context.ref.current = ref.current;

      return () => {
        if (context.ref?.current) {
          context.ref.current = null;
        }
      };
    }
  }, [context, ref]);
}
