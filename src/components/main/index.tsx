import React, { useState } from 'react';
import * as S from './style';
import { taskProps } from '../helpers/task'

const Container = () => {

  const [task, setTask] = useState<taskProps[]>([])
  const [newTask, setNewTask] = useState('')





  return (
    <S.mainArea>
      <S.columArea>
        <S.taskDescription>
          <h2>TO DO</h2>
        </S.taskDescription>
        <S.todoTaskArea>
          <input
            type="text"
            placeholder='Dígite sua nova tarefa'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} />
          <button>Incluir</button>
        </S.todoTaskArea>
      </S.columArea>
      <S.columArea>
        <S.taskDescription>
          <h2>IN PROGRESS</h2>
        </S.taskDescription>
        <S.inProgressArea>
          fazendo
        </S.inProgressArea>
      </S.columArea>
      <S.columArea>
        <S.taskDescription>
          <h2>DONE</h2>
        </S.taskDescription>
        <S.doneArea>
          feito
        </S.doneArea>
      </S.columArea>
    </S.mainArea>



  )
}

export default Container;