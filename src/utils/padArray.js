/**
 * Return a new array with the length specified.
 * If given array is bigger than length, it will cut it.
 * Else, it will return with filled elements.
 *
 * @param {*} arr array of elements
 * @param {*} len length of the final element
 * @param {*} fill filler of empty elements
 */
export default function padArray(arr, len, fill) {
  return arr.concat(Array(len).fill(fill)).slice(0, len);
}
