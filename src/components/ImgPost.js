import './ImgPost.css'

function ImgPost(props) {
    const { myImg, onBgClick } = props
    if (!myImg) {
        return null; // or return some fallback UI
    }

    if (!onBgClick) {
        return null; // or return some fallback UI
    }

    return (
        <div className="img-post">
            <div className="img-post-bg" onClick={onBgClick} />  {/* ใส่ชื่อฟังก์ชัน onBgClick ได้ตรง เพราะไม่มีการส่ง Parameter ไป */}
            <div className="img-post-content">
                <img src={myImg.fullImg} />
                <h4>{myImg.title}</h4>
            </div>
        </div>
    )
}

export default ImgPost;