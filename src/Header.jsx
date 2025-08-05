import Navigation from "./Navigation.jsx";

let handleH1 = () => {
    window.location.reload();
}

export default function () {
    return (
        <div className="header-container">
            <div className="home-cover">
                
            </div>
            <h1 onClick={handleH1}>Blog Website</h1>
            <div className="nav-links">
                <Navigation home={"Home"} />
                <Navigation anime={"Anime"} />
                <Navigation it={"IT Related Stuff"} />
            </div>
        </div>
    );
};