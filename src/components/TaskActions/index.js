
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TaskActions = ({ onTaskAdding }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  return (
    <div className="task-actions d-flex justify-content-between align-items-center">
      <div className="add-task">
        <button className="btn btn-primary" onClick={onTaskAdding}>
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
  )
}

TaskActions.propTypes = {
  onTaskAdding: PropTypes.func.isRequired
}

TaskActions.defaultProps = {
  onTaskAdding: () => null
}

export default TaskActions