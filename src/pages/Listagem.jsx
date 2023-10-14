import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Tarefas from '../components/Tarefas/Tarefas';


const Listagem = () => {
   return (
    <>
        <Header/>
        <Tarefas/>
    </>
  );
};

export default Listagem;
