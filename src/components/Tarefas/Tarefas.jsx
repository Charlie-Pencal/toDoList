import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Item from '../Item/Item';
import Editar from '../Editar/Editar';

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([{ id: 1, nome: 'oi', status: 'pendente' }]);
  const [tarefasFiltradas, setTarefasFiltradas] = useState([]);

  const [nome, setNome] = useState('');
  const [tarefaEmEdicao, setTarefaEmEdicao] = useState(null);
  const [novoNomeTarefa, setNovoNomeTarefa] = useState('');
  const { hash } = useLocation();

  useEffect(() => {
    const filtrarPor = hash.slice(1, hash.length); // pendente ou concluído
    if (!filtrarPor) {
      setTarefasFiltradas(tarefas);
      return;
    }

    const novasTarefas = tarefas.filter((tarefa) => tarefa.status === filtrarPor);
    setTarefasFiltradas(novasTarefas);
  }, [hash, tarefas]);

  const adicionarTarefa = () => {
    if (tarefaEmEdicao) {
      const tarefasAtualizadas = tarefas.map((tarefa) => {
        if (tarefa.id === tarefaEmEdicao) {
          return {
            ...tarefa,
            nome: novoNomeTarefa,
          };
        }
        return tarefa;
      });
      setTarefas(tarefasAtualizadas);
      setTarefaEmEdicao(null);
    } else {
      const novaTarefa = {
        id: Math.round(Math.random() * 1000),
        nome: nome,
        status: 'pendente',
      };
      setTarefas([novaTarefa, ...tarefas]);
    }

    setNome('');
    setNovoNomeTarefa('');
  };

  const removeTarefa = (id) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  const iniciarEdicao = (id) => {
    const tarefaParaEditar = tarefas.find((tarefa) => tarefa.id === id);
    if (tarefaParaEditar) {
      setTarefaEmEdicao(id);
      setNovoNomeTarefa(tarefaParaEditar.nome);
    }
  };

  const alterarStatus = (id) => {
    const tarefaParaEditar = tarefas.find((tarefa) => tarefa.id === id);
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          status: tarefaParaEditar.status === 'pendente' ? 'concluido' : 'pendente',
        };
      }
      return tarefa;
    });
    setTarefas(tarefasAtualizadas);
  };

  return (
    <div>
      <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
      {nome}
      <button type="button" onClick={adicionarTarefa}>
        <img src="/plus.svg" alt="" />
      </button>
      {tarefasFiltradas.map((tarefa) => (
        <div key={tarefa.id}>
          {tarefa.id === tarefaEmEdicao ? (
            <Editar
              nomeValue={novoNomeTarefa}
              editarNome={(event) => setNovoNomeTarefa(event.target.value)}
            />
          ) : (
            <Item
              tarefa={{ ...tarefa }}
              onCheck={() => alterarStatus(tarefa.id)}
              onEdit={() => iniciarEdicao(tarefa.id)}
              onRemove={() => removeTarefa(tarefa.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Tarefas;
