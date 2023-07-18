const PropTypes = {
  string(props, propName, componentName) {
    //검사 코드 작성
    const value = props[propName];
    const valueType = typeof value;

    //전달된 프롭 타입 검사후, 타입이 일치하지 않을 경우 오류 발생
    if (valueType !== 'string') {
      throw new Error(
        `${componentName} 컴포넌트에 전달된 "${propName}" 프롭은 기대되는 타입이 string이나, 너의 값은 "${valueType}" 이야`
      );
    }
  },
};

export default PropTypes;
