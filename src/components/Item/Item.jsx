import React from 'react'
import Check from '../Check/Check'
import itemStyle from './Item.module.css'

const Item = (props) => {
  return (
    <div className={itemStyle.listaTarefas}>
      <Check status={props.tarefa.status} onCheck={props.onCheck} />
      {props.tarefa.nome}
      <div>
        <button onClick={props.onEdit}>
          <img src="/pencil.svg" alt="" />
        </button>
        <button onClick={props.onRemove}>
          <img src="/trash.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Item