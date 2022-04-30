
export {
	arrayMax,
	arrayMin,
	compact,
	countOccurrences,
	deepFlatten,
	difference,
	distinctValuesOfArray,
	everyNth,
	filterNonUnique,
	flatten,
	initial,
	initializeArrayWithRange,
	intersection,
	nthElement,
	specifyValue,
	sample,
	shuffle,
	removeArrayItem,
	contains,
	shuffleArray
} from "./array"

export {
	currentURL,
	getUrlParam,
	replaceParamVal,
	deleteUrlParam,
	getClientHeight,
	getClientWidth,
	getPageWidth,
	getViewportOffset,
	getPageScrollTop,
	getPageScrollLeft,
	launchFullscreen,
	exitFullscreen,
	getScrollPosition,
	smoothScroll,
	scrollToTop,
	scrollToBottom,
	httpsRedirect,
	bottomVisible,
	openWindow,
	AutoResponse,
	cookieSet,
	cookieGet,
	fileToBase64String,
	cookieRemove,
	formatFileSize,
	base64ToFile,
	base64ToBlob,
	copyToClipboard,
	isDarkMode,
} from './browser'

export {
	isPositiveNum,
	isNegativeNum,
	isInteger,
	isNotNegativeFloatNum,
	formatMoney,
	isDecimal,
} from './number'

export { pick } from './object'

export {
	isAZaz,
	isAZ,
	isaz,
	isEmailAddress,
	isEmail,
	isNoWord,
	isCHNAndEN,
	isChineseCharacter,
	isPostcode,
	isWeChatNum,
	isColor16,
	isTrainNum,
	isIMEI,
	isHttpAndPort,
	isRightWebsite,
	isCreditCode,
	isThunderLink,
	ised2k,
	isMagnet,
	isSubnetMask,
	isLinuxFolderPath,
	isWindowsFolderPath,
	isVersion,
	isVideoUrl,
	isImageUrl,
	isAccountNumber,
	isChineseName,
	isEnglishName,
	isLicensePlateNumberNER,
	isLicensePlateNumberNNER,
	isLicensePlateNumber,
	isMPStrict,
	isMPRelaxed,
	isLandlineTelephone,
	isIDCardOld,
	isIDCardNew,
	isIDCard,
	isPassport,
	isWebAccount,
	isNumber,
	isQQNum,
	isNumAndStr,
	isEnglish,
	isCapital,
	isLowercase,
	subText,
	generateRandomHexColor
} from './string'