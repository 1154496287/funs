/*
 * @Description: 字符串匹配
 * @Author: Gleason
 * @Date: 2022-02-23 18:10:08
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-08 17:31:50
 */

/**
 * @description: 匹配由 26 个英文字母组成的字符串
 * @param {number} val
 * @return {boolean} 是否通过验证
 * @example isAZaz('abc') => true
 */
export const isAZaz = (val: string): boolean => {
	return /^\d+(\.\d+)?$/.test(val.toString());
};

/**
 * @description: 匹配由 26 个英文字母的大写组成的字符串
 * @param {number} val
 * @return {boolean} 是否通过验证
 * @example isAZ('ABC') => true
 */
export const isAZ = (val: string): boolean => {
	return /^[A-Z]+$/.test(val);
};

/**
 * @description: 匹配由 26 个英文字母的小写组成的字符串
 * @param {number} val
 * @return {boolean} 是否通过验证
 * @example isaz('abc') => true
 */
export const isaz = (val: string): boolean => {
	return /^[a-z]+$/.test(val);
};

/**
 * @description: 匹配电子邮件地址
 * @param {string} val
 * @return {boolean} 是否通过验证
 * @example isEmailAddress('133@qq.com') => true
 */
export const isEmailAddress = (val: string): boolean => {
	return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
};

/**
 * @description: 验证email(邮箱)
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isEmail('133@qq.com') => true
 */
export const isEmail = (value: string): boolean => {
	return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);
};

/**
 * @description: 验证不能包含字母
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isNoWord('133@qq.com') => true
 */
export const isNoWord = (value: string): boolean => /^[^A-Za-z]*$/g.test(value);

/**
 * @description: 验证中文和数字
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isCHNAndEN('133@qq.com') => true
 */
export const isCHNAndEN = (value: string): boolean => /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(value);

/**
 * @description: 验证中文/汉字
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isCHNAndEN('133@qq.com') => true
 */
export const isChineseCharacter = (value: string): boolean => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);

/**
 * @description: 验证邮政编码(中国)
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isPostcode('133@qq.com') => true
 */
export const isPostcode = (value: string): boolean => /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value);

/**
 * @description: 验证微信号，6至20位，以字母开头，字母，数字，减号，下划线
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isWeChatNum ('133@qq.com') => true
 */
export const isWeChatNum = (value: string): boolean => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);


/**
 * @description: 验证16进制颜色
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isWeChatNum ('133@qq.com') => true
 */
export const isColor16 = (value: string): boolean => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);


/**
 * @description: 验证火车车次
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isWeChatNum ('133@qq.com') => true
 */
export const isTrainNum = (value: string): boolean => /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value);

/**
 * @description: 验证手机机身码(IMEI)
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isWeChatNum ('133@qq.com') => true
 */
export const isIMEI = (value: string): boolean => /^\d{15,17}$/g.test(value);


/**
 * @description: 验证必须带端口号的网址(或ip)
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isWeChatNum ('133@qq.com') => true
 */
export const isHttpAndPort = (value: string): boolean => /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value);

/**
 * @description: 验证网址(支持端口和"?+参数"和"#+参数)
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isWeChatNum ('133@qq.com') => true
 */
export const isRightWebsite = (value: string): boolean => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(value);

/**
 * @description: 验证统一社会信用代码
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isWeChatNum ('133@qq.com') => true
 */
export const isCreditCode = (value: string): boolean => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);


/**
 * @description: 验证迅雷链接
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isWeChatNum ('133@qq.com') => true
 */
export const isThunderLink = (value: string): boolean => /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(value);

/**
 * @description: 验证ed2k链接(宽松匹配)
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isWeChatNum ('133@qq.com') => true
 */
export const ised2k = (value: string): boolean => /^ed2k:\/\/\|file\|.+\|\/$/g.test(value);

/**
 * @description: 验证磁力链接(宽松匹配)
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isMagnet ('133@qq.com') => true
 */
