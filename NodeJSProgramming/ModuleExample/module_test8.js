/* 사용패턴: new 연산자로 만든 인스턴스 객체를 module.exports에 할당한 후 그 인스턴스 객체의 함수를 호출 */
var user = require('./user8');

user.printUser();