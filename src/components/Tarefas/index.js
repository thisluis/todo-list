import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas( {tarefas, handleEdit, handleDelete} ){
  return(
    <ul className="tarefas">
          {tarefas.map((tarefa, index) =>(
            <li key={tarefa}>{tarefa}
            <div>
              <FaEdit onClick= {(e) => handleEdit(e, index)}
              className="edit"/>
              <FaWindowClose onClick= {(e) => handleDelete(e, index)}
               className="delete"/>
            </div>
            </li>
          ))}
        </ul>
  )
}