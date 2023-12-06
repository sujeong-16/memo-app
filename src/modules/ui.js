// 프로젝트의 인터페이스 상태를 담당
// 컴포넌트가 포커스되었는지 여부와 제목, 내용의 상태를 관리하도록 설정
import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";

const FOCUS_INPUT = 'ui/write/FOCUS_INPUT';   // InputSet 컴포넌트에 포커스
const BLUR_INPUT = 'ui/write/BLUR_INPUT';   // 포커스 풀림
const CHANGE_INPUT = 'ui/write/CHANGE_INPUT';   // 제목 또는 내용이 수정됨
const RESET_INPUT = 'ui/write/RESET_INPUT';   // 내용을 초기화시킴(완료를 눌렀을 때 실행됨)

export const focusInput = createAction(FOCUS_INPUT);
export const blurInput = createAction(BLUR_INPUT);
export const changeInput = createAction(CHANGE_INPUT);    // { name, value }
export const resetInput = createAction(RESET_INPUT);

const initialState = Map ({
  write: Map ({
    focused: false,
    title: '',
     body: ''
  })
});

export default handleActions ({
  [FOCUS_INPUT]: (state) => state.setIn(['write', 'focused'], true),
  [BLUR_INPUT]: (state) => state.setIn(['write', 'focused'], false),
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['write', name], value);
  },
  [RESET_INPUT]: (state) => state.set('write', initialState.get('write'))
}, initialState);