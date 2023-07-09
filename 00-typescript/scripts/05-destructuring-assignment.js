"use strict";
// --------------------------------------------------------------------------
// destructuring assignment
// 구조 분해 할당
//배열 [], 객체 {} 구조 분해 스코프 안에서 사용할 변수 또는 상수에 할당
{
    // const courses: Array<Course> = [
    const courses = [
        {
            id: 1,
            title: 'React 펀더멘탈',
            url: 'https://fundamentals.dev/react',
        },
        {
            id: 2,
            title: 'React Router 펀더멘탈',
            url: 'https://fundamentals.dev/react-rouer',
        },
        {
            id: 3,
            title: 'Recoil 펀더멘탈',
            url: 'https://fundamentals.dev/recoil',
        },
    ];
    courses.push({
        id: 10, title: "테스트", url: "테스트2"
    });
    function run() {
        // spreadArray();
        // spreadObject();
        spreadRender();
    }
    function spreadArray() {
        // 배열 구조에서 각 항목 추출
        // const reactCourse = courses[0];
        // 나머지 항목 배열로 재구성 추출
        // const restCourses = courses.slice(1);
        //배열 구조 분해 재할당 (지역 변수)
        // 첫 요소를 reactCourse에 할당하고 나머지를 restCourses에 할당
        const [reactCourse, ...restCourses] = courses;
        console.log(reactCourse);
        console.log(restCourses);
    }
    function spreadObject() {
        const [reactCourse] = courses;
        //3번째꺼만
        // React Hooks
        //const [,setState] = React.useState(100);
        // const [,, recoilCourse] = courses;
        // let reactCourseId = reactCourse.id;
        // let reactCourseTitle = reactCourse.title;
        // let reactCourseUrl = reactCourse.url;
        //객체 구조 본해해서 지역 변수로 할당
        //변수 이름 별칭 사용
        const { url: reactCourseUrl, id: reactCourseId, title: reactCourseTitle } = reactCourse; //순서 중요하지 않음
        //React Hooks
        //const { isLoading, setIsLoading }  = useState(false);
        console.log(reactCourseUrl);
        console.log(reactCourseId);
        console.log(reactCourseTitle);
        // console.log(id);
        // console.log(url);
        // console.log(title);
    }
    function spreadRender() {
        const koreanFoods = {
            caption: '한식 메뉴',
            rows: [
                { headline: '뚝배기 불고기', content: '8,000원' },
                { headline: '스팸치즈볶음밥', content: '7,500원' },
                { headline: '불고기낙지덮밥', content: '9,000원' },
            ],
        };
        const rendredResult = renderTable(koreanFoods);
        console.log(rendredResult);
        function renderTable(data) {
            return `
      <table class="table">
        <caption class="sr-only">${data.caption}</caption>
        ${data.rows
                .map(function (item) {
                return `
              <tr>
                <th>${item.headline}</th>
                <td>${item.content}</td>
              </tr>
            `;
            })
                .join('')}
      </table>
    `;
        }
    }
    run();
}
