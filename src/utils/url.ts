/* eslint-disable */ /** * Parses a URL and returns an object created from the query string.
 *var url = "https://www.xyz.com?name=Neo&age=23";
 * parseQueryString(url); // Object {name: "Neo", age: "23"}*
 * @param url URL to be parsed.
 *
 * @returns Object created from the query string. */

const encode = function encode(value: string): string {
  return encodeURIComponent(value);
};
/** * Decodes a URI. * * @param value URI to be decoded. Replaces +, @, : and $. * * @returns URI. */
const decode = function decode(value: string): string {
  return decodeURIComponent(
    value
      .replace(/\+/g, '%20')
      .replace(/@/g, '%40')
      .replace(/:/g, '%3A')
      .replace(/\$/g, '%24')
  );
};
const getBaseUrl = (url: string): string => {
  return url;
};
const transformUrl = (url: string) => {
  return url;
};
export default { encode, decode, transformUrl };
