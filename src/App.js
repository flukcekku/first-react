import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import ImgItem from './components/ImgItem';
import ImgPost from './components/ImgPost';
import Imgs from './data/Imgs';
import AppSearch from './components/AppSearch';



function App() {
  const textInput = <input type="text" />
  const okButton = (<button>Click me Bro!</button>);

  const [selectedImg, setSelectedImg] = useState(null)
  const [searchText, setSearchText] = useState('')

  function onImgOpenClick(theImg) {
    setSelectedImg(theImg);
  }

  function onImgCloseClick() {
    setSelectedImg(null)
  }

  // const fillteredImg = Imgs.filter((Imgs)=>{
  //   return Imgs.title.includes(searchText)
  // })
  const ImgElement = Imgs.filter((Imgs)=>{
    return Imgs.title.includes(searchText)
  }).map((Imgg, index) => {
    return <ImgItem key={index} myImg={Imgg} onImgClick={onImgOpenClick} />
  });


  let imgPost = null;

  if (!!selectedImg) {
    imgPost = <ImgPost myImg={selectedImg} onBgClick={onImgCloseClick}/>
  }

  return (
    <div className="app">
      <AppHeader />
      <section className='app-section'>
        <div className='app-container'>
          <AppSearch value={searchText} onValueChange={setSearchText}/>
          <div className='app-grid'>
            {ImgElement}
          </div>
        </div>
      </section>
      {imgPost}
    </div>
  );
}

export default App;
