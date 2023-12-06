// REST API 들을 호출하는 함수들을 만들어서 저장
// axios는 프로미스 기반으로 웹 요청을 해주는 라이브러리. 각 HTTP 메소드에 따라 내장 함수가 있다. 현재 POST를 하기 때문에 axios.post 라고 설정했다.
// GET 일 경우엔 axios.get 을 하면 되고, DELETE 의 경우엔 axios.delete 를 해주면 된다.
import axios from "axios";

export const createMemo = ({title, body}) => axios.post('/memo', {title, body});
 // axios.post 함수의 첫 번째 파라미터는 '요청할 주소'이고, 두 번째 파라미터는 '전달할 데이터(Request Body)' 이다.