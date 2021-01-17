import React, { useState } from 'react';
import { TodoTask } from '../../containers/HomePage/HomePage';
import './TodoForm.scss';
import CloseIcon from '../../assets/cancel.svg';
import { formatDate } from '../../helpers';
export type Priority = 'Low' | 'Normal' | 'High';
export type ActionForm = 'Add' | 'Update';
export interface TodoFormProps {
  todoTask?: TodoTask;
  action: ActionForm;
  onHide: () => void;
  onSubmit: (task: TodoTask) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  todoTask,
  onHide,
  action = 'Add',
  onSubmit,
}: TodoFormProps) => {
  const emptyTask = {
    id: null,
    description: '',
    title: '',
    dueDate: formatDate(new Date()),
    priority: 'Normal',
  };
  const [task, setTask] = useState<any>(todoTask?.title ? todoTask : emptyTask);
  const [error, setError] = useState('');

  const hideModal = () => {
    onHide();
    setTask(emptyTask);
  };

  return (
    <div className="todo-form">
      {action === 'Add' && (
        <>
          <div className="close-icon">
            <img src={CloseIcon} onClick={() => hideModal()} alt="close-icon" />
          </div>
          <h2 className="form-title"> New Task</h2>
        </>
      )}
      <div className="form-content">
        <input
          className="form-input"
          placeholder="Add new task..."
          value={task?.title}
          onChange={(event) => {
            setTask({ ...task, title: event.target.value });
            setError('');
          }}
          maxLength={255}
        />
        <textarea
          className="form-description"
          value={task?.description}
          onChange={(event) =>
            setTask({ ...task, description: event.target.value })
          }
          maxLength={1000}
        />
        <div className="form-content-footer">
          <div className="due-date">
            <div className="due-date-label">Due Date</div>
            <input
              className="select-date"
              type="date"
              value={
                task?.dueDate
                  ? formatDate(new Date(task?.dueDate))
                  : formatDate(new Date())
              }
              min={formatDate(new Date())}
              onChange={(event) =>
                setTask({ ...task, dueDate: event.target.value })
              }
            />
          </div>
          <div className="priority">
            <div className="priority-label">Priority</div>
            <select
              className="select-priority"
              onChange={(event) =>
                setTask({
                  ...task,
                  priority: event.target.value as Priority,
                })
              }
              value={task?.priority}
            >
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <div className="error">{error}</div>
      </div>
      <button
        className="btn-submit"
        onClick={() => {
          if (task.title) {
            action === 'Add' && hideModal();
            onSubmit(task);
          } else {
            setError('You must enter task title!');
          }
        }}
      >
        {action}
      </button>
    </div>
  );
};

export default TodoForm;
