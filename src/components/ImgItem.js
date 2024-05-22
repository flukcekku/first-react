import './ImgItem.css'

function ImgItem(props) {
    const { myImg, onImgClick } = props;
    if (!myImg) {
        return null; // or return some fallback UI
    }

    if (!onImgClick) {
        return null;
    }

    return (
    <div className='img-item'>
          <img src={myImg.thumnailsImg} onClick={()=>{onImgClick(myImg)}} />
          <h4>{myImg.title}</h4>
        </div>
    )
}

export default ImgItem;