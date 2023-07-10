"use strict";
// --------------------------------------------------------------------------
// 📌 [TypeScript → ECMAScript(JavaScript)]
// --------------------------------------------------------------------------
// - TypeScript는 타입 시스템을 사용할 수 있는 ECMAScript(JavaScript)입니다.
// - ECMAScript(JavaScript)는 2015년 이후 매년 업데이트 됩니다.
// - ECMAScript 2015(v6) → ECMAScript 2023(v14)
// --------------------------------------------------------------------------
// 01. let, const
// 02. template literal
// 03. operators (nullish, optional chaining)
// 04. spread syntax
// 05. destructuring assignment
// 06. arrow function
// 07. default parameters
// 08. rest parameters
// 09. iterable / iterator
// 10. generator function
// 11. promise & async - await
// 12. ES Modules
// 13. class
// console.log("es module");

import createRoot, { shuffle, createElement as h } from "./12-es-modules.js";

// console.log(createRoot);

function demo1() {
  console.log(Esmodules.shuffle([1, 2, 3, 4]));
  console.log(Esmodules.numberWithComma(9_700_234));

  const originalArray = [2, 4, 65, 23];
  const createdArray1 = [...originalArray];
  const createdArray2 = originalArray;
  const createdArray3 = shuffle(originalArray);

  console.assert(
    Object.is(originalArray, createdArray1),
    "createdArray1 동일한 객체아니다"
  );
  console.assert(
    !Object.is(originalArray, createdArray2),
    "createdArray2 동일한 객체이다"
  );
  console.assert(
    Object.is(originalArray, createdArray3),
    "createdArray3 동일한 객체아니다"
  );
}

function demo2() {
  //가상 노드
  const stringElement = h("strong", {}, "Virtual");
  const headingElement = h(
    "h1",
    { className: "headline", lang: "en" },
    stringElement,
    " Element"
  );

  const appElement = h(
    "div",
    {
      className: "app",
      role: "section",
    },
    headingElement
  );

  console.log(appElement); //vDom tree

  const rootElement = document.getElementById("root");
  const virtualDomRoot = createRoot(rootElement);
  // console.log(virtualDomRoot);

  virtualDomRoot.render(appElement);
  //가상노드를 render메소드를 통해 생성된 인스턴스에 넣는다.
  // virtualDomRoot.render(headingElement);
}

demo2();
