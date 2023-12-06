// 제목과 내용을 입력하는 컴포넌트
// ref를 통하여 컴포넌트가 페이지에 나타나면 제목input에 포커스가 되도록 설정
// 제목과 내용을 body, title이라는 props로 받아오고 이 내용들을 수정되는 함수 onChange도 받음
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';

const TitleInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 1.25rem;
  font-family: "pretendard"
`;
const StyledTextArea = styled(Textarea)`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 300;
  font-size: 1.1rem;
  margin-top: 1rem;
  resize: none;
  font-family: "pretendard"
`;

class InputSet extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    title: PropTypes.string,
    body: PropTypes.string
  }

  // componentDidMount() {
  //   // 이 컴포넌트가 화면에 나타나면 제목 인풋에 포커스를 줍니다.
  //   this.title.focus();
  // }   // => focus() 오류나서 주석처리함

  render() {
    const { onChange, title, body } = this.props;

    return (
      <div>
        <TitleInput 
          name="title" 
          onChange={onChange} 
          placeholder="제목" 
          innerRef={ref=>this.title = ref}
          value={title}
        />
        <StyledTextArea
          minRows={3}
          maxRows={20}
          placeholder="메모를 입력해주세요!"
          name="body"
          onChange={onChange}
          value={body}
        />
      </div>
    );
  }
}

export default InputSet;