import React from 'react';
import { TodoTask } from '../../containers/HomePage/HomePage';
import TodoForm from '../TodoForm';
import './TodoItem.scss';
export interface TodoItemProps {
  todoTask: TodoTask;
  expandId?: string;
  onHide: () => void;
  onClick: (todoTask: TodoTask) => void;
  onSubmit: (task: TodoTask) => void;
  removeTask: (id: string) => void;
  viewTaskDetail: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoTask,
  expandId,
  onHide,
  onClick,
  onSubmit,
  removeTask,
  viewTaskDetail,
}: TodoItemProps) => {
  return (
    <>
      <div className="todo-item">
        <div className="block-left">
          <input
            onClick={() => onClick(todoTask)}
            type="checkbox"
            name="checkbox-item"
            id={todoTask.id}
            className="checkbox"
          />
          <div className={`task-name ${todoTask.isDone ? 'done-task' : ''}`}>
            {todoTask.title}
          </div>
        </div>
        <div className="block-right">
          <button
            className="btn btn-detail"
            onClick={() => viewTaskDetail(todoTask.id)}
          >
            Detail
          </button>
          <button
            className="btn btn-remove"
            onClick={() => removeTask(todoTask.id)}
          >
            Remove
          </button>
        </div>
      </div>
      {expandId === todoTask.id && (
        <TodoForm
          onHide={onHide}
          todoTask={todoTask}
          onSubmit={onSubmit}
          action="Update"
        />
      )}
    </>
  );
};

export default TodoItem;
