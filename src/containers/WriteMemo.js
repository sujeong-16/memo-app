import React, { Component } from 'react';
import { InputPlaceholder, WhiteBox } from 'components/WriteMemo';
import { InputSet, SaveBtn } from 'components/Shared';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from 'modules/ui';
import enhanceWithClickOutside from 'react-click-outside';   //컴포넌트 바깥을 클릭하면 포커스가 해제되도록 설정


class WriteMemo extends Component {
  handleFocus =() => {
    const { focused, UIActions } = this.props;

    // 포커스 된 상태가 아닐 때만 실행함
    if( !focused ){
      UIActions.focusInput();
    }
  }
  handleClickOutside = () => {
    const { UIActions, focused, title, body } = this.props;

    if(focused) {   // 포커스가 되어 있지 않을때만 실행한다
      if(title !== '' || body !== '') return;   // 만약에 title 이나 body 가 비어있지 않다면 유지시킨다
      UIActions.blurInput();
    }
  }
  handleChange = (e) => {   //이벤트 정보에 따라 알맞는 값을 수정하도록 설정
    const { UIActions } = this.props;
    const { name, value } = e.target;

    UIActions.changeInput({name, value});
  }


  render() {
    const { handleFocus, handleChange } = this;
    const { focused, title, body } = this.props;

    return (
      focused ? /** 포커스 된 상태 */ (
        <WhiteBox>
          <InputSet onChange={handleChange} title={title} body={body} />
          <SaveBtn />
        </WhiteBox>
      ) : /** 포커스 풀린 상태 */ (
        <WhiteBox onClick={handleFocus}>
          <InputPlaceholder />
        </WhiteBox>
      )
    );
  }
}

export default connect(
  (state) => ({
    focused: state.ui.getIn(['write', 'focused']),
    title: state.ui.getIn(['write', 'title']),
    body: state.ui.getIn(['write', 'body'])
  }),
  (dispatch) => ({
    UIActions: bindActionCreators(uiActions, dispatch)
  })
)(enhanceWithClickOutside(WriteMemo));