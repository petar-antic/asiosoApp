import React from 'react';
import useWindowResize from '../../hooks/useWindowSize';

const NewsModal = ({ hide }) => {
  const { width } = useWindowResize();

  return (
    <div
      className="modal show fade"
      role="dialog"
      style={{
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
      }}
    >
      <div
        className="modal-dialog modal-fullscreen-md-down p-3"
        role="document"
        style={{ paddingInline: width < 1024 ? '10px' : '100px' }}
      >
        <div className="modal-content bg-transparent">
          <i
            className="bi bi-x-lg text-white text-end cursor-pointer mb-1 border-bottom pb-2"
            onClick={hide}
            style={{ cursor: 'pointer' }}
          />
          <div className="modal-body">
            <div>
              <h6 className="text-white">How a progressive Web app works</h6>
              <img src="/" alt="newsImg" />
              <div>
                <span className="text-white">JAN 55 2020</span>
                <span className="text-white">MY APP IT WEB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
