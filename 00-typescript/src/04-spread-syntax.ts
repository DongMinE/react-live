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

interface Options {
  //required 방식
  //startIndex: number,

  //optional 방식
  startIndex?: number,
  loop?: boolean,
  usingAria?: boolean,
}

interface Options2{
  //required 방식
  //startIndex: number,

  //optional 방식
  startIndex: number,
  loop: boolean,
  usingAria: boolean,
}


function combineObject() {
  const defaultOptions: Options = {
    startIndex: 0,
    loop: false,
    usingAria: true,
  };

  const customOptions: Partial<Options2> = {
    loop: true,
    // startIndex: 0,
  };

  let combineOptions = Object.assign({}, defaultOptions, customOptions);
  console.log(combineOptions);
  combineOptions = { ...defaultOptions, ...customOptions};
  console.log(combineOptions);
}

run();
