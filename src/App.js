import React, { useState, useCallback } from 'react'

import Search from './components/Search'
import TaskActions from './components/TaskActions'
import Todo from './components/Todo'
import TaskEditModal from './components/TaskEditModal'

const NEW_TASK = { title: '', description: '', status: 0 }

const App = () => {
  const [filter, setFilter] = useState(null)
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [tasks, setTasks] = useState({})
  const [editing, setEditing] = useState(null)

  const searchRegex = new RegExp(search.replace(/\\/g, ''))
  const filtedTasksEntries = Object
    .entries(tasks)
    .filter(([id]) => ~~id !== 0)
    // apply keyword search
    .filter(([, { title, description}]) => searchRegex.test(title) || searchRegex.test(description))
    // apply filter
    .filter(([, { status }]) => !filter || ~~status === ~~filter)

  const editTask = useCallback(id => {
    setEditing(id)
    const editingTask = id ? { ...tasks[id] } : NEW_TASK
    setTasks({ ...tasks, 0: editingTask  })
    setModalOpen(true)
  }, [tasks])
  
  const updateTask = useCallback((field) => e => {
    setTasks({ 
      ...tasks, 
      0: {
        ...tasks[0],
        [field]: e.target.value,
      }
    })
  }, [tasks])

  const saveTask = useCallback(() => {
    if(editing){
      setTasks({ ...tasks, [editing]: { ...tasks[0] } })
    }
    else {
      const idMax = Object.keys(tasks)
        .map(n => parseInt(n))
        .reduce((a, b) => Math.max(a, b), 0)
      setTasks({ ...tasks, [idMax + 1]: { ...tasks[0] } })
    }
    setModalOpen(false)
  }, [editing, tasks])

  const deleteTask = useCallback((id) => {
    const { [id]: discard, ...newTasks } = tasks
    setTasks(newTasks)
  }, [tasks])

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary  navbar-expand-lg">
        <span className="navbar-brand">Yang's todo-list</span>
      </nav>
      <div className="container py-3">
        <Search value={search} onChange={e => setSearch(e.target.value)} />

        <TaskActions 
          onTaskAdding={() => editTask(0)}
          onFilterChange={setFilter}
          filter={filter}
        />

        <div className="todo-list py-3">
          { !filtedTasksEntries.length && (
              <div className='text-center'>
                <span role='img' aria-label='hands'>🙌</span>
                 Hooray! Todo List is empty! 
                <span role='img' aria-label='hands'>🙌</span>
              </div>
            ) 
          }
          { 
            filtedTasksEntries
              .map(([id, task]) => (
                <Todo 
                  key={id}
                  onEdit={() => editTask(id)}
                  onDelete={() => deleteTask(id)}
                  {...task} 
                />
              ))
          }
        </div>
      </div>
      <TaskEditModal 
        task={editing !== null ? tasks[0] : {}}
        open={modalOpen}
        setOpen={setModalOpen}
        onUpdate={updateTask}
        onSave={saveTask}
      />
    </div>
  )
}

export default App;
