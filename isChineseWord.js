// 第一种代码：
function isChinese(temp) {
    var re = /[^/u4e00-/u9fa5]/;
    if (re.test(temp)) return false;
    return true;
}


// 第二种代码：
function isChn(str) {
    var reg = /^[/u4E00-/u9FA5]+$/;
    if (!reg.test(str)) {
        alert("不全是中文");
        return false;
    } else {
        alert("全是中文");
        return true;
    }
}

// 第三种代码：
function funcChina() {
    var obj = document.form1.txtName.value;
    if (/.*[/u4e00-/u9fa5]+.*$/.test(obj)) {
        alert("不能含有汉字！");
        return false;
    } else {
        return true;
    }
}


//第四种代码：
function isChina(s) {
    var patrn = /[/u4E00-/u9FA5]|[/uFE30-/uFFA0]/gi;
    if (!patrn.exec(s)) {
        return false;
    } else {
        return true;
    }
}


// 第五种代码：
var str = '玄峰软件www.exfsoft.com';
if (escape(str).indexOf("%u") < 0) {
    alert("没有包含中文");
} else {
    alert("包含中文");
}

// 原理：escape对字符串进行编码时，字符值大于255的以"%u****"格式存储，而字符值大于255的恰好是非英文字符（一般是中文字符，非中文字符也可以当作中文字符考虑）；indexOf用以判断在字符串中是否存在某子字符串，找不到返回"-1"。