import Card from "../components/Card";
export default function TV(props){
    return(
        <main>
            <h1>TV Series</h1>
            <section>
                {(props.data.filter((item)=>{return item.category === "TV Series"}).map((item, index)=>{return <Card {...item} key={item.title+"TV"} toggle={()=>{props.toggleBookmark(item.title)}} animationDelay={0+(0.075*(index))}/>}))}
            </section>
        </main>
    )
}