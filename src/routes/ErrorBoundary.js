import navLogo from "../assets/logo.svg"
import navHome from "../assets/icon-nav-home.svg"
import navMovie from "../assets/icon-nav-movies.svg"
import navTv from "../assets/icon-nav-tv-series.svg"
import navBookmark from "../assets/icon-nav-bookmark.svg"

export default function ErrorBoundary(){
    return(
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "80%", gap: "30px", position: "absolute", textAlign: "center", left: "50%", top:"50%", transform: "translate(-50%, -50%)"}}>
            <h1 style={{fontSize: "6rem"}}>Whoops...</h1>
            <p style={{fontSize: "1.5rem", maxWidth: "700px"}}>Looks like you went outside of the scope of the project. Please use one of these links to return back to your desired page.</p>
            <div className="nav--secondaryIcons" style={{flexDirection: "row", width: "200px", height: "min-content", marginTop: "30px"}}>
                <a href="/"><img className={`nav--icon ${window.location.pathname==="/"?"nav--iconHighlighted":""}`} src={navHome}></img></a>
                <a href="/movie"><img className={`nav--icon ${window.location.pathname==="/movie"?"nav--iconHighlighted":""}`} src={navMovie}></img></a>
                <a href="/tv"><img className={`nav--icon ${window.location.pathname==="/tv"?"nav--iconHighlighted":""}`} src={navTv}></img></a>
                <a href="/bookmark"><img className={`nav--icon ${window.location.pathname==="/bookmark"?"nav--iconHighlighted":""}`} src={navBookmark}></img></a>
            </div>
        </div>
    )
}