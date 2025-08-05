export default function Contact({btnName, handleBtnClick}){
    return(
        <div className="contact">
            <button onClick={handleBtnClick}>{btnName}</button>
        </div>
    )
}