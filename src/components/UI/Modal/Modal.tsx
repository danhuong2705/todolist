import React, { useEffect } from 'react';
import { getScrollbarWidth } from '../../../helpers';
import './Modal.scss';
import Overlay from '../Overlay';

export interface ModalProps {
  show: boolean;
  onHide: () => void;
  children: React.ReactNode;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  show,
  onHide,
  children,
}: ModalProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (show) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${getScrollbarWidth()}px`;
      } else {
        document.body.style.overflow = 'unset';
        document.body.style.paddingRight = 'unset';
      }
    }
  }, [show]);
  if (!show) return null;
  return (
    <Overlay show={show} onEscPressed={onHide}>
      <div className="backdrop" onClick={onHide} />
      <div className="modal-content">{children}</div>
    </Overlay>
  );
};

export default Modal;
