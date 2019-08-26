
import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ title, status, description, onDelete, onEdit }) => (
  <div className="todo-list py-3">
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <div>
          { title }
          <span className={`badge badge-${status.badgeType} ml-1`}>
            { status.label }
          </span>
        </div>
        <div className="actions">
          <i className="far fa-edit ml-2" onClick={onEdit}/>
          <i className="fa fa-trash ml-2" onClick={onDelete}/>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">
          { description }
        </p>
      </div>
    </div>
  </div>
)

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
}

Todo.defaultProps = {
  onDelete: () => null,
  onEdit: () => null,
}

export default Todo