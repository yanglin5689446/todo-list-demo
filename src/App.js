import React, { useState } from 'react'

import Search from './components/Search'
import TaskActions from './components/TaskActions'
import Todo from './components/Todo'
import TaskEditModal from './components/TaskEditModal'

const App = () => {
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [tasks, setTasks] = useState({})

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary  navbar-expand-lg">
        <span className="navbar-brand">Yang's todo-list</span>
      </nav>
      <div className="container py-3">
        <Search value={search} onChange={e => setSearch(e.target.value)} />
        <TaskActions onTaskAdding={() => setModalOpen(true)}/>
        <div className="todo-list py-3">
          { Object.entries(tasks).map(([id, task]) => <Todo {...task} key={id} />) }
        </div>
      </div>
      <TaskEditModal 
        task={{}}
        open={modalOpen}
        setOpen={setModalOpen}
      />
    </div>
  )
}

export default App;
