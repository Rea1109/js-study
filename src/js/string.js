/**
 *  String method 정리
 */

let num = 3;
let str = 'hello javascript';

// 템플릿 리터럴
console.log(`string : ${str} / number : ${num}`);

/**
   이스케이프 문자
 
    \n : Enter(개행)
    \t : 탭
    \v : 세로 탭
    \' : 작은따옴표
    \" : 큰따옴표
    \\ : 역슬래시

 */

// concat()
let first = 'hello ';
let second = 'javascript';

console.log(first.concat(second));

// includes()
let content = 'javascript html css react jQuery';

console.log(content.includes('html'));
console.log(content.includes('mlht'));

// split() 인자로 받은 구분자로 나눠 배열 return
