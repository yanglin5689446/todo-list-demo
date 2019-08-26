
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const TaskEditModal = ({ task, open, setOpen, onUpdate, onSave }) => (
  <div 
    className={classNames("modal", open && "d-block")}
    tabIndex="-1" 
    role="dialog" 
    onClick={() => setOpen(false)}
  >
    <div className="modal-dialog" role="document" onClick={e => e.stopPropagation()}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Create a task
          </h5>
          <button type="button" className="close" aria-label="Close" onClick={() => setOpen(false)}>
            <i className="fa fa-times" />
          </button>
        </div>
        <div className="modal-body">
          <label >Title</label>
          <input type="text" className="form-control" value={task.title} onChange={onUpdate('title')} />
          <label >Description</label>
          <textarea 
            className="form-control" 
            cols="10" rows="5" 
            value={task.description} 
            onChange={onUpdate('description')} 
          />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={() => setOpen(false)}>
            Close
          </button>
          <button type="button" className="btn btn-primary" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
)

TaskEditModal.propTypes = {
  task: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onUpdate: PropTypes.func,
  onSave: PropTypes.func,
}

TaskEditModal.defaultProps = {
  onUpdate: () => null,
  onSave: () => null,
}

export default TaskEditModal