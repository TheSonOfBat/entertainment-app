import tvIcon from "../assets/icon-category-tv.svg";
import movieIcon from "../assets/icon-category-movie.svg";
import bookmarkEmptyIcon from "../assets/icon-bookmark-empty.svg";
import bookmarkFullIcon from "../assets/icon-bookmark-full.svg";
import playButton from "../assets/icon-play.svg"

export default function Card(props){
    let image = require(`../assets/thumbnails/${(props.title).replace(/\s+/g, '-').replace("II", '2').replace("’","").replace(":","").toLowerCase()}/regular/large.jpg`);
    return(
        <div className={`card ${props.trendingDisplay?"trending":""}`} style={props.trendingDisplay?{backgroundImage: `url(${image})`, animation: "none", opacity: "1"}:{animationDelay: `${props.animationDelay}s`, animationFillMode: "forwards"}}>
            {!props.trendingDisplay&&<div className="card--image" style={{backgroundImage: `url(${image})`}}>
            <div className="card--play" onClick={props.alertFunction}>
                <div className="card--playBackground"></div>
                <img src={playButton} className="card--playbutton"></img>
                <div className="card--playText">Play</div>
            </div>
            </div>}
            <div className="card--details">
                <div className="card--specs">
                    <p>{props.year}</p><span></span>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={props.category==="Movie"?movieIcon:tvIcon} style={{marginRight: "5px"}}></img>
                        <p>{props.category}</p>
                    </div><span></span>
                    <p>{props.rating}</p>
                </div>
                <h2>{props.title}</h2>
            </div>
            <div className="card--bookmarkContainer" onClick={props.toggle}>
                <img src={props.isBookmarked?bookmarkFullIcon:bookmarkEmptyIcon} className="card--bookmark"></img>
            </div>
            {props.trendingDisplay&&
                <div className="card--play" onClick={props.alertFunction}>
                    <div className="card--playBackground"></div>
                    <img src={playButton} className="card--playbutton"></img>
                    <div className="card--playText">Play</div>
                </div>
            }
            
        </div>
    )
}
