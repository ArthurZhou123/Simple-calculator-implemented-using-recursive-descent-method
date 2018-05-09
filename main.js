//界面部分
$(function(){
    var text = $('.text');
    $('.cal').click(function () {
        let calText = text.val();
        let calResultLeft = calText + "=" +snytaxTreeLeft(calText);    //得到左结合的答案
        $('.resultLeft span').text(calResultLeft);  //把答案赋给span
        let calResultRight = calText + "=" +snytaxTreeRight(calText);    //得到右结合的答案
        $('.resultRight span').text(calResultRight);  //把答案赋给span
        text.val("");
    });
    $('.con').click(function (e) {
        let target = e.target;
        let calText = text.val();
         calText += target.innerText;
         text.val(calText);
    });
    $('.del').click(function () {
        let calText = text.val();
        calText = calText.slice(0,calText.length-1);
        text.val(calText);
    })
});
//算法部分
var str2 = "55+1*2";
//这里的token比较简单，但是我还是写了一个简单的词法分析扫描器
const digitArray = ['0','1','2','3','4','5','6','7','8','9'];
//判断是否是数字
function isDigit(x) {
    return digitArray.indexOf(x)!==-1
}
//简单的词法分析，获得token；
function getToken(str){
    var nextIndex=0;
    var prevIndex=0;
    var len = str.length;
    var state2 = 1;
    var tokens = [];
    for (nextIndex=0;nextIndex<len;){
        while( (state2 === 1 ||state2 === 2)&&(nextIndex<=len) ){
            switch (state2){
                case 1:
                    prevIndex = nextIndex;
                    if( isDigit(str.charAt(nextIndex)) ){
                        nextIndex += 1;2
                        state2 = 2;
                    }else{
                        nextIndex += 1;
                        state2 = 4;
                    }
                    break;
                case 2:
                    if( isDigit(str.charAt(nextIndex)) ){
                        nextIndex += 1;
                        state2 = 2;
                    }else{
                        nextIndex += 1;
                        state2 = 3;
                    }
                    break;
            }
        }
        if(state2 === 3){
            nextIndex = nextIndex-1;
            let tem5=str.slice(prevIndex,nextIndex);
            tokens.push(tem5);
            state2 =1;
        }else if(state2 ===4){
            let tem5=str.slice(prevIndex,nextIndex);
            tokens.push(tem5);
            state2 =1;
        }else{
            console.log("error");
        }
    }
    return tokens;
}
//语法树函数，因为这个加法，减法对的逻辑很简单，也一并写在语法树里面了
//exp函数处理exp，term函数处理term，factor函数处理factor
function snytaxTreeLeft(str) {
    var m=0;
    var token = getToken(str);
    for (;m<token.length;){
         result = exp();
    }
    return result;
    //一些简单的处理函数
    function match(expectedToken){
        if((token[m] === expectedToken)||(parseInt(token[m]) === expectedToken)){
           m +=1;
           console.log(m);
        }else{
            console.log('error');
        }
    }
    function exp() {
        let temp = term();
        while((token[m] === '+'||token[m] === "-")){
            switch (token[m]){
                case '+':
                    match("+");
                    temp +=term();
                    break;
                case '-':
                    match('-');
                    temp -=term();
                    break;
            }
        }
        return temp;
    }
    function term() {
        let temp = factor();
        while ((token[m] === '*' || token[m] === "/")) {
            switch (token[m]) {
                case '*':
                    match("*");
                    temp *= factor();
                    break;
                case '/':
                    match('/');
                    temp = temp / factor();
                    break;
            }
        }
        return temp;
    }
    function factor() {
        let temp;
        if(token[m] ==='('){
            match('(');
            temp = exp();
            match(')');
        }else if(1){
            temp = parseInt(token[m]);
            m=m+1;
        }
        return temp;
    }
}
//右结合
function snytaxTreeRight(str) {
   var token = getToken(str);
    var m=0;
    for (;m<token.length;){
        console.log(m);
        result = expRight();
    }
    return result;
    //一些简单的处理函数
    function match(expectedToken){
        if((token[m] === expectedToken)||(parseInt(token[m]) === expectedToken)){
            m +=1;
            console.log(m);
        }else{
            console.log('error');
        }
    }
    function expRight() {
        let temp = termRight();
        if((token[m] === '+'||token[m] === "-")){
            switch (token[m]){
                case '+':
                    match("+");
                    temp +=expRight();
                    break;
                case '-':
                    match('-');
                    temp = temp - expRight();
                    break;
            }
        }
        return temp;
    }
    function termRight() {
        let temp = factorRight();
        if ((token[m] === '*' || token[m] === "/")) {
            switch (token[m]) {
                case '*':
                    match("*");
                    temp *= termRight();
                    break;
                case '/':
                    match('/');
                    temp = temp / termRight();
                    break;
            }
        }
        return temp;
    }
    function factorRight() {
        let temp;
        if(token[m] ==='('){
            match('(');
            temp = expRight();
            match(')');
        }else if(1){
            temp = parseInt(token[m]);
            m=m+1;
        }
        return temp;
    }
}