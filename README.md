# POW_frontend

react 설치
npx create-react-app 프로젝트 이름
styled-component 설치
npm i styled-components
설치 후 package.json에 styled-components가 추가된 것을 확인!!

  "dependencies": {
    "react": "^16.8.0",
    "react-dom": "^16.8.0",
    "styled-components": "^4.3.2"
  },
사용법)

사용하고하는 상위 파일에서 위처럼 선언
import * as S from './style';
스타일.js 파일을 생성후 선언
import styled from 'styled-components';
scss 설치
npm install node-sass --save
css와 사용법은 거의 동일하지만, css에서 지원하지않는 변수지정 함수활용 등을 활용해 더욱 생산적인 디자인 작업이 가능하다!

react-router-dom 설치
npm install react-router-dom --save
설치 후 package.json에 styled-components가 추가된 것을 확인!!

사용법)

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
사용할 것들을 선언 해준다
return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
			//=> Main컴포넌트와 연결
          <Route exact path="/login" component={Login} />
            //=> Login컴포넌트와 연결
        </Switch>
      </Router>
    );
위처럼 작성
axios 설치
npm install axios
사용법)

utils 폴더를 생성우 axios 폴더를 만든다

import Axios from "axios";
선언한다음

MainURL 선언하고 함수를 만든다.

export const MainURL = "http://111111111111"; //MainURL 선언!!

export function request(method, url, header, data) {
  return Axios({
    method, 
    url: MainURL + url,
    headers: header,
    data: data,
  })
    .then((res) => { // 성공
      console.log("다 받기 성공");
      console.log(res);
      return res;
    })
    .catch((e) => {  // 오류
      console.error(e);
    });
}
연동할 파일
const [이름, set이름] = useState([]); //배열로 받아올 것이니 배열로 초기값을 해준다.

const 이름 = async () => {
      try {
        const data = await request(
          "get", // post, put, delete 등 사용가능
          `/axios`, // url 작성!!
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` }, 
          "" // body 작성
        );
        set이름(data.이름); // 이름안에 받아온 데이터를 넣어준다.
      } catch (e) {
        console.error(e);
      }
    };
