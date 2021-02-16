import { padArray } from '../../../utils';
import { useBreakpoint } from './BreakPointContext';
import { breakpoints } from './CustomBreakpoints';

function getValue(arr, index) {
  const simpleValue = arr[index];
  if (simpleValue) return simpleValue;
  if (simpleValue === '') return getValue(arr, index - 1);
  return null;
}

/**
 * When using less values than breakpoints,
 * the rest will use the last value you've inputted.
 * Otherwhise, it will use the value on the same index
 * as the breakpoint or return null if null was passed.
 *
 * @param  {...any} cssValues values to use depending on breakpoints defined.
 * Use null to return nothing and empty string or leaving blank to return previous values.
 */

export default function getBreakpointValue(...cssValues) {
  const index = useBreakpoint();

  const cssArray = padArray(cssValues, breakpoints.length, '');

  return getValue(cssArray, index);
}