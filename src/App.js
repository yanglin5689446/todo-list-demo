import React from 'react'

const App = () => (
  <div>
    <nav className="navbar navbar-dark bg-primary  navbar-expand-lg">
      <a className="navbar-brand" href="#">Yang's todo-list</a>
    </nav>
    <div className="container py-3">
      <div className="search-and-filter">
        search and filter
      </div>

      <div className="add-task">
        add-task
      </div>

      <div className='todo-list'>
        todo list
      </div>
    </div>
  </div>
)

export default App;
