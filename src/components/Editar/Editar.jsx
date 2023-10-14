import React from 'react'

const Editar = (props) => {
    return (
        <div>
            <input
                type="text"
                value={props.nomeValue}
                onChange={props.editarNome}
            />
        </div>
    )
}

export default Editar