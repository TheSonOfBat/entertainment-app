import Card from "../components/Card";
export default function Bookmark(props){
    return(
        <main>
            {props.data.filter((item)=>{return item.isBookmarked&&item.category === "Movie"}).length===0&&props.data.filter((item)=>{return item.isBookmarked&&item.category === "TV Series"}).length===0&&<h1>No Bookmarked Movies or TV Series Available</h1>}
            {props.data.filter((item)=>{return item.isBookmarked&&item.category === "Movie"}).length>0&&<h1>Bookmarked Movies</h1>}
            <section>
                {(props.data.filter((item)=>{return item.isBookmarked&&item.category === "Movie"}).map((item, index)=>{return <Card {...item} key={item.title+"Bookmarked"} toggle={()=>{props.toggleBookmark(item.title)}} animationDelay={0+(0.075*(index))}/>}))}
            </section>
            {props.data.filter((item)=>{return item.isBookmarked&&item.category === "TV Series"}).length>0&&<h1>Bookmarked TV Series</h1>}
            <section>
                {(props.data.filter((item)=>{return item.isBookmarked&&item.category === "TV Series"}).map((item, index)=>{return <Card {...item} key={item.title+"Bookmarked"} toggle={()=>{props.toggleBookmark(item.title)}} animationDelay={0+(0.075*(index))}/>}))}
            </section>
        </main>
    )
}