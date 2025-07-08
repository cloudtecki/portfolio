import {
  ESCAPE_SPECIAL_CHAR_PATTERN_REGEX,
  UNALLOWED_SPL_CHARS_LANG_FIELDS_REGEX,
} from 'core/base/const/regex';

import {
  MAX_LENGTH_FOR_SEARCH,
  MIN_LENGTH_FOR_SEARCH,
  NOTIFICATION_DESCRIPTION_ELLIPSIS_COUNT,
  NOTIFICATION_DESCRIPTION_MAX_CHAR_COUNT,
} from 'core/base/const';

/**
 * Checks whether an arguments is null.
 *
 * @param The values to be checked.
 *
 * @returns true if any argument is null.
 */
export const isNull = function isNull(...args: any[]): boolean {
  if (args.length === 0) {
    return true;
  }
  const len: number = args.length;
  for (let i = 0; i < len; i++) {
    const obj: any = args[i];
    if (obj === undefined || obj === null) {
      return true;
    }
  }
  return false;
};

/**
 * Checks whether all of the provided arguments are NOT null.
 *
 * @param values to be checked.
 *
 * @returns true if all arguments are NOT null.
 */
export const isNotNull = function isNotNull(...args: any[]): boolean {
  return !isNull(...args); // forward args
};

/**
 * Checks whether any of the provided arguments are empty.
 *
 * @param Values to be checked.
 *
 * @returns true if any argument is empty.
 */
export const isEmpty = function isEmpty(...args: any[]): boolean {
  if (isNull(...args)) {
    // forward args
    return true;
  }
  const len: number = args.length;
  for (let i = 0; i < len; i++) {
    if (emptyInternal(args[i])) {
      return true;
    }
  }
  return false;
};

/**
 * Checks whether given arguments are not empty.
 *
 * @param Values to be checked.
 *
 * @returns true if arguments are not empty.
 */
export const isNotEmpty = function isNotEmpty(...args: any[]): boolean {
  return !isEmpty(...args); // forward args
};

/**
 * @private
 */
const emptyInternal = function emptyInternal(obj: any): boolean {
  if (typeof obj === 'object') {
    /* Objects like Number, Date, Boolean
     * are never null.
     * Since they contain only non enumerable
     * properties, they can never be caught in
     * the property for..in loop in _isEmptyObj
     */
    if (hasEnumerablePropertiesInternal(obj)) {
      return isEmptyObjInternal(obj);
    }
    return false;
  } else {
    return obj.length === 0;
  }
};

const isEmptyObjInternal = function isEmptyObjInternal(obj: any): boolean {
  for (const name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false;
    }
  }
  return true;
};

const hasEnumerablePropertiesInternal =
  function hasEnumerablePropertiesInternal(obj: any): boolean {
    return !(
      obj instanceof Date ||
      typeof obj === 'boolean' ||
      typeof obj === 'number'
    );
  };
/**
 * Gives the first non-null value in the arguments list.
 *
 * @param Values to be checked.
 *
 * @returns Returns the first non-null value in the arguments list.
 */
export const coalesce = function coalesce(...args: any[]): any {
  if (args.length === 0) {
    return null;
  }
  const len: number = args.length;
  let arg: any = null;
  for (let i = 0; i < len; i++) {
    arg = args[i];
    if (isNotNull(arg)) {
      break;
    }
  }
  return arg;
};

export const downloadFile = (blobData: any, filename = 'document') => {
  const url = window.URL.createObjectURL(new Blob(blobData));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export const escapeSpecialChar = (value: string): string => {
  return value.replace(ESCAPE_SPECIAL_CHAR_PATTERN_REGEX, '\\$&');
};

// export const validateSearchTerm = (searchValue: string, t: TFunction) => {
//   let isValid = true;
//   let errorMessage = '';
//   const regExp = new RegExp(UNALLOWED_SPL_CHARS_LANG_FIELDS_REGEX, 's');
//   if (searchValue.trim().length < MIN_LENGTH_FOR_SEARCH) {
//     isValid = false;
//     errorMessage = t('errorMsg.minSearchLength', { ns: 'common' });
//   } else if (!regExp.test(searchValue)) {
//     isValid = false;
//     errorMessage = t('errorMsg.specialCharacters', { ns: 'common' });
//   } else if (
//     MAX_LENGTH_FOR_SEARCH &&
//     searchValue.trim().length > MAX_LENGTH_FOR_SEARCH
//   ) {
//     isValid = false;
//     errorMessage = t('errorMsg.maxSearchLength', { ns: 'common' });
//   }
//   return { isValid, errorMessage };
// };

// export const getNotificationDescription = (
//   t: TFunction,
//   isListView: boolean,
//   translationText: string,
//   descriptionText: string
// ): string => {
//   const getDescription = (desc: string) =>
//     t(translationText, { description: desc });

//   if (isListView) {
//     return getDescription(descriptionText);
//   }

//   const staticCharCount = t(translationText).length;
//   const allowedDynamicCharCount =
//     NOTIFICATION_DESCRIPTION_MAX_CHAR_COUNT - staticCharCount;

//   if (descriptionText.length <= allowedDynamicCharCount) {
//     return getDescription(descriptionText);
//   }

//   const truncatedDescription =
//     descriptionText.substring(
//       0,
//       allowedDynamicCharCount - NOTIFICATION_DESCRIPTION_ELLIPSIS_COUNT
//     ) + '...';
//   return getDescription(truncatedDescription);
// };
