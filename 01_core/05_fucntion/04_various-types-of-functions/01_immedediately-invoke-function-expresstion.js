/* 1. 즉시 실행 함수 */

/*
    함수 정의와 동시에 즉시 호출되는 함수로, 단 한번만 호출되며 다시 호출할 수 없다.
    즉시 실행 함수는 반드시 () - 그룹 연산자로 감싸야 한다.
*/

(function() {
    console.log('익명 즉시 실행 함수가 정의와 동시에 호출되었다 !!!')
})();

// 함수 이름을 작성해도 되지만, 해당 이름으로 다시 호출해 사용할 수는 없다.
(function info(name) {
    console.log(`나는 ${name}이다!!`)
})('판다');

// info('다람쥐'); // ReferenceError: info is not defined