import React from 'react';

const Check = (props) => {
  return (
    props.status === 'pendente' ? (
      <a onClick={props.onCheck}><img src="/pendente.svg" alt="" /></a>
    ) : (
      <a onClick={props.onCheck}><img src="/concluido.svg" alt="" /></a>
    )
  );
};

export default Check;
