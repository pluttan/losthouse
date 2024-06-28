import './Model.scss';

const CanvasWrapper = ({offsetY}) => {
  offsetY = offsetY < 3000? offsetY/8-200: 3000/8-200;
  return (
    <div className="allcard sketchfab-embed-wrapper"  style={{ transform: `translateY(${offsetY/8-200}px)` }}>
      <iframe
        id="iframehouse"
        title="A-Frame Cabin"
        className="house"
        frameBorder="0"
        allowFullScreen
        mozAllowFullScreen="true"
        webkitAllowFullScreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/14c3fb0e1fb24aedb93fb409d819457b/embed?autostart=1&transparent=1"
      />
    </div>
  );
};

export default CanvasWrapper;
