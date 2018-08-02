# wxmodule
微信小程序倒计时和数字输入框组件


![avatar](https://github.com/Takeos/wxmodule/blob/master/wxdemo2.gif)

#倒计时。
##调用组件

```
<countdown time="5000"></countdown>
```

>其他参数说明：

| 参数 | 描述 | 默认值 |
| ------ | ------ | ------ |
| time | 倒计时的时间，可传毫秒数，日期和数组 | 0 |
| index | 索引值 | 0 |
| showDay | 是否显示天 | false |
| showHour | 是否显示小时 | true |
| showMin | 是否显示分钟 | true |
| showSec | 是否显示秒数 | true |
| bindend | 结束回调 | "" |


#数字输入框。
##调用组件
```
<inputnum min="10" max="9999" value="1"></inputnum>
```
>其他参数说明：

| 参数 | 描述 | 默认值 |
| ------ | ------ | ------ |
| min | 最小值 | 1 |
| max | 最大值 | 9999 |
| value | value值 | 1 |
| step | 累加数值 | 1 |
| disabled | 禁止使用 | false |
| inpDisabled | 输入框禁止输入	 | true |
| index | 索引值 | 0 |
| bindchange | 改变回调 | "" |

>组件怎么使用？将组件文件放在项目中。然后再需要引入的页面.json文件里添加如下内容，如果需要修改样式，颜色请自己修改…..


```
{
    "usingComponents": {
        "countdown": "../countdown/index", //路径
        "inputnum": "../inputNum/index"
    }
}
```
