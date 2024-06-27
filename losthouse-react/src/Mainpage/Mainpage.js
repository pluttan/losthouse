import './Mainpage.css';
import Paralax from './Paralax/Paralax';
import CanvasWrapper from './Model/Model';

function Mainpage() {
  return (
    <div className="Mainpage">
        <Paralax /> 
        <CanvasWrapper />
        <div style={{height: '1000vh'}}/>
    </div>
  );
}

export default Mainpage;
