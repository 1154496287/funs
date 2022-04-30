

/**
 * @description: 匹配正整数
 * @param {number} val 传入一个数字
 * @return {boolean} true 为正整数
 * @example isNegativeNum(9) => true
 */
export const isPositiveNum = (val: number): boolean => {
	return /^[1-9]d*$/.test(val.toString());
};

/**
 * @description: 匹配负整数
 * @param {number} val 传入一个数字
 * @return {boolean} true 为负整数
 * @example isNegativeNum(-9) => true
 */
export const isNegativeNum = (val: number): boolean => {
	return /^-[1-9]d*$/.test(val.toString());
};

/**
 * @description: 匹配整数
 * @param {number} val 传入一个数字
 * @return {boolean} true 整数
 * @example isInteger(2.2) => false
 */
export const isInteger = (val: number): boolean => {
	return /^(-|\+)?\d+$/.test(val.toString());
};

/**
 * @description: 匹配非负浮点数
 * @param {number} val 传入一个数字
 * @return {boolean}
 * @example isNotNegativeFloatNum(2.2) => true
 */
export const isNotNegativeFloatNum = (val: number): boolean => {
	return /^\d+(\.\d+)?$/.test(val.toString());
};

/**
 * @description: 金钱格式化，三位加逗号
 * @param {number} val 传入一个数字
 * @return {boolean}
 * @example isNotNegativeFloatNum(2.2) => true
 */
export const formatMoney = (num: number) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * @description:验证小数
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isDecimal = (value: string): boolean => /^\d+\.\d+$/g.test(value);
