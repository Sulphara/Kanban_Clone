import React, { useEffect, useState } from 'react';
import * as S from './style';
import NewTaskArea from '../todoTaskArea/index'
import axios from 'axios'

import { taskProps } from '../helpers/task'

const Container = () => {

  const [newTask, setNewTask] = useState('')

  const [todoTasks, setTodoTasks] = useState<taskProps[]>([])
  const [inProgress, setInProgress] = useState<taskProps[]>([])

  const [jsonTeste, setJsonTeste] = useState<taskProps[]>([])

  const handleNewTask = () => {
    setTodoTasks(prev => [...prev, { id: todoTasks.length + 1, title: newTask }])
  }

  const handleInProgress = (id: number) => {
    const task = todoTasks.find(item => item.id === id)
    setTodoTasks(prev => prev.filter(item => item !== task))
    console.log({ task })
    if (task) {
      setTodoTasks(prev => prev.filter(item => item !== task))
      setInProgress(prev => [...prev, task])
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [1])

  const fetchTodos = async () => {
    let res = await axios.get('http://localhost:3000/columns')
    let json = (res.data)
    setJsonTeste(json)

  }

  return (
    <S.mainArea>
      <S.todoTaskArea>
        <input
          type="text"
          placeholder='Dígite sua nova tarefa'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleNewTask}> + </button>
      </S.todoTaskArea>
      {jsonTeste.map((item, id) => (
        <S.columArea key={id}>
          <S.taskDescription>
            {item.title}
          </S.taskDescription>
          {todoTasks.length > 0 && todoTasks.map((item, id) => (
            <NewTaskArea key={id} item={item} handleNext={handleInProgress} />
          ))}
        </S.columArea>
      ))}


    </S.mainArea>



  )
}

export default Container;