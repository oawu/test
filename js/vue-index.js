"use strict";/**
 * @author      OA Wu <oawu.tw@gmail.com>
 * @copyright   Copyright (c) 2015 - 2024, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */Load.Vue({data:{style:{color:"rgba(120, 120, 120, 1.00);"},version:"2.0.0"},mounted:function mounted(){},computed:{},methods:{date:function(a){var b=function(a){return(10>a?"0":"")+a},c=new Date;return a.replace("Y",c.getFullYear()).replace("m",b(c.getMonth()+1)).replace("d",b(c.getDate())).replace("H",b(c.getHours())).replace("i",b(c.getMinutes())).replace("s",b(c.getSeconds()))}},template:"\n  main#app.a\n    h1 => *text='\u4F60\u597D\uFF0C\u4E16\u754C\uFF01'\n    div => :style=style\n      span => *text='\u9019\u662F '\n      b    => *text='Lalilo'\n      span => *text='\uFF0C\u4F60\u76EE\u524D\u7248\u672C\u662F '\n      b    => *text=version\n    br\n    span => *text=date('Y-m-d H:i:s')"});