import Card from "../components/Card";
export default function Movie(props){
    return(
        <main>
            <h1>Movies</h1>
            <section>
                {(props.data.filter((item)=>{return item.category === "Movie"}).map((item, index)=>{return <Card {...item} key={item.title+"Movie"} toggle={()=>{props.toggleBookmark(item.title)}} animationDelay={0+(0.075*(index))}/>}))}
            </section>
        </main>
    )
}