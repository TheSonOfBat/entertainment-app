import Alert from "../components/Alert";
import Card from "../components/Card";
export default function Home(props){
    return(
        <>
        <main>
            <h1>Trending</h1>
            <section id="trending--section">
                {(props.data.filter((item)=>{return item.isTrending}).map((item, index)=>{return <Card {...item} key={item.title+"Trending"} toggle={()=>{props.toggleBookmark(item.title)}} trendingDisplay={true} animationDelay={0+(0.075*(index))} alertFunction={props.alertFunction}/>}))}
            </section>
            <h1>Recommended For You</h1>
            <section>
                {(props.data.filter((item)=>{return !item.isTrending}).map((item, index)=>{return <Card {...item} key={item.title+"Recommended"} toggle={()=>{props.toggleBookmark(item.title)}} animationDelay={0+(0.075*(index))} alertFunction={props.alertFunction}/>}))}
            </section>
        </main>
        </>
    )
}