export const isMagnet = (value: string): boolean => /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value);

/**
 * @description: 验证子网掩码
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isSubnetMask = (value: string): boolean => /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(value);

/**
 * @description: 验证linux"文件夹"路径
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isLinuxFolderPath = (value: string): boolean => /^(\/[^/]+)+\/?$/g.test(value);


/**
 * @description: 验证window"文件夹"路径
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isWindowsFolderPath = (value: string): boolean => /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(value);

/**
 * @description: 验证版本号格式必须为X.Y.Z
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isVersion = (value: string): boolean => /^\d+(?:\.\d+){2}$/g.test(value);

/**
 * @description: 验证视频链接地址（视频格式可按需增删）
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isVideoUrl = (value: string): boolean => /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(value);

/**
 * @description: 验证图片链接地址（图片格式可按需增删）
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isImageUrl = (value: string): boolean => /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value);


/**
 * @description: 验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isAccountNumber = (value: string): boolean => /^[1-9]\d{9,29}$/g.test(value);

/**
 * @description: 验证中文姓名
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isChineseName = (value: string): boolean => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);

/**
 * @description: 验证英文姓名
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isEnglishName = (value: string): boolean => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);


/**
 * @description: 验证车牌号(新能源)
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isLicensePlateNumberNER = (value: string): boolean => /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(value);

/**
 * @description: 验证车牌号(非新能源)
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isLicensePlateNumberNNER = (value: string): boolean => /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(value);

/**
 * @description: 验证车牌号(新能源+非新能源)
 * @param {string} value
 * @return {boolean} 是否通过验证
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isLicensePlateNumber = (value: string): boolean => /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(value);

/**
 * @description: 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isMPStrict = (value: string): boolean => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value);

/**
 * @description: 验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isMPRelaxed = (value: string): boolean => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);

/**
 * @description: 验证座机电话(国内),如: 0341-86091234
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isLandlineTelephone = (value: string): boolean => /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);

/**
 * @description: 验证身份证号(1代,15位数字)
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isIDCardOld = (value: string): boolean => /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g.test(value);

/**
 * @description: 验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isIDCardNew = (value: string): boolean => /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);

/**
 * @description: 验证身份证号, 支持1/2代(15位/18位数字)
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isIDCard = (value: string): boolean => /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);

/**
 * @description: 验证护照（包含香港、澳门）
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isPassport = (value: string): boolean => /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(value);

/**
 * @description:验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isWebAccount = (value: string): boolean => /^[a-zA-Z]\w{4,15}$/g.test(value);

/**
 * @description:验证数字
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isNumber = (value: string): boolean => /^\d{1,}$/g.test(value);

/**
 * @description:验证qq号格式
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isQQNum = (value: string): boolean => /^[1-9][0-9]{4,10}$/g.test(value);

/**
 * @description:验证数字和字母组成
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isNumAndStr = (value: string): boolean => /^[A-Za-z0-9]+$/g.test(value);

/**
 * @description:验证英文字母
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isEnglish = (value: string): boolean => /^[a-zA-Z]+$/g.test(value);

/**
 * @description:验证大写英文字母
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isCapital = (value: string): boolean => /^[A-Z]+$/g.test(value);

/**
 * @description:验证小写英文字母
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
export const isLowercase = (value: string): boolean => /^[a-z]+$/g.test(value);


/**
 * @description: 截取字符串并加略号
 * @param {string}  字符串
 * @return {string} 增加省略号的字符串
 * @example isNotNegativeFloatNum(2.2) => true
 */
export const subText = (str: string, leg: number) => {
	if (str.length === 0) {
		return '';
	}
	if (str.length > leg) {
		return str.substr(0, leg) + "...";
	} else {
		return str;
	}
};

/**
 * @description: 生成随机颜色
 * @param {*} -
 * @return {string} 十六进制随机色
 * @example isNotNegativeFloatNum(2.2) => true
 */
export const generateRandomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
