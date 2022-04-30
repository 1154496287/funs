
/**
 * @description: 返回数组中的最大值
 * @param {number[]} val
 * @return {number}
 * @example arrayMax([1,2,6]) => 6
 */
export const arrayMax = (val: number[]): number => {
	return Math.max(...val)
};

/**
 * @description: 返回数组中的最小值
 * @param {number[]} val
 * @return {number}
 * @example arrayMin([1,2,6]) => 1
 */
export const arrayMin = (val: number[]): number => {
	return Math.min(...val)
};

/**
 * @description: 从数组中移除 falsey 值(false、null、0、""、undefined、NaN)
 * @param {never[]} val 仅限单位数组
 * @return {never[]}
 * @example compact([false,null,0,"",undefined,NaN,1]) => [ 1 ]
 */
export const compact = (val: never[]): never[] => {
	return val.filter(Boolean);
};

/**
 * @description: 计算数组中值的出现次数
 * @param {never[]} arr 仅限单位数组
 * @return {number}
 * @example countOccurrences([1,2,1,2,3,3,3,3],3) => 4
 */
type countOccurrencesparam = number | string | null | undefined
export const countOccurrences = (arr: never[], val: countOccurrencesparam): number => {
	return arr.reduce((a, v) => v === val ? a + 1 : a + 0, 0);
};

/**
 * @description: 数组平铺
 * @param {Array} arr 任意深度数组
 * @return {Array} 平铺之后数组
 * @example deepFlatten([1, 2, [1, 2, [1, 2, [2, 3]]]]) => [ 1, 2, 1, 2, 1, 2, 2, 3 ]
 */
export const deepFlatten = (arr: any) => [].concat(...arr.map((v: any) => Array.isArray(v) ? deepFlatten(v) : v))

/**
 * @description: 返回两个数组之间的差异
 * @param {Array<T>} a
 * @param {Array<T>} b
 * @return {Array<T>} 差异数组
 * @example difference([1,2,3],[2,3,4]) => [1]
 */
export function difference<T>(a: Array<T>, b: Array<T>): Array<T> {
	const s = new Set(b);
	return a.filter(x => !s.has(x));
};

/**
 * @description: 数组去重
 * @param {Array<T>} arr
 * @return {Array<T>} 不重复值组成的数组
 * @example distinctValuesOfArray([1, 2, 3, 1, 2]) => [ 1, 2, 3 ]
 */
export function distinctValuesOfArray<T>(arr: Array<T>): Array<T> {
	return [...new Set(arr)];
};

/**
 * @description: 返回数组中的每个第 n 个元素
 * @param {Array<T>} arr
 * @return {Array<T>} 指定的元素
 * @example everyNth([2,4,5],2) => [2, 5]
 */
export function everyNth<T>(arr: Array<T>, nth: number): Array<T> {
	return arr.filter((e, i) => i % nth === 0);
};

/**
 * @description: 筛选出数组中的非唯一值, 对于只包含唯一值的数组, 请使用Array.filter()。
 * @param {Array<T>} arr
 * @return {Array<T>} 去重后的数组
 * @example filterNonUnique([1,4,'33',2334,6,6,4]) => [1, '33', 2334]
 */
export function filterNonUnique<T>(arr: Array<T>): Array<T> {
	return arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
};

/**
 * @description: 拼合数组
 * 使用Array.reduce()获取数组中的所有元素和concat()以拼合它们
 * @param {Array<T>} arr
 * @return {Array<T>} 拼接后的数组
 * @example flatten([1,4,'33',2334,6,6,4]) => [1, 4, '33', 2334, 6, 6, 4]
 */
export function flatten(arr: []) {
	return arr.reduce((a, v) => a.concat(v), []);
};

/**
 * @description: 返回除最后一个数组之外的所有元素
 * initial: 返回除最后一个数组之外的所有元素
 * 使用 "arr.slice(0,-1)" 返回数组的最后一个元素。
 * @param {Array<T>} arr
 * @return {Array<T>} 最后一个元素数组
 */
export function initial<T>(arr: Array<T>): Array<T> {
	return arr.slice(0, -1);
};

/**
 * @description: 初始化并填充具有指定值的数组
 * 使用Array(n)创建所需长度的数组,fill(v)以填充所需的值。可以省略value以使用默认值0.
 * @param {Array<T>} arr
 * @return {Array<T>} 填充后的数组
 */
export function initializeArrayWithRange(end: any, start = 0) {
	return Array.from({
		length: end - start
	}).map((v, i) => i + start);
};

/**
 * @description: 返回两个数组中存在的元素的列表
 * 使用Array(n)创建所需长度的数组,fill(v)以填充所需的值。可以省略value以使用默认值0.
 * @param {Array<T>} arr
 * @return {Array<T>} 填充后的数组
 */
export function intersection(end: any, start = 0) {
	return Array.from({
		length: end - start
	}).map((v, i) => i + start);
};

/**
 * @description: 返回数组的第 n 个元素
 * 使用Array.slice()可获取包含第 n 个元素的数组。如果索引超出界限, 则返回[]。省略第二个参数n, 以获取数组的第一个元素
 * @param {Array<T>} arr
 * @return {Array<T>} 第 n 个元素
 */
export function nthElement<T>(arr: Array<T>, n = 0) {
	return (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
};

/**
 * @description: 筛选指定的值
 * 使用Array.filter()和Array.includes()来拉出不需要的值。使用Array.length = 0可将传入的数组中的长度重置为零, 并将其设置为Array.push(), 以便仅使用所提取的值填充它。
 * @param {Array<T>} arr
 * @return {Array<T>} 指定值
 */
export const specifyValue = (arr: [], ...args: any) => {
	const pulled = arr.filter((v, i) => !args.includes(v));
	arr.length = 0;
	pulled.forEach(v => arr.push(v));
};

/**
 * @description: 返回数组中的随机元素
 * 使用Math.random()生成一个随机数, 将它与length相乘, 并使用数学将其舍入到最接近的整数Math.floor()。此方法也适用于字符串
 * @param {Array<T>} arr
 * @return {Array<T>} 返回数组中的随机元素
 */
export const sample = (arr: []) => arr[Math.floor(Math.random() * arr.length)];

/**
 * @description: 随机数组值的顺序
 * 使用Array.sort()可在比较器中使用Math.random()重新排序元素。
 * @param {Array<T>} arr
 * @return {Array<T>} 随机数组值的顺序
 */
export const shuffle = (arr: []) => arr.sort(() => Math.random() - 0.5);

/**
 * @description: 从给定数组中移除一项
 * @param {Array<T>} arr
 * @return {Array<T>} 移除制定项之后的数组
 */
export function removeArrayItem<T>(arr: Array<T>, item: T) {
	let i = 0;
	while (i < arr.length) {
		if (arr[i] === item) {
			arr.splice(i, 1);
		} else {
			i++;
		}
	}
	return arr;
};

/**
 * @description: 检查给定数组中是否包含某项
 * @param {Array<T>} arr
 * @return {boolean} true 包含
 */
export function contains<T>(arr: Array<T>, item: T) {
	let i = arr.length;
	while (i--) {
		if (arr[i] === item) {
			return true;
		}
	}
	return false;
};

/**
 * @description: 数组乱序
 * @param {Array<T>} arr
 * @return {boolean} true 包含
 */
export function shuffleArray<T>(arr: Array<T>) {
	return arr.sort(() => Math.random() - 0.5)
};




