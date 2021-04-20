/**
 * Created by zonebond on 2017/3/29.
 */

// TODO :: pixels, assignment, classnames, HackStyleSheet

const hasOwn = {}.hasOwnProperty;

function classnames () {
  const classes = [];

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes.push(classnames.apply(null, arg));
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

/**
 * check unavailable value eg. undefined and null
 * @param value
 * @constructor
 */
const NotNull = value => value !== null && value !== undefined;

/**
 * check value is Object Map similar value eg. {key: value, ...} and {}
 * @param value
 */
const isObject = value => NotNull(value) && typeof value === 'object' && Array.isArray(value) === false;

/**
 * transform number to number + px
 * @param value <number | string>
 */
const pixels = value => NotNull(value) ? value : (isNaN(value) ? value : value + 'px');

/**
 * transform number + px Or string
 * @param value
 * @returns {*}
 */
const literal = (value, defaultValue) => {
  return NotNull(value) ? (typeof value === 'string' ? value : pixels(value)) : defaultValue;
};

/**
 * merge object with assign props which value must be available
 * @param target
 * @param props
 * @returns {*}
 */
const assignment = (target, props) => {
  let merged = NotNull(target) ? {...target} : null;
  if (!NotNull(props)) return merged;
  Object.keys(props).forEach(prop => {
    const value = props[prop];
    if (NotNull(value)) {
      !NotNull(merged) && ( merged = {});
      if (Array.isArray(value)) {
        value.forEach(val => merged = assignment(merged, val));
      } else {
        merged[prop] = value;
      }

    }
  });
  return merged;
};

/**
 * Duff's Device
 */
function DuffsDevice(list, process) {
  const iterations = list.length;

  let index = 0, n = iterations % 8;

  while (n--) {
    process(index, list[index++]);
  }

  n = (iterations * 0.125) ^ 0; //`value ^ 0` is the same as `Math.floor` for positive numbers and `Math.ceil` for negative numbers
  while (n--) {
    process(index, list[index++]);
    process(index, list[index++]);
    process(index, list[index++]);
    process(index, list[index++]);
    process(index, list[index++]);
    process(index, list[index++]);
    process(index, list[index++]);
    process(index, list[index++]);
  }
}

// hack stylesheet
const doc = window.document || null;
const HackStyleSheet = doc ? css => {
      var style = doc.createElement('style');
      style.type = 'text/css';
      style.rel = 'stylesheet';
      try {
          style.appendChild(doc.createTextNode(css));
      }
      catch (ex) {
          style.styleSheet.cssText = css;
      }
      doc.getElementsByTagName("head")[0].appendChild(style);
  }: null;

// expose
export {
  pixels, literal, assignment, classnames, isObject, DuffsDevice, HackStyleSheet
};
