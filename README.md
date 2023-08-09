# kata-valid-braces

_Valid Braces_ kata from [Codewars](https://www.codewars.com/kata/5277c8a221e209d3f6000b56/).

## Kata instructions

Write a function that takes a string of braces, parentheses or brackets, and determines if the order of the characters is valid. It should return `true` if the string is valid, and `false` if it's invalid.

All input strings will be non-empty, and will only consist of parentheses `()`, brackets `[]` and curly braces `{}`.

**What is considered valid?**

A string of braces is considered valid if all opening cahracters are matched with the correct closing ones.

Examples:

<pre><code>"(){}[]"   =>  true
"([{}])"   =>  true
"(}"       =>  false
"[(])"     =>  false
"[({})](]" =>  false</code></pre>
