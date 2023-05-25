import React from 'react';
import useWindowResize from '../../hooks/useWindowSize';

import video from '../../assets/videos/eichenlaub.mp4';

const VideoModal = ({ hide }) => {
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
        className="modal-dialog modal-dialog-centered modal-xl"
        role="document"
        style={{ paddingInline: width < 1024 ? '10px' : '100px' }}
      >
        <div className="modal-content bg-transparent">
          <i
            className="bi bi-x-lg text-white text-end cursor-pointer mb-1"
            onClick={hide}
            style={{ cursor: 'pointer' }}
          />
          <video controls autoPlay="autoplay">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
