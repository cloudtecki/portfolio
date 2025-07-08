import DOMPurify from 'dompurify';

export const lowerCaseFirstLetter = (key: string): string =>
  key.charAt(0).toLocaleLowerCase() + key.slice(1);

/**
 * Method to get all match in a string as an array
 * @param value The value to be processed
 * @param expression Expression to match against
 */
export const getAllMatch = (value: string, expression: RegExp): string[] => {
  const regExpMatch: RegExpMatchArray = value.match(expression)!;
  return regExpMatch as string[];
};

/**
 * Method to remove specific character from lead and trail position
 * @param value The value to be processed
 */
export const removeLeadTrailChar = (value: string, target: string): string => {
  if (value[0] === target) {
    value = value.substring(1);
  }
  if (value[value.length - 1] === target) {
    value = value.substring(0, value.length - 1);
  }
  return value;
};

/**
 * Method to append escape character based on the regex matching.
 * @param value The value to be processed
 */
export const regexEscape = (value: string): string => {
  const regExp = /[-[\]{}()*+?.,\\^$|#\s]/g;
  return value.replace(regExp, '\\$&');
};

/**
 * Method to replace non-word chars from the text (ex: Lorem &*%- dolor, result would be 'Lorem dolor')
 * @param value The value to be processed
 */
export const sanitizeText = (value: string): string => {
  //  Check if the given text is composed entirely of non-word characters, including underscore( _ ).
  const nonWordCharRegExp = /^[\W_]*$/g;
  const replacedText = value.replace(nonWordCharRegExp, '');

  if (replacedText) {
    // Replace the whitespace bounded non-word chars from the text
    const whitespaceBoundedNonWordCharsRegExp = /(?:^|\s+)[\W_]+(?:\s+|$)/g;
    return replacedText.replace(whitespaceBoundedNonWordCharsRegExp, ' ');
  }
  return value;
};

export const extractTextFromHtml = (htmlAsstring: string) => {
  const sanitizedHTML = DOMPurify.sanitize(htmlAsstring);

  const tempElement = document.createElement('div');
  tempElement.innerHTML = sanitizedHTML;

  return tempElement.textContent || tempElement.innerText || '';
};
