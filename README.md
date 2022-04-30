- 函数工具库,涵盖 **数组** , **对象** , **字符串** , **数字** , **浏览器** 等方面的常用业务函数
- 支持 TypeScript, 类型文件齐全,支持代码补全,文档详细
- 纯 JavaScript 原生实现, 不依赖任何外部库
## 安装

```shell
npm install funtions 
```

### 使用

```javascript
// 引入
import { arrayMax } from 'funtions'

// 使用方法
arrayMax([1,3,2]) // => [3]
```

## api 详解

**数组**

- arrayMax: 返回数组中的最大值
- arrayMin: 返回数组中的最小值
- compact: 从数组中移除 falsey 值(false、null、0、""、undefined、NaN)
- countOccurrences: 计算数组中值的出现次数
- deepFlatten: 数组平铺
- difference: 返回两个数组之间的差异
- distinctValuesOfArray: 数组去重
- everyNth: 返回数组中的每个第 n 个元素
- filterNonUnique: 筛选出数组中的非唯一值, 对于只包含唯一值的数组, 请使用Array.filter()。
- flatten: 拼合数组
- initial: 返回除最后一个数组之外的所有元素
- initializeArrayWithRange: 初始化并填充具有指定值的数组
- intersection: 返回两个数组中存在的元素的列表
- nthElement: 返回数组的第 n 个元素
- specifyValue: 筛选指定的值
- sample: 返回数组中的随机元素
- shuffle: 随机数组值的顺序
- removeArrayItem: 从给定数组中移除一项
- contains: 检查给定数组中是否包含某项
- shuffleArray:数组乱序

**浏览器**

- currentURL: 返回当前url
- getUrlParam: 获取url参数
- replaceParamVal: 修改url中的参数
- deleteUrlParam: 删除 url 中指定的参数
- getClientHeight: 获取窗口可视范围的高度
- getClientWidth: 获取窗口可视范围的宽度
- getPageWidth: 获取窗口宽度
- getViewportOffset: 获取窗口尺寸
- getPageScrollTop: 获取滚动条距离顶部高度
- getPageScrollLeft: 获取滚动条距左边的宽度
- launchFullscreen: 开启全屏
- exitFullscreen: 退出全屏
- getScrollPosition: 返回当前滚动条位置
- smoothScroll: 滚动到指定元素区域
- scrollToTop: 滚动到顶部
- scrollToBottom: 滚动到底部
- httpsRedirect: http跳转https
- bottomVisible: 检查页面底部是否可见
- openWindow: 打开一个窗口
- AutoResponse: 自适应页面（rem）
- cookieSet: cookie 存贮
- cookieGet: cookie 获取
- cookieRemove: cookie 删除
- fileToBase64String: 获取文件 base64 编码
- base64ToFile: base64 转 file
- base64ToBlob: base64 转 blob
- copyToClipboard: 复制到剪贴板
- isDarkMode: 检测黑暗模式
- 

**数字**

- isPositiveNum: 匹配正整数
- isNegativeNum: 匹配负整数
- isInteger: 匹配整数
- isNotNegativeFloatNum: 匹配非负浮点数
- formatMoney: 金钱格式化，三位加逗号

**对象**

- pick: 从对象中选取对应于给定键的键值对

**字符串**

- isEnglish: 验证英文字母

- isAZaz: 匹配由 26 个英文字母组成的字符串

- isAZ: 匹配由 26 个英文字母的**大写**组成的字符串

- isaz:  匹配由 26 个英文字母的**小写**组成的字符串

- isLowercase: 验证**小写英文字母**

- isCapital: 验证**大写英文字母**

- isEnglishName: 验证**英文姓名**

- isNoWord: 验证**不能包含字母**

- isCHNAndEN: 验证**中文和数字**

- isChineseCharacter: 验证**中文**(纯汉字)

- isChineseName: 验证**中文姓名**

- isNumAndStr: 验证数字和字母组成

- isNumber: 验证数字

- subText: 截取字符串并加略号

  **与人相关验证**

- isPostcode: 验证邮政编码(中国)

- isCreditCode:  验证统一社会信用代码

- isEmail: 验证email(邮箱)

- isQQNum: 验证qq号格式

- isWeChatNum:  验证微信号，6至20位，以字母开头，字母，数字，减号，下划线

- isIDCard: 验证身份证号, 支持1/2代(15位/18位数字)

- isMPStrict: 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段

- isLandlineTelephone: 验证座机电话(国内),如: 0341-86091234

- isAccountNumber:  验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）

- isPassport: 验证护照（包含香港、澳门）

- isTrainNum: 验证火车车次

- isWebAccount: 验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合)

- isLicensePlateNumber: 验证车牌号(新能源+非新能源)

- isIMEI:  验证手机机身码(IMEI)

- isIDCardNew:  验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X

- isIDCardOld: 验证身份证号(1代,15位数字)

- isLicensePlateNumberNNER: 验证车牌号(非新能源)

- isLicensePlateNumberNER: 验证车牌号(新能源)

- isEmailAddress: 匹配电子邮件地址

- isMPRelaxed: 验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可

  **网络**

- isImageUrl: 验证图片链接地址（图片格式可按需增删）

- isVideoUrl: 验证视频链接地址（视频格式可按需增删）

- isSubnetMask: 验证子网掩码

- isMagnet: 验证磁力链接(宽松匹配)

- isThunderLink: 验证迅雷链接

- ised2k: 验证ed2k链接(宽松匹配)

- isRightWebsite:  验证网址(支持端口和"?+参数"和"#+参数)

- isHttpAndPort:  验证必须带端口号的网址(或ip)

  **系统**

- isWindowsFolderPath: 验证window"文件夹"路径

- isLinuxFolderPath: 验证linux"文件夹"路径

  **颜色**

- isColor16: 验证16进制颜色

- generateRandomHexColor: 生成随机颜色

  **版本**

- isVersion: 验证版本号格式必须为X.Y.Z
