import React,{useEffect, useReducer} from 'react';
import LeftArrow from './images/left.svg'
import RightArrow from './images/right.svg'
import './styles/showroom.css'
import {useParams} from 'react-router-dom'
import Header from './Header';

const initState={photos:[],activePhoto:0};
const reducer=(state,action)=>{
    switch(action.type){
        case "left": if(state.activePhoto===0) return {
            photos:[...state.photos],
            activePhoto:state.photos.length-1
            }
            else{
                return{
                    photos:[...state.photos],
                    activePhoto:state.activePhoto-1
                }
            }
        case "right":if(state.photos.length) return {
                photos:[...state.photos],
                activePhoto:state.activePhoto+1}
                else{
                    return{
                        photos:[...state.photos],
                        activePhoto:0
                    }
                }
        case "load":
            return {photos:[...action.payload],activePhoto:0}
        default:
            throw new Error();
    }
}

export default function ShowRoom(props){
    const {galId}=useParams();
    const [state,dispatch]=useReducer(reducer,initState);
    
    useEffect(()=>{
        let getPhotos=async()=>{
            fetch('https://my-json-server.typicode.com/darkblaro/jsonserver/galleries/'+galId)
            .then(res => res.json())
            .then((out) => {
                dispatch({type:"load",payload:out.photos})
            }).catch(err => console.error(err));
        }
        getPhotos();
    },[])
    return(
        <>
            <Header />
            <main className="srmain">
                <div className="show-container">
                    <div className="scroll" id="left">
                        <img src={LeftArrow} alt="left" onClick={()=>dispatch({type:"left"})} />
                    </div>
                    <section>
                        {state.photos[state.activePhoto] &&

                            <img src={state.photos[state.activePhoto].imgUrl} alt="" id="slider"/>
                        }
                    </section>
                    <div className="scroll" id="right">
                        <img src={RightArrow} alt="right" onClick={()=>dispatch({type:"right"})}/>
                    </div>
                </div>
            </main>
        </>
    );
}