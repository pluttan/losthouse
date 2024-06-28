import "./text&img.scss";

const Text1 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="text text1 allcard" style={{ transform: `translateY(${-offsetY}px)` }}>
        <h2><span>Lost House</span> - проект для аренды домиков в лесу. Здесь вы можете найти идеальное место для отдыха по приятным ценам.</h2>
    </div>
  );
};

const Text2 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="text text2 allcard" style={{ transform: `translateY(${-offsetY}px)` }}>
        <h2>Мы работаем с <span>2024</span> года и сдаем более <span>1000</span> домов ежедневно.</h2>
    </div>
  );
};

const Text3 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="text text3 allcard" style={{ transform: `translateY(${-offsetY}px)` }}>
        <h2>У нас есть все для <span>глемпинга</span></h2>
    </div>
  );
};

const Text4 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="text text4 allcard" style={{ transform: `translateY(${-offsetY}px)` }}>
        <h2>У нас есть все для <span>глемпинга</span></h2>
    </div>
  );
};


const Text5 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="text text5 allcard" style={{ transform: `translateY(${-offsetY}px)` }}>
        <h2>У нас есть все для <span>глемпинга</span></h2>
    </div>
  );
};


const Text6 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="text text6 allcard" style={{ transform: `translateY(${-offsetY}px)` }}>
        <h2>У нас есть все для <span>глемпинга</span></h2>
    </div>
  );
};


const Text7 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="text text7 allcard" style={{ transform: `translateY(${-offsetY}px)` }}>
        <h2>У нас есть все для <span>глемпинга</span></h2>
    </div>
  );
};


const Text8 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="text text8 allcard" style={{ transform: `translateY(${-offsetY}px)` }}>
        <h2>У нас есть все для <span>глемпинга</span></h2>
    </div>
  );
};


const Text9 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="text text9 allcard" style={{ transform: `translateY(${-offsetY}px)` }}>
        <h2>Посмотрите пример обычного дома на 3 человекa в 3D</h2>
    </div>
  );
};

const TextModel = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="text textModel allcard" style={{ transform: `translateY(${-offsetY}px)` }}>
        <h2>Пример обычного дома на 3 человек</h2>
    </div>
  );
};

const Img1 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="img img1 allcard">
    </div>
  );
};
const Img2 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="img img2 allcard">
    </div>
  );
};
const Img3 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="img img3 allcard">
    </div>
  );
};
const Img4 = ({offsetY}) => {
  offsetY = offsetY/6-450;
  return (
    <div className="img img4 allcard">
    </div>
  );
};
// <div className="text1 allcard" style={{ transform: `translateY(${offsetY > 230 ? 230 : offsetY}px)` }}>
//         <h2><span>Глэмпинг</span> — это современная разновидность кемпинга с деревянными домиками и всеми условиями для комфортного проживания. </h2>
//     </div>
//
export {Text1, Text2, Text3, Text4, Text5, Text6, Text7, Text8, Text9, TextModel, Img1, Img2, Img3, Img4};
