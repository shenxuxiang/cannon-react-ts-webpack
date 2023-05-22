/* eslint-disable */

/**
 * @param t { number } 动画已执行次数
 * @param b { number } 当前位置
 * @param c { number } 变化量(目标位置 - 当前位置)
 * @param d { number } 动画共需要执行多少次
 * @returns
 */
export const linear = (t: number, b: number, c: number, d: number) => (c * t) / d + b;

/**
 * @param t { number } 动画已执行次数
 * @param b { number } 当前位置
 * @param c { number } 变化量(目标位置 - 当前位置)
 * @param d { number } 动画共需要执行多少次
 * @returns
 */
export const easeIn = (t: number, b: number, c: number, d: number) => (t === 0 ? b : c * 2 ** (10 * (t / d - 1)) + b);

/**
 * @param t { number } 动画已执行次数
 * @param b { number } 当前位置
 * @param c { number } 变化量(目标位置 - 当前位置)
 * @param d { number } 动画共需要执行多少次
 * @returns
 */
export const easeOut = (t: number, b: number, c: number, d: number) =>
  t === d ? b + c : c * (-(2 ** ((-10 * t) / d)) + 1) + b;

/**
 * @param t { number } 动画已执行次数
 * @param b { number } 当前位置
 * @param c { number } 变化量(目标位置 - 当前位置)
 * @param d { number } 动画共需要执行多少次
 * @returns
 */
export const easeInOut = (t: number, b: number, c: number, d: number) => {
  if (t === 0) return b;
  if (t === d) return b + c;
  const tm = t / (d / 2);
  if (tm < 1) return (c / 2) * 2 ** (10 * (tm - 1)) + b;
  return (c / 2) * (-(2 ** (-10 * (t - 1))) + 2) + b;
};

/**
 * @param t { number } 动画已执行次数
 * @param b { number } 当前位置
 * @param c { number } 变化量(目标位置 - 当前位置)
 * @param d { number } 动画共需要执行多少次
 * @returns
 */
export function QuadEaseIn(t: number, b: number, c: number, d: number) {
  return c * (t /= d) * t + b;
}

/**
 * @param t { number } 动画已执行次数
 * @param b { number } 当前位置
 * @param c { number } 变化量(目标位置 - 当前位置)
 * @param d { number } 动画共需要执行多少次
 * @returns
 */
export function QuadEaseOut(t: number, b: number, c: number, d: number) {
  return -c * (t /= d) * (t - 2) + b;
}

/**
 * @param t { number } 动画已执行次数
 * @param b { number } 当前位置
 * @param c { number } 变化量(目标位置 - 当前位置)
 * @param d { number } 动画共需要执行多少次
 * @returns
 */
export function QuadEaseInOut(t: number, b: number, c: number, d: number) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
  return (-c / 2) * (--t * (t - 2) - 1) + b;
}

export type TweenAttrNames =
  | 'linear'
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut'
  | 'QuadEaseIn'
  | 'QuadEaseOut'
  | 'QuadEaseInOut';

export default {
  linear,
  easeIn,
  easeOut,
  easeInOut,
  QuadEaseIn,
  QuadEaseOut,
  QuadEaseInOut,
};
