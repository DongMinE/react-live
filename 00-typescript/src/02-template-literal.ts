// --------------------------------------------------------------------------
// template literal

const koreanFoods: {
  caption: string;
  rows: {
    headline: string;
    content: string;
  }[];
} = {
  caption: '한식 메뉴',
  rows: [
    {headline: '뚝배기 불고기', content: '8,000원'},
    {headline: '스팸치즈볶음밥', content: '7,500원'},
    {headline: '불고기낙지덮밥', content: '9,000원'},
  ],
};

function run02() {
  let rendredResult = printTableHTML(koreanFoods);
  rendredResult = removeSpaceString(rendredResult);
  console.log(rendredResult);
}

function removeSpaceString(data: string): string {
  return data.replace(/(\s+<$>\s+)/g, ($1) => {
    if (/\s+<$/.test($1)) {
      return '<';
    } else if (/>\s+/.test($1)) {
      return '>';
    } else {
      return '';
    }
  }).trim();
}

function printTableHTML(data: {
  caption: string;
  rows: {
    headline: string;
    content: string;
  }[];
}): string {
  // let variable = 'string';
  // return `this is ${variable}`;
  return `
  <table class="table">
    <caption class="sr-only">${data.caption}</caption>
    ${
      data.rows.map(item => (
          `
        <tr>
          <th>${item.headline}</th>
          <td>${item.content}</td>
        </tr>
        `
      )).join('')}
   </table>
  `;

}

run02();
