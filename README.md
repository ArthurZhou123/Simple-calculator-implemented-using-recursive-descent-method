# Simple-calculator-implemented-using-recursive-descent-method
一个网页版的使用递归下降法实现的简单计算器

需求：实现简单的四则运算功能，有简单界面
实现：制作一个网页版的简单计算器用于输入输出

递归下降法是一种简单的将自顶向下分析算法，他的概念非常简单：
讲一个非终结符A的文法规则看作将识别A的一个过程定义，A的文法规则的右边指出这个过程的代码结构：
一个选择中的终结符与非终结符序列与相匹配的输入以及其他过程的调用相对应，而选择与在代码中的替代情况（case语句和if语句）相对应。

首先写出他的左结合文法规则：
![左结合文法的图片](https://github.com/ArthurZhou123/Simple-calculator-implemented-using-recursive-descent-method/blob/master/imgs/%E5%B7%A6%E7%BB%93%E5%90%88%E6%96%87%E6%B3%95.png);
然后是右结合文法规则：与左结合类似并且比左结合简单，因为不需要消除左递归，
![右结合文法的图片](https://github.com/ArthurZhou123/Simple-calculator-implemented-using-recursive-descent-method/blob/master/imgs/%E5%8F%B3%E7%BB%93%E5%90%88%E6%96%87%E6%B3%95.png);
根据文法规则和简单的DFA识别token，就可完成这个简单的计算器了，最后做出来的结果如下图：
![结果的图片](https://github.com/ArthurZhou123/Simple-calculator-implemented-using-recursive-descent-method/blob/master/imgs/result.png);