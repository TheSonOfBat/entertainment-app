export default function Alert(props){
    return(
        <div className="alert">
            <p>This functionality sits outside the design specfications and the projects scope.</p>
            <button onClick={props.toggle}>OK</button>
        </div>
    )
}

