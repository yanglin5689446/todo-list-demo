import React, { useState } from 'react'
import classNames from 'classnames'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary  navbar-expand-lg">
        <span className="navbar-brand">Yang's todo-list</span>
      </nav>
      <div className="container py-3">
        <div className="search">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search for a task" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>

        <div className="task-actions d-flex justify-content-between align-items-center">
          <div className="add-task">
            <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
              <i className="fa fa-plus pr-1" /> Add a task
            </button>
          </div>
          <div className="filter-tasks">
            
            <div className="dropdown">
              <button 
                className="btn btn-outline-secondary dropdown-toggle" 
                type="button" 
                onClick={() => setDropdownOpen(true)}
              >
                <i className="fas fa-filter" />
              </button>
              <div className={classNames("dropdown-menu", dropdownOpen && 'show')} >
                <li className="dropdown-item cursor-pointer">incoming</li>
                <li className="dropdown-item cursor-pointer">progressing</li>
                <li className="dropdown-item cursor-pointer">done</li>
                <li className="dropdown-item cursor-pointer">pending</li>
              </div>
            </div>
          </div>
        </div>

        <div className="todo-list py-3">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div>
                Task 1
                <span className="badge badge-warning ml-1">pending</span>
              </div>
              <div className="actions">
                <i className="far fa-edit ml-2" />
                <i className="fa fa-trash ml-2" />
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">Task description aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum qu</p>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={classNames("modal", modalOpen && "d-block")}
        tabIndex="-1" 
        role="dialog" 
        onClick={() => setModalOpen(false)}
      >
        <div className="modal-dialog" role="document" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Create a task
              </h5>
              <button type="button" className="close" aria-label="Close" onClick={() => setModalOpen(false)}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="modal-body">
              <label >Title</label>
              <input type="text" className="form-control" placeholder="" />
              <label >Description</label>
              <textarea className="form-control" cols="10" rows="5"></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
