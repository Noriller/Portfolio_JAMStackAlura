import { css } from 'styled-components';
import breakpoints from './breakpoints';
import { padArray } from '../../../utils';

function getMaxWidth(min, arr) {
  if (arr.length === 0) return null;

  const newLimit = arr.find((limit) => min < limit);

  return newLimit || null;
}

function mediaQueryParse(CSS, index, limit) {
  const minWidth = breakpoints[index];
  const maxWidth = getMaxWidth(minWidth, limit);
  const addLimit = (maxWidth) ? `and (max-width: ${maxWidth}px)` : '';
  return CSS === null ? '' : css`
      @media only screen and (min-width: ${minWidth}px) ${addLimit} {
        ${css`
          ${CSS}
        `}
      }
    `;
}

/**
 * How to use: create styled-components css values and add them in order
 * of the media queries breakpoints defined.
 * Null values mean the CSS won't be applied at all.
 * If you want to apply the same style as the last one, either add a empty string or leave it blank.
 *
 * @param cssValues css (from styled-components) separated by comma, null or empty string;
 */
function inserMediaQuery(...cssValues) {
  const cssArray = padArray(cssValues, breakpoints.length, '');

  const limitArray = cssArray
    .map((ea, index) => ((ea === null) ? breakpoints[index] : null))
    .filter((ea) => ea !== null);

  return css`
    ${cssArray.map((CSS, index) => mediaQueryParse(CSS, index, limitArray))}
  `;
}

export { inserMediaQuery, breakpoints };
