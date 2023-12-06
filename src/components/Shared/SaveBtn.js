// 메모 내용을 저장하는 컴포넌트
// 저장하는 함수를 props로 받아옴
import styled from 'styled-components';
import oc from 'open-color';
import React from 'react';
import PropTypes from 'prop-types';

const Wrap = styled.div`
  text-align: right;
`;

const Button = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  color: ${oc.indigo[7]};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: ${oc.gray[1]};
  }
  &:active {
    background: ${oc.gray[2]};
  }
`;

const SaveBtn = ({onClick}) => (
  <Wrap>   
    <Button onClick={onClick}>
      완료
    </Button>
  </Wrap>
);

SaveBtn.propTypes = {
    onClick: PropTypes.func
}

export default SaveBtn;