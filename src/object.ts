

/**
 * @description: 从对象中选取对应于给定键的键值对
 * 使用Array.reduce()将筛选/选取的密钥转换回具有相应键值对的对象 (如果在 obj 中存在该键)。
 * @param {Array<T>} arr
 * @return {Array<T>} 定键的键值对
 */
export function pick(obj = {}, arr = []) {
	// eslint-disable-next-line no-sequences
	return arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
};
