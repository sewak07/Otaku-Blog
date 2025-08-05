import Image from "./Image.jsx";
import Contact from "./Contact.jsx";

export default function Home() {

    const clickObj = {
        "x": "https://x.com/aizewak",
        "insta": "https://www.instagram.com/sewak_07_18/",
        "fb": "https://www.facebook.com/sewak.dhakal.307561",
        "yt": "https://www.youtube.com/channel/UCuN5GSvsZio89TaPR38H3ww",
        "github": "https://github.com/sewak07"
    }



    return (
        <div className="home-container" id="home">
            <div className="home-cover">
            </div>
            <div className="home-text">
                <h1>Otaku Blog</h1>
                <p>We share the latest anime spoilers, fan theories, and IT resources from programming PDFs to tech tips — all in one place for fans and learners alike.</p>
                <div className="social-icons">
                    <Contact btnName={<i className="fa-brands fa-square-x-twitter"></i>}
                        handleBtnClick={() => {
                            window.open(clickObj.x, "_blank");
                        }}
                    />
                    <Contact btnName={<i className="fa-brands fa-square-instagram"></i>}
                        handleBtnClick={() => {
                            window.open(clickObj.insta, "_blank");
                        }}

                    />
                    <Contact btnName={<i className="fa-brands fa-square-facebook"></i>}
                        handleBtnClick={() => {
                            window.open(clickObj.fb, "_blank");
                        }}
                    />
                    <Contact btnName={<i className="fa-brands fa-square-youtube"></i>}
                        handleBtnClick={() => {
                            window.open(clickObj.yt, "_blank");
                        }}
                    />
                    <Contact btnName={<i className="fa-brands fa-square-github"></i>}
                        handleBtnClick={() => {
                            window.open(clickObj.github, "_blank");
                        }}
                    />
                </div>
            </div>
            <div className="home-images">
                <Image image =  {"1234.jpg"} />
            </div>
        </div>
    );
};