import './App.css';
import Searchbar from './components/Searchbar';
import Nav from './components/Nav';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home';
import Data from "./data.json";
import Bookmark from './routes/Bookmark';
import Card from './components/Card';
import TV from './routes/TV';
import Movie from './routes/Movie';
import ErrorBoundary from './routes/ErrorBoundary';
import Alert from './components/Alert';

export default function App(){
  let intialData = (localStorage.getItem("savedData"))?JSON.parse(localStorage.getItem("savedData")):Data;
  let [data, updateData] = React.useState(intialData);
  let [alertOn, updateAlertOn] = React.useState(false);
  const router = createBrowserRouter([
      {
        path: "/",
        element: <Home data={data} toggleBookmark={(target)=>toggleBookmark(target)} alertFunction={()=>{scopeAlert(true)}}/>,
      },
      {
        path: "/movie",
        element: <Movie data={data} toggleBookmark={(target)=>toggleBookmark(target)} alertFunction={()=>{scopeAlert(true)}}/>,
      },
      {
        path: "/tv",
        element: <TV data={data} toggleBookmark={(target)=>toggleBookmark(target)} alertFunction={()=>{scopeAlert(true)}}/>,
      },
      {
        path: "/bookmark",
        element: <Bookmark data={data} toggleBookmark={(target)=>toggleBookmark(target)} alertFunction={()=>{scopeAlert(true)}}/>,
      },
      {
        path: "*",
        element: <ErrorBoundary/>,
      },
    ]);
    const [searchValue, updateSearchValue] = React.useState("");
    
    function handleChange(e){
      updateSearchValue(e.target.value)
    }
    function toggleBookmark(word){
      updateData((prev)=>{
          let newArr = JSON.parse(JSON.stringify(prev));//Shallow Copy === Spread Operator VS Stringify into Parse === Deep Copy (What we need)
          newArr[newArr.findIndex(item=> item.title === word)].isBookmarked = !newArr[newArr.findIndex(item=> item.title === word)].isBookmarked;
          return [...newArr];
      }) 
    }
    function scopeAlert(input){
      console.log(input);
      updateAlertOn(input);
    }

    React.useEffect(()=>{
      localStorage.setItem("savedData", JSON.stringify(data));
    },[data]);

    return(
    <>
        {alertOn&&<Alert isOn={alertOn} toggle={()=>{scopeAlert(false)}}></Alert>}
        {["/","/movie","/tv", "/bookmark"].includes(router.state.location.pathname) &&<div id="LHS">
            <Nav alertFunction={()=>{scopeAlert(true)}}/>
        </div>}
        <div id="RHS">
            {["/","/movie","/tv", "/bookmark"].includes(router.state.location.pathname) &&<Searchbar value={searchValue} onchange={(e)=>{handleChange(e)}}/>}
            {
              searchValue===""&&
            [
            <RouterProvider router={router} key={"router"}/>
            ]
            
          }
          {
            searchValue!==""&&
            <>
            <h1>Search Results</h1>
            <section>
              {data.filter((item)=>{
                return item.title.toLowerCase().startsWith(searchValue.toLowerCase()) && (window.location.pathname==="/movie"?item.category==="Movie":window.location.pathname==="/tv"?item.category==="TV Series":window.location.pathname==="/bookmark"?item.isBookmarked:true);
              }).map((item, index)=>{
                console.log(item.title+"Search");
                return <Card {...item} key={item.title+"Search"} toggle={()=>{toggleBookmark(item.title)}} animationDelay={0+(0.075*(index))}/>
              })}
            </section>
            </>
          }
        </div>
    </>
    )
}