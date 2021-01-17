import React from 'react';
import './ActionBox.scss';

export interface ActionBoxProps {
  content: string;
  leftBtnName: string;
  rightBtnName: string;
  leftAction: () => void;
  rightAction: () => void;
}
const ActionBox: React.FC<ActionBoxProps> = ({
  content,
  leftBtnName,
  rightBtnName,
  leftAction,
  rightAction,
}: ActionBoxProps) => {
  return (
    <div className="action-box">
      <div className="content">{content}</div>
      <div className="action">
        <button className="btn left-action" onClick={() => leftAction()}>
          {leftBtnName}
        </button>
        <button className="btn right-action" onClick={() => rightAction()}>
          {rightBtnName}
        </button>
      </div>
    </div>
  );
};

export default ActionBox;
