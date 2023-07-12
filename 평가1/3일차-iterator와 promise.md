## 01. iterable-iteraor
+ 이터러블 프로토콜(iterable protocol) 조건
    +  iterable[Symbol.iterator] 메서드를 가진 객체
+ 이터레이션 프로토콜(iterator protocol) 조건
    + next 메서드를 가진 객체
+ next 메서드를 실행하면 { done: boolean, value: any } 반환
+ done 값이 false 인 경우 다음 순환 가능 value 반환
+ done 값이 true 인 경우 다음 순환 없음 value는 undefined

```
// 내장된 String Iterable
let iterable = '나 커피 사줘';

// Iterable 조건은 [Symbol.iterator] 메서드를 가짐
// console.log(typeof iterable[Symbol.iterator]);

// Iterable의 [Symbol.iterator] 메서드를 실행하면 Iterator 반환
const iterator = iterable[Symbol.iterator]();

// Iterator 조건은 next 메서드를 가짐
// console.log(typeof iterator.next);

// Iterator의 next 메서드가 실행되면 { done, value } 반환
// done 값이 true인 경우 순환 종료
for (let i = 0; i <= iterable.length; i++) {
  // console.log(iterator.next());
}
```
## 출력
function<br>
function<br>
{ value: '나', done: false }<br>
{ value: ' ', done: false }<br>
{ value: '커', done: false }<br>
{ value: '피', done: false }<br>
{ value: ' ', done: false }<br>
{ value: '사', done: false }<br>
{ value: '줘', done: false }<br>
{ value: undefined, done: true }<br>

## 02. promise async await
```
function main() {
  console.log('start!');

  // Promise + Async function with await
  delayPromise().then(async () => {
    console.log('1s');
    await delayPromise();
    console.log('2s');
    await delayPromise();
    console.log('3s');
    await delayPromise(500);
    console.log('3.5s');
    await delayPromise(1500);
    console.log('4.5s');
  });

  // callback hell
  // 참고: https://bit.ly/3r5iUfe
   delay(() => {
     console.log('1s');
     delay(() => {
       console.log('2s');
       delay(() => {
         console.log('3s');
         delay(() => {
           console.log('4s');
         });
       });
     });
   });
}
```
## 출력
1s <br>
2s<br>
3s<br>
3.5s<br>
4.5s<br>

+ 두 함수의 차이점은 첫 번째 함수는 Promise와 async/await를 사용하고 두 번째 함수는 callback을 사용한다는 것이다
    + Promise와 async/await는 JavaScript에서 비동기 코드를 처리하는 더 현대적인 방법이다. 더 읽기 쉽고 유지 관리하기 쉬운 코드를 작성할 수 있으며 callback hell을 피하는 데 도움이 될 수 있다.
    + callback은 JavaScript에서 비동기 코드를 처리하는 이전의 방법이다. 읽고 유지 관리하기 더 어려울 수 있으며 callback hell을 초래할 수 있다.

+ 첫 번째 함수에서 delayPromise() 함수는 Promise를 반환한다. 
+ Promise의 then() 메서드는 비동기 작업의 성공 또는 실패를 처리하는 데 사용된다. 
+ await 키워드는 Promise가 해결되기를 기다렸다가 실행을 계속하는 데 사용된다.