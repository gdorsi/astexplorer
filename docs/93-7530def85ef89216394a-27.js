(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{kafD:function(e,t,n){(function(e,n){var r,a,o;!function(i,s,c){"use strict";var u={function:!0,object:!0},p=u[typeof t]&&t&&!t.nodeType&&t,l=u[typeof e]&&e&&!e.nodeType&&e,f=p&&l&&"object"==typeof n&&n,d=l&&l.exports===p&&p;!f||f.global!==f&&f.window!==f&&f.self,a=[t],void 0===(o="function"==typeof(r=c)?r.apply(t,a):r)||(e.exports=o),p&&d&&c(l.exports)}(0,0,(function(e){"use strict";var t,n,r,a,o;e.version="0.2.1";var i=e.defaultOptions={wait:!1,comments:!0,scope:!1,locations:!1,ranges:!1,onCreateNode:null,onCreateScope:null,onDestroyScope:null,onLocalDeclaration:null,luaVersion:"5.1",encodingMode:"none"};function encodeUTF8(e,t){return t=t||0,e<128?String.fromCharCode(e):e<2048?String.fromCharCode(192|t|e>>6,128|t|63&e):e<65536?String.fromCharCode(224|t|e>>12,128|t|e>>6&63,128|t|63&e):e<1114112?String.fromCharCode(240|t|e>>18,128|t|e>>12&63,128|t|e>>6&63,128|t|63&e):null}function checkChars(e){return function(t){var n=e.exec(t);if(!n)return t;raise(null,c.invalidCodeUnit,function toHex(e,t){for(var n=e.toString(16);n.length<t;)n="0"+n;return n}(n[0].charCodeAt(0),4).toUpperCase())}}var s={"pseudo-latin1":{fixup:checkChars(/[^\x00-\xff]/),encodeByte:function(e){return null===e?"":String.fromCharCode(e)},encodeUTF8:function(e){return encodeUTF8(e)}},"x-user-defined":{fixup:checkChars(/[^\x00-\x7f\uf780-\uf7ff]/),encodeByte:function(e){return null===e?"":e>=128?String.fromCharCode(63232|e):String.fromCharCode(e)},encodeUTF8:function(e){return encodeUTF8(e,63232)}},none:{discardStrings:!0,fixup:function(e){return e},encodeByte:function(e){return""},encodeUTF8:function(e){return""}}};e.tokenTypes={EOF:1,StringLiteral:2,Keyword:4,Identifier:8,NumericLiteral:16,Punctuator:32,BooleanLiteral:64,NilLiteral:128,VarargLiteral:256};var c=e.errors={unexpected:"unexpected %1 '%2' near '%3'",unexpectedEOF:"unexpected symbol near '<eof>'",expected:"'%1' expected near '%2'",expectedToken:"%1 expected near '%2'",unfinishedString:"unfinished string near '%1'",malformedNumber:"malformed number near '%1'",decimalEscapeTooLarge:"decimal escape too large near '%1'",invalidEscape:"invalid escape sequence near '%1'",hexadecimalDigitExpected:"hexadecimal digit expected near '%1'",braceExpected:"missing '%1' near '%2'",tooLargeCodepoint:"UTF-8 value too large near '%1'",unfinishedLongString:"unfinished long string (starting at line %1) near '%2'",unfinishedLongComment:"unfinished long comment (starting at line %1) near '%2'",ambiguousSyntax:"ambiguous syntax (function call x new statement) near '%1'",noLoopToBreak:"no loop to break near '%1'",labelAlreadyDefined:"label '%1' already defined on line %2",labelNotVisible:"no visible label '%1' for <goto>",gotoJumpInLocalScope:"<goto %1> jumps into the scope of local '%2'",cannotUseVararg:"cannot use '...' outside a vararg function near '%1'",invalidCodeUnit:"code unit U+%1 is not allowed in the current encoding mode"},u=e.ast={labelStatement:function(e){return{type:"LabelStatement",label:e}},breakStatement:function(){return{type:"BreakStatement"}},gotoStatement:function(e){return{type:"GotoStatement",label:e}},returnStatement:function(e){return{type:"ReturnStatement",arguments:e}},ifStatement:function(e){return{type:"IfStatement",clauses:e}},ifClause:function(e,t){return{type:"IfClause",condition:e,body:t}},elseifClause:function(e,t){return{type:"ElseifClause",condition:e,body:t}},elseClause:function(e){return{type:"ElseClause",body:e}},whileStatement:function(e,t){return{type:"WhileStatement",condition:e,body:t}},doStatement:function(e){return{type:"DoStatement",body:e}},repeatStatement:function(e,t){return{type:"RepeatStatement",condition:e,body:t}},localStatement:function(e,t){return{type:"LocalStatement",variables:e,init:t}},assignmentStatement:function(e,t){return{type:"AssignmentStatement",variables:e,init:t}},callStatement:function(e){return{type:"CallStatement",expression:e}},functionStatement:function(e,t,n,r){return{type:"FunctionDeclaration",identifier:e,isLocal:n,parameters:t,body:r}},forNumericStatement:function(e,t,n,r,a){return{type:"ForNumericStatement",variable:e,start:t,end:n,step:r,body:a}},forGenericStatement:function(e,t,n){return{type:"ForGenericStatement",variables:e,iterators:t,body:n}},chunk:function(e){return{type:"Chunk",body:e}},identifier:function(e){return{type:"Identifier",name:e}},literal:function(e,t,n){return{type:e=2===e?"StringLiteral":16===e?"NumericLiteral":64===e?"BooleanLiteral":128===e?"NilLiteral":"VarargLiteral",value:t,raw:n}},tableKey:function(e,t){return{type:"TableKey",key:e,value:t}},tableKeyString:function(e,t){return{type:"TableKeyString",key:e,value:t}},tableValue:function(e){return{type:"TableValue",value:e}},tableConstructorExpression:function(e){return{type:"TableConstructorExpression",fields:e}},binaryExpression:function(e,t,n){return{type:"and"===e||"or"===e?"LogicalExpression":"BinaryExpression",operator:e,left:t,right:n}},unaryExpression:function(e,t){return{type:"UnaryExpression",operator:e,argument:t}},memberExpression:function(e,t,n){return{type:"MemberExpression",indexer:t,identifier:n,base:e}},indexExpression:function(e,t){return{type:"IndexExpression",base:e,index:t}},callExpression:function(e,t){return{type:"CallExpression",base:e,arguments:t}},tableCallExpression:function(e,t){return{type:"TableCallExpression",base:e,arguments:t}},stringCallExpression:function(e,t){return{type:"StringCallExpression",base:e,argument:t}},comment:function(e,t){return{type:"Comment",value:e,raw:t}}};function finishNode(e){if(C){var t=L.pop();t.complete(),t.bless(e)}return n.onCreateNode&&n.onCreateNode(e),e}var p=Array.prototype.slice,l=(Object.prototype.toString,function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return n;return-1});function sprintf(e){var t=p.call(arguments,1);return e=e.replace(/%(\d)/g,(function(e,n){return""+t[n-1]||""}))}Array.prototype.indexOf&&(l=function(e,t){return e.indexOf(t)});var f,d,h,x,m,g,S,y,v,b,E,assign=function(e){for(var t,n,r=p.call(arguments,1),a=0,o=r.length;a<o;++a)for(n in t=r[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};function fixupError(e){return Object.create?Object.create(e,{line:{writable:!0,value:e.line},index:{writable:!0,value:e.index},column:{writable:!0,value:e.column}}):e}function raise(e){var t,n,r=sprintf.apply(null,p.call(arguments,1));throw null===e||void 0===e.line?(n=f-y+1,(t=fixupError(new SyntaxError(sprintf("[%1:%2] %3",S,n,r)))).index=f,t.line=S,t.column=n):(n=e.range[0]-e.lineStart,(t=fixupError(new SyntaxError(sprintf("[%1:%2] %3",e.line,n,r)))).line=e.line,t.index=e.range[0],t.column=n),t}function tokenValue(e){var n=t.slice(e.range[0],e.range[1]);return n||e.value}function raiseUnexpectedToken(e,t){raise(t,c.expectedToken,e,tokenValue(t))}function unexpected(e){var t=tokenValue(x);if(void 0!==e.type){var n;switch(e.type){case 2:n="string";break;case 4:n="keyword";break;case 8:n="identifier";break;case 16:n="number";break;case 32:n="symbol";break;case 64:n="boolean";break;case 128:return raise(e,c.unexpected,"symbol","nil",t);case 1:return raise(e,c.unexpectedEOF)}return raise(e,c.unexpected,n,tokenValue(e),t)}return raise(e,c.unexpected,"symbol",e,t)}function lex(){for(skipWhiteSpace();45===t.charCodeAt(f)&&45===t.charCodeAt(f+1);)scanComment(),skipWhiteSpace();if(f>=r)return{type:1,value:"<eof>",line:S,lineStart:y,range:[f,f]};var e=t.charCodeAt(f),n=t.charCodeAt(f+1);if(g=f,function isIdentifierStart(e){return e>=65&&e<=90||e>=97&&e<=122||95===e||!!(a.extendedIdentifiers&&e>=128)}(e))return function scanIdentifierOrKeyword(){var e,n;for(;isIdentifierPart(t.charCodeAt(++f)););!function isKeyword(e){switch(e.length){case 2:return"do"===e||"if"===e||"in"===e||"or"===e;case 3:return"and"===e||"end"===e||"for"===e||"not"===e;case 4:return"else"===e||"then"===e||!(!a.labels||a.contextualGoto)&&"goto"===e;case 5:return"break"===e||"local"===e||"until"===e||"while"===e;case 6:return"elseif"===e||"repeat"===e||"return"===e;case 8:return"function"===e}return!1}(e=o.fixup(t.slice(g,f)))?"true"===e||"false"===e?(n=64,e="true"===e):"nil"===e?(n=128,e=null):n=8:n=4;return{type:n,value:e,line:S,lineStart:y,range:[g,f]}}();switch(e){case 39:case 34:return function scanStringLiteral(){for(var e,n=t.charCodeAt(f++),a=S,i=y,s=f,u=o.discardStrings?null:"";e=t.charCodeAt(f++),n!==e;)if((f>r||isLineTerminator(e))&&(u+=t.slice(s,f-1),raise(null,c.unfinishedString,t.slice(g,f-1))),92===e){if(!o.discardStrings){var p=t.slice(s,f-1);u+=o.fixup(p)}var l=readEscapeSequence();o.discardStrings||(u+=l),s=f}o.discardStrings||(u+=o.encodeByte(null),u+=o.fixup(t.slice(s,f-1)));return{type:2,value:u,line:a,lineStart:i,lastLine:S,lastLineStart:y,range:[g,f]}}();case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return scanNumericLiteral();case 46:return isDecDigit(n)?scanNumericLiteral():46===n?46===t.charCodeAt(f+2)?function scanVarargLiteral(){return{type:256,value:"...",line:S,lineStart:y,range:[g,f+=3]}}():scanPunctuator(".."):scanPunctuator(".");case 61:return scanPunctuator(61===n?"==":"=");case 62:return a.bitwiseOperators&&62===n?scanPunctuator(">>"):scanPunctuator(61===n?">=":">");case 60:return a.bitwiseOperators&&60===n?scanPunctuator("<<"):scanPunctuator(61===n?"<=":"<");case 126:if(61===n)return scanPunctuator("~=");if(!a.bitwiseOperators)break;return scanPunctuator("~");case 58:return a.labels&&58===n?scanPunctuator("::"):scanPunctuator(":");case 91:return 91===n||61===n?function scanLongStringLiteral(){var e=S,t=y,n=readLongString(!1);!1===n&&raise(d,c.expected,"[",tokenValue(d));return{type:2,value:o.discardStrings?null:o.fixup(n),line:e,lineStart:t,lastLine:S,lastLineStart:y,range:[g,f]}}():scanPunctuator("[");case 47:return a.integerDivision&&47===n?scanPunctuator("//"):scanPunctuator("/");case 38:case 124:if(!a.bitwiseOperators)break;case 42:case 94:case 37:case 44:case 123:case 125:case 93:case 40:case 41:case 59:case 35:case 45:case 43:return scanPunctuator(t.charAt(f))}return unexpected(t.charAt(f))}function consumeEOL(){var e=t.charCodeAt(f),n=t.charCodeAt(f+1);return!!isLineTerminator(e)&&(10===e&&13===n&&++f,13===e&&10===n&&++f,++S,y=++f,!0)}function skipWhiteSpace(){for(;f<r;){if(isWhiteSpace(t.charCodeAt(f)))++f;else if(!consumeEOL())break}}function scanPunctuator(e){return f+=e.length,{type:32,value:e,line:S,lineStart:y,range:[g,f]}}function scanNumericLiteral(){var e=t.charAt(f),n=t.charAt(f+1);return{type:16,value:"0"===e&&"xX".indexOf(n||null)>=0?function readHexLiteral(){var e,n,r,a,o=0,i=1,s=1;a=f+=2,isHexDigit(t.charCodeAt(f))||raise(null,c.malformedNumber,t.slice(g,f));for(;isHexDigit(t.charCodeAt(f));)++f;if(e=parseInt(t.slice(a,f),16),"."===t.charAt(f)){for(n=++f;isHexDigit(t.charCodeAt(f));)++f;o=t.slice(n,f),o=n===f?0:parseInt(o,16)/Math.pow(16,f-n)}if("pP".indexOf(t.charAt(f)||null)>=0){for(++f,"+-".indexOf(t.charAt(f)||null)>=0&&(s="+"===t.charAt(f++)?1:-1),r=f,isDecDigit(t.charCodeAt(f))||raise(null,c.malformedNumber,t.slice(g,f));isDecDigit(t.charCodeAt(f));)++f;i=t.slice(r,f),i=Math.pow(2,i*s)}return(e+o)*i}():function readDecLiteral(){for(;isDecDigit(t.charCodeAt(f));)++f;if("."===t.charAt(f))for(++f;isDecDigit(t.charCodeAt(f));)++f;if("eE".indexOf(t.charAt(f)||null)>=0)for(++f,"+-".indexOf(t.charAt(f)||null)>=0&&++f,isDecDigit(t.charCodeAt(f))||raise(null,c.malformedNumber,t.slice(g,f));isDecDigit(t.charCodeAt(f));)++f;return parseFloat(t.slice(g,f))}(),line:S,lineStart:y,range:[g,f]}}function readEscapeSequence(){var e=f;switch(t.charAt(f)){case"a":return++f,"";case"n":return++f,"\n";case"r":return++f,"\r";case"t":return++f,"\t";case"v":return++f,"\v";case"b":return++f,"\b";case"f":return++f,"\f";case"\r":case"\n":return consumeEOL(),"\n";case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;isDecDigit(t.charCodeAt(f))&&f-e<3;)++f;var n=t.slice(e,f),r=parseInt(n,10);return r>255&&raise(null,c.decimalEscapeTooLarge,"\\"+r),o.encodeByte(r,"\\"+n);case"z":if(a.skipWhitespaceEscape)return++f,skipWhiteSpace(),"";break;case"x":if(a.hexEscapes){if(isHexDigit(t.charCodeAt(f+1))&&isHexDigit(t.charCodeAt(f+2)))return f+=3,o.encodeByte(parseInt(t.slice(e+1,f),16),"\\"+t.slice(e,f));raise(null,c.hexadecimalDigitExpected,"\\"+t.slice(e,f+2))}break;case"u":if(a.unicodeEscapes)return function readUnicodeEscapeSequence(){var e=f++;for("{"!==t.charAt(f++)&&raise(null,c.braceExpected,"{","\\"+t.slice(e,f)),isHexDigit(t.charCodeAt(f))||raise(null,c.hexadecimalDigitExpected,"\\"+t.slice(e,f));48===t.charCodeAt(f);)++f;for(var n=f;isHexDigit(t.charCodeAt(f));)++f-n>6&&raise(null,c.tooLargeCodepoint,"\\"+t.slice(e,f));var r=t.charAt(f++);"}"!==r&&('"'===r||"'"===r?raise(null,c.braceExpected,"}","\\"+t.slice(e,f--)):raise(null,c.hexadecimalDigitExpected,"\\"+t.slice(e,f)));var a=parseInt(t.slice(n,f-1)||"0",16),i="\\"+t.slice(e,f);return a>1114111&&raise(null,c.tooLargeCodepoint,i),o.encodeUTF8(a,i)}();break;case"\\":case'"':case"'":return t.charAt(f++)}return a.strictEscapes&&raise(null,c.invalidEscape,"\\"+t.slice(e,f+1)),t.charAt(f++)}function scanComment(){g=f,f+=2;var e=t.charAt(f),a="",o=!1,i=f,s=y,c=S;if("["===e&&(!1===(a=readLongString(!0))?a=e:o=!0),!o){for(;f<r&&!isLineTerminator(t.charCodeAt(f));)++f;n.comments&&(a=t.slice(i,f))}if(n.comments){var p=u.comment(a,t.slice(g,f));n.locations&&(p.loc={start:{line:c,column:g-s},end:{line:S,column:f-y}}),n.ranges&&(p.range=[g,f]),n.onCreateNode&&n.onCreateNode(p),m.push(p)}}function readLongString(e){var n,a=0,o="",i=!1,s=S;for(++f;"="===t.charAt(f+a);)++a;if("["!==t.charAt(f+a))return!1;for(f+=a+1,isLineTerminator(t.charCodeAt(f))&&consumeEOL(),n=f;f<r;){for(;isLineTerminator(t.charCodeAt(f));)consumeEOL();if("]"===t.charAt(f++)){i=!0;for(var u=0;u<a;++u)"="!==t.charAt(f+u)&&(i=!1);"]"!==t.charAt(f+a)&&(i=!1)}if(i)return o+=t.slice(n,f-1),f+=a+1,o}raise(null,e?c.unfinishedLongComment:c.unfinishedLongString,s,"<eof>")}function next(){h=d,d=x,x=lex()}function consume(e){return e===d.value&&(next(),!0)}function expect(e){e===d.value?next():raise(d,c.expected,e,tokenValue(d))}function isWhiteSpace(e){return 9===e||32===e||11===e||12===e}function isLineTerminator(e){return 10===e||13===e}function isDecDigit(e){return e>=48&&e<=57}function isHexDigit(e){return e>=48&&e<=57||e>=97&&e<=102||e>=65&&e<=70}function isIdentifierPart(e){return e>=65&&e<=90||e>=97&&e<=122||95===e||e>=48&&e<=57||!!(a.extendedIdentifiers&&e>=128)}function isBlockFollow(e){if(1===e.type)return!0;if(4!==e.type)return!1;switch(e.value){case"else":case"elseif":case"end":case"until":return!0;default:return!1}}function createScope(){var e=Array.apply(null,v[b++]);v.push(e),n.onCreateScope&&n.onCreateScope()}function destroyScope(){v.pop();--b,n.onDestroyScope&&n.onDestroyScope()}function scopeIdentifierName(e){n.onLocalDeclaration&&n.onLocalDeclaration(e),-1===l(v[b],e)&&v[b].push(e)}function scopeIdentifier(e){scopeIdentifierName(e.name),attachScope(e,!0)}function attachScope(e,t){t||-1!==function indexOfObject(e,t,n){for(var r=0,a=e.length;r<a;++r)if(e[r][t]===n)return r;return-1}(E,"name",e.name)||E.push(e),e.isLocal=t}function scopeHasName(e){return-1!==l(v[b],e)}Object.assign&&(assign=Object.assign),e.lex=lex;var C,L=[];function createLocationMarker(){return new Marker(d)}function Marker(e){n.locations&&(this.loc={start:{line:e.line,column:e.range[0]-e.lineStart},end:{line:0,column:0}}),n.ranges&&(this.range=[e.range[0],0])}function markLocation(){C&&L.push(createLocationMarker())}function pushLocation(e){C&&L.push(e)}function FullFlowContext(){this.scopes=[],this.pendingGotos=[]}function LoopFlowContext(){this.level=0,this.loopLevels=[]}function makeFlowContext(){return a.labels?new FullFlowContext:new LoopFlowContext}function parseBlock(e){for(var t,n=[];!isBlockFollow(d);){if("return"===d.value||!a.relaxedBreak&&"break"===d.value){n.push(parseStatement(e));break}t=parseStatement(e),consume(";"),t&&n.push(t)}return n}function parseStatement(e){if(markLocation(),32===d.type&&consume("::"))return function parseLabelStatement(e){var t=d,r=parseIdentifier();n.scope&&(scopeIdentifierName("::"+t.value+"::"),attachScope(r,!0));return expect("::"),e.addLabel(t.value,t),finishNode(u.labelStatement(r))}(e);if(!a.emptyStatement||!consume(";")){if(e.raiseDeferredErrors(),4===d.type)switch(d.value){case"local":return next(),function parseLocalStatement(e){var t,r=h;if(8===d.type){var a=[],o=[];do{t=parseIdentifier(),a.push(t),e.addLocal(t.name,r)}while(consume(","));if(consume("="))do{var i=parseExpectedExpression(e);o.push(i)}while(consume(","));if(n.scope)for(var s=0,c=a.length;s<c;++s)scopeIdentifier(a[s]);return finishNode(u.localStatement(a,o))}if(consume("function"))return t=parseIdentifier(),e.addLocal(t.name,r),n.scope&&(scopeIdentifier(t),createScope()),parseFunctionDeclaration(t,!0);raiseUnexpectedToken("<name>",d)}(e);case"if":return next(),function parseIfStatement(e){var t,r,a,o=[];C&&(a=L[L.length-1],L.push(a));t=parseExpectedExpression(e),expect("then"),n.scope&&createScope();e.pushScope(),r=parseBlock(e),e.popScope(),n.scope&&destroyScope();o.push(finishNode(u.ifClause(t,r))),C&&(a=createLocationMarker());for(;consume("elseif");)pushLocation(a),t=parseExpectedExpression(e),expect("then"),n.scope&&createScope(),e.pushScope(),r=parseBlock(e),e.popScope(),n.scope&&destroyScope(),o.push(finishNode(u.elseifClause(t,r))),C&&(a=createLocationMarker());consume("else")&&(C&&(a=new Marker(h),L.push(a)),n.scope&&createScope(),e.pushScope(),r=parseBlock(e),e.popScope(),n.scope&&destroyScope(),o.push(finishNode(u.elseClause(r))));return expect("end"),finishNode(u.ifStatement(o))}(e);case"return":return next(),function parseReturnStatement(e){var t=[];if("end"!==d.value){var n=parseExpression(e);for(null!=n&&t.push(n);consume(",");)n=parseExpectedExpression(e),t.push(n);consume(";")}return finishNode(u.returnStatement(t))}(e);case"function":return next(),parseFunctionDeclaration(function parseFunctionName(){var e,t,r;C&&(r=createLocationMarker());e=parseIdentifier(),n.scope&&(attachScope(e,scopeHasName(e.name)),createScope());for(;consume(".");)pushLocation(r),t=parseIdentifier(),e=finishNode(u.memberExpression(e,".",t));consume(":")&&(pushLocation(r),t=parseIdentifier(),e=finishNode(u.memberExpression(e,":",t)),n.scope&&scopeIdentifierName("self"));return e}());case"while":return next(),function parseWhileStatement(e){var t=parseExpectedExpression(e);expect("do"),n.scope&&createScope();e.pushScope(!0);var r=parseBlock(e);e.popScope(),n.scope&&destroyScope();return expect("end"),finishNode(u.whileStatement(t,r))}(e);case"for":return next(),function parseForStatement(e){var t,r=parseIdentifier();n.scope&&(createScope(),scopeIdentifier(r));if(consume("=")){var a=parseExpectedExpression(e);expect(",");var o=parseExpectedExpression(e),i=consume(",")?parseExpectedExpression(e):null;return expect("do"),e.pushScope(!0),t=parseBlock(e),e.popScope(),expect("end"),n.scope&&destroyScope(),finishNode(u.forNumericStatement(r,a,o,i,t))}for(var s=[r];consume(",");)r=parseIdentifier(),n.scope&&scopeIdentifier(r),s.push(r);expect("in");var c=[];do{var p=parseExpectedExpression(e);c.push(p)}while(consume(","));return expect("do"),e.pushScope(!0),t=parseBlock(e),e.popScope(),expect("end"),n.scope&&destroyScope(),finishNode(u.forGenericStatement(s,c,t))}(e);case"repeat":return next(),function parseRepeatStatement(e){n.scope&&createScope();e.pushScope(!0);var t=parseBlock(e);expect("until"),e.raiseDeferredErrors();var r=parseExpectedExpression(e);e.popScope(),n.scope&&destroyScope();return finishNode(u.repeatStatement(r,t))}(e);case"break":return next(),e.isInLoop()||raise(d,c.noLoopToBreak,d.value),function parseBreakStatement(){return finishNode(u.breakStatement())}();case"do":return next(),function parseDoStatement(e){n.scope&&createScope();e.pushScope();var t=parseBlock(e);e.popScope(),n.scope&&destroyScope();return expect("end"),finishNode(u.doStatement(t))}(e);case"goto":return next(),parseGotoStatement(e)}return a.contextualGoto&&8===d.type&&"goto"===d.value&&8===x.type&&"goto"!==x.value?(next(),parseGotoStatement(e)):(C&&L.pop(),function parseAssignmentOrCallStatement(e){var t,r,a,o,i,s=[];C&&(r=createLocationMarker());for(;;){if(C&&(t=createLocationMarker()),8===d.type)i=d.value,o=parseIdentifier(),n.scope&&attachScope(o,scopeHasName(i)),a=!0;else{if("("!==d.value)return unexpected(d);next(),o=parseExpectedExpression(e),expect(")"),a=!1}e:for(;;){switch(2===d.type?'"':d.value){case".":case"[":a=!0;break;case":":case"(":case"{":case'"':a=null;break;default:break e}o=parsePrefixExpressionPart(o,t,e)}if(s.push(o),","!==d.value)break;if(!a)return unexpected(d);next()}if(1===s.length&&null===a)return pushLocation(t),finishNode(u.callStatement(s[0]));if(!a)return unexpected(d);expect("=");var c=[];do{c.push(parseExpectedExpression(e))}while(consume(","));return pushLocation(r),finishNode(u.assignmentStatement(s,c))}(e))}C&&L.pop()}function parseGotoStatement(e){var t=d.value,n=h,r=parseIdentifier();return e.addGoto(t,n),finishNode(u.gotoStatement(r))}function parseIdentifier(){markLocation();var e=d.value;return 8!==d.type&&raiseUnexpectedToken("<name>",d),next(),finishNode(u.identifier(e))}function parseFunctionDeclaration(e,t){var r=makeFlowContext();r.pushScope();var a=[];if(expect("("),!consume(")"))for(;;){if(8===d.type){var o=parseIdentifier();if(n.scope&&scopeIdentifier(o),a.push(o),consume(","))continue}else 256===d.type?(r.allowVararg=!0,a.push(parsePrimaryExpression(r))):raiseUnexpectedToken("<name> or '...'",d);expect(")");break}var i=parseBlock(r);return r.popScope(),expect("end"),n.scope&&destroyScope(),t=t||!1,finishNode(u.functionStatement(e,a,t,i))}function parseTableConstructor(e){for(var t,n,r=[];;){if(markLocation(),32===d.type&&consume("["))t=parseExpectedExpression(e),expect("]"),expect("="),n=parseExpectedExpression(e),r.push(finishNode(u.tableKey(t,n)));else if(8===d.type)"="===x.value?(t=parseIdentifier(),next(),n=parseExpectedExpression(e),r.push(finishNode(u.tableKeyString(t,n)))):(n=parseExpectedExpression(e),r.push(finishNode(u.tableValue(n))));else{if(null==(n=parseExpression(e))){L.pop();break}r.push(finishNode(u.tableValue(n)))}if(!(",;".indexOf(d.value)>=0))break;next()}return expect("}"),finishNode(u.tableConstructorExpression(r))}function parseExpression(e){return function parseSubExpression(e,t){var r,a,o,i=d.value;C&&(a=createLocationMarker());if(function isUnary(e){return 32===e.type?"#-~".indexOf(e.value)>=0:4===e.type&&"not"===e.value}(d)){markLocation(),next();var s=parseSubExpression(10,t);null==s&&raiseUnexpectedToken("<expression>",d),r=finishNode(u.unaryExpression(i,s))}null==r&&null==(r=parsePrimaryExpression(t))&&(r=function parsePrefixExpression(e){var t,r,a;C&&(a=createLocationMarker());if(8===d.type)r=d.value,t=parseIdentifier(),n.scope&&attachScope(t,scopeHasName(r));else{if(!consume("("))return null;t=parseExpectedExpression(e),expect(")")}for(;;){var o=parsePrefixExpressionPart(t,a,e);if(null===o)break;t=o}return t}(t));if(null==r)return null;for(;i=d.value,!(0===(o=32===d.type||4===d.type?binaryPrecedence(i):0)||o<=e);){"^"!==i&&".."!==i||--o,next();var c=parseSubExpression(o,t);null==c&&raiseUnexpectedToken("<expression>",d),C&&L.push(a),r=finishNode(u.binaryExpression(i,r,c))}return r}(0,e)}function parseExpectedExpression(e){var t=parseExpression(e);if(null!=t)return t;raiseUnexpectedToken("<expression>",d)}function binaryPrecedence(e){var t=e.charCodeAt(0),n=e.length;if(1===n)switch(t){case 94:return 12;case 42:case 47:case 37:return 10;case 43:case 45:return 9;case 38:return 6;case 126:return 5;case 124:return 4;case 60:case 62:return 3}else if(2===n)switch(t){case 47:return 10;case 46:return 8;case 60:case 62:return"<<"===e||">>"===e?7:3;case 61:case 126:return 3;case 111:return 1}else if(97===t&&"and"===e)return 2;return 0}function parsePrefixExpressionPart(e,t,n){var r,a;if(32===d.type)switch(d.value){case"[":return pushLocation(t),next(),r=parseExpectedExpression(n),expect("]"),finishNode(u.indexExpression(e,r));case".":return pushLocation(t),next(),a=parseIdentifier(),finishNode(u.memberExpression(e,".",a));case":":return pushLocation(t),next(),a=parseIdentifier(),e=finishNode(u.memberExpression(e,":",a)),pushLocation(t),parseCallExpression(e,n);case"(":case"{":return pushLocation(t),parseCallExpression(e,n)}else if(2===d.type)return pushLocation(t),parseCallExpression(e,n);return null}function parseCallExpression(e,t){if(32===d.type)switch(d.value){case"(":a.emptyStatement||d.line!==h.line&&raise(null,c.ambiguousSyntax,d.value),next();var n=[],r=parseExpression(t);for(null!=r&&n.push(r);consume(",");)r=parseExpectedExpression(t),n.push(r);return expect(")"),finishNode(u.callExpression(e,n));case"{":markLocation(),next();var o=parseTableConstructor(t);return finishNode(u.tableCallExpression(e,o))}else if(2===d.type)return finishNode(u.stringCallExpression(e,parsePrimaryExpression(t)));raiseUnexpectedToken("function arguments",d)}function parsePrimaryExpression(e){var r,a=d.value,o=d.type;if(C&&(r=createLocationMarker()),256!==o||e.allowVararg||raise(d,c.cannotUseVararg,d.value),466&o){pushLocation(r);var i=t.slice(d.range[0],d.range[1]);return next(),finishNode(u.literal(o,a,i))}return 4===o&&"function"===a?(pushLocation(r),next(),n.scope&&createScope(),parseFunctionDeclaration(null)):consume("{")?(pushLocation(r),parseTableConstructor(e)):void 0}Marker.prototype.complete=function(){n.locations&&(this.loc.end.line=h.lastLine||h.line,this.loc.end.column=h.range[1]-(h.lastLineStart||h.lineStart)),n.ranges&&(this.range[1]=h.range[1])},Marker.prototype.bless=function(e){if(this.loc){var t=this.loc;e.loc={start:{line:t.start.line,column:t.start.column},end:{line:t.end.line,column:t.end.column}}}this.range&&(e.range=[this.range[0],this.range[1]])},FullFlowContext.prototype.isInLoop=function(){for(var e=this.scopes.length;e-- >0;)if(this.scopes[e].isLoop)return!0;return!1},FullFlowContext.prototype.pushScope=function(e){var t={labels:{},locals:[],deferredGotos:[],isLoop:!!e};this.scopes.push(t)},FullFlowContext.prototype.popScope=function(){for(var e=0;e<this.pendingGotos.length;++e){var t=this.pendingGotos[e];t.maxDepth>=this.scopes.length&&--t.maxDepth<=0&&raise(t.token,c.labelNotVisible,t.target)}this.scopes.pop()},FullFlowContext.prototype.addGoto=function(e,t){for(var n=[],r=0;r<this.scopes.length;++r){var a=this.scopes[r];if(n.push(a.locals.length),Object.prototype.hasOwnProperty.call(a.labels,e))return}this.pendingGotos.push({maxDepth:this.scopes.length,target:e,token:t,localCounts:n})},FullFlowContext.prototype.addLabel=function(e,t){var n=this.currentScope();if(Object.prototype.hasOwnProperty.call(n.labels,e))raise(t,c.labelAlreadyDefined,e,n.labels[e].line);else{for(var r=[],a=0;a<this.pendingGotos.length;++a){var o=this.pendingGotos[a];o.maxDepth>=this.scopes.length&&o.target===e?o.localCounts[this.scopes.length-1]<n.locals.length&&n.deferredGotos.push(o):r.push(o)}this.pendingGotos=r}n.labels[e]={localCount:n.locals.length,line:t.line}},FullFlowContext.prototype.addLocal=function(e,t){this.currentScope().locals.push({name:e,token:t})},FullFlowContext.prototype.currentScope=function(){return this.scopes[this.scopes.length-1]},FullFlowContext.prototype.raiseDeferredErrors=function(){for(var e=this.currentScope(),t=e.deferredGotos,n=0;n<t.length;++n){var r=t[n];raise(r.token,c.gotoJumpInLocalScope,r.target,e.locals[r.localCounts[this.scopes.length-1]].name)}},LoopFlowContext.prototype.isInLoop=function(){return!!this.loopLevels.length},LoopFlowContext.prototype.pushScope=function(e){++this.level,e&&this.loopLevels.push(this.level)},LoopFlowContext.prototype.popScope=function(){var e=this.loopLevels,t=e.length;t&&e[t-1]===this.level&&e.pop(),--this.level},LoopFlowContext.prototype.addGoto=LoopFlowContext.prototype.addLabel=function(){throw new Error("This should never happen")},LoopFlowContext.prototype.addLocal=LoopFlowContext.prototype.raiseDeferredErrors=function(){},e.parse=function parse(c,u){void 0===u&&"object"==typeof c&&(u=c,c=void 0);u||(u={});if(t=c||"",n=assign({},i,u),f=0,S=1,y=0,r=t.length,v=[[]],b=0,E=[],L=[],!Object.prototype.hasOwnProperty.call(k,n.luaVersion))throw new Error(sprintf("Lua version '%1' not supported",n.luaVersion));a=assign({},k[n.luaVersion]),void 0!==n.extendedIdentifiers&&(a.extendedIdentifiers=!!n.extendedIdentifiers);if(!Object.prototype.hasOwnProperty.call(s,n.encodingMode))throw new Error(sprintf("Encoding mode '%1' not supported",n.encodingMode));o=s[n.encodingMode],n.comments&&(m=[]);return n.wait?e:end()};var k={5.1:{},5.2:{labels:!0,emptyStatement:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,relaxedBreak:!0},5.3:{labels:!0,emptyStatement:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,unicodeEscapes:!0,bitwiseOperators:!0,integerDivision:!0,relaxedBreak:!0},LuaJIT:{labels:!0,contextualGoto:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,unicodeEscapes:!0}};function write(n){return t+=String(n),r=t.length,e}function end(e){void 0!==e&&write(e),t&&"#!"===t.substr(0,2)&&(t=t.replace(/^.*/,(function(e){return e.replace(/./g," ")}))),r=t.length,C=n.locations||n.ranges,x=lex();var a=function parseChunk(){next(),markLocation(),n.scope&&createScope();var e=makeFlowContext();e.allowVararg=!0,e.pushScope();var t=parseBlock(e);return e.popScope(),n.scope&&destroyScope(),1!==d.type&&unexpected(d),C&&!t.length&&(h=d),finishNode(u.chunk(t))}();if(n.comments&&(a.comments=m),n.scope&&(a.globals=E),L.length>0)throw new Error("Location tracking failed. This is most likely a bug in luaparse");return a}e.write=write,e.end=end}))}).call(this,n("YuTi")(e),n("yLpj"))}}]);