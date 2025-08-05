export default function Navigation({home, anime, it}) {
    return (
        <nav>
            <a href="#home">{home}</a>
            <a href="#anime">{anime}</a>
            <a href="#it">{it}</a>
        </nav>
    );
};