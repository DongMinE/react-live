"use strict";
// --------------------------------------------------------------------------
// spread syntax
function run() {
    combineArray();
    combineObject();
}
function combineArray() {
    const numberList = [2, -2, 1];
    const countList = [101, 201, 301];
    const combineList = countList
        .slice(0, 2)
        .concat(numberList)
        .concat(countList.slice(2));
    // [ 101, 201, 2, -2, 1, 301 ]
    console.log(combineList);
}
function combineObject() {
    const defaultOptions = {
        startIndex: 0,
        loop: false,
        usingAria: true,
    };
    const customOptions = {
        loop: true,
        // startIndex: 0,
    };
    let combineOptions = Object.assign({}, defaultOptions, customOptions);
    console.log(combineOptions);
    combineOptions = Object.assign(Object.assign({}, defaultOptions), customOptions);
    console.log(combineOptions);
}
run();
