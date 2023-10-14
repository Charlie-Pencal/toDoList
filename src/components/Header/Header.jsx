import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <img src="/toDoList.svg" alt="" />
        <div className={styles.div}>
            <input type="text" className={styles.buscar} placeholder='Buscar'/>
            <li className={styles.navegacaoFiltros}>
                <a className={styles.filtros} href="#pendente">Pendente</a>
                <a className={styles.filtros} href="#concluido">Concluido</a>
                <a className={styles.filtros} href="#">Sem filtro</a>
            </li>
        </div>

    </div>
  )
}

export default Header