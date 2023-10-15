import React from 'react'
import {editarBarra} from '../Editar/Editar.module.css'

const Editar = (props) => {
    return (
        <div>
            <input
                className={editarBarra}
                type="text"
                value={props.nomeValue}
                onChange={props.editarNome}
            />
        </div>
    )
}

export default Editar