import React, { useEffect, useState } from 'react';
import * as S from './style';
import NewTaskArea from '../todoTaskArea/index'

import { taskProps } from '../helpers/task'

const Container = () => {

  const [newTask, setNewTask] = useState('')
  
  const [todoTasks, setTodoTasks] = useState<taskProps[]>([])
  const [inProgress, setInProgress] = useState<taskProps[]>([])

  const handleNewTask = () => {
    setTodoTasks(prev => [...prev, { id: todoTasks.length + 1, title: newTask }])
  }

  const handleInProgress = (id: number) => {
    const task = todoTasks.find(item => item.id === id)
    console.log({ task })
    if (task) {
      setTodoTasks(prev => prev.filter(item => item !== task))
      setInProgress(prev => [...prev, task])
    }

  }

  console.log({inProgress})

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
          <button onClick={handleNewTask} disabled={!!!newTask}> + </button>
        </S.todoTaskArea>
        {todoTasks.length > 0 && todoTasks.map((item, id) => (
          <NewTaskArea key={id} item={item} handleNext={handleInProgress} />
        ))}
      </S.columArea>
      <S.columArea>
        <S.taskDescription>
          <h2>IN PROGRESS</h2>
        </S.taskDescription>
        {inProgress.length > 0 && todoTasks.map((item, id) => (
          <NewTaskArea key={id} item={item}/>
        ))}
      </S.columArea>
      {/* <S.columArea>
        <S.taskDescription>
          <h2>IN PROGRESS</h2>
        </S.taskDescription>
        <S.inProgressArea>
          {inProgress.length > 0 && tasks.map((item, id) => (
            <NewTaskArea key={id} item={item} handleNext={handleInProgress} />
          ))}
        </S.inProgressArea>
      </S.columArea> */}
      <S.columArea>
        <S.taskDescription>
          <h2>DONE</h2>
        </S.taskDescription>
        <S.doneArea>

        </S.doneArea>
      </S.columArea>
    </S.mainArea>



  )
}

export default Container;