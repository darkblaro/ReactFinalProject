import React,{useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import './styles/index.css'
import Header from './Header'
import Footer from './Footer'

function Home(){
    const [galleries, setGalleries]=useState([]);
    useEffect(()=>{
        const getGalleries=async()=>{
            fetch('https://my-json-server.typicode.com/darkblaro/jsonserver/galleries')
            .then(res => res.json())
            .then((out) => {
                setGalleries(out)
            }).catch(err => console.error(err));
        }
        getGalleries();
    },[])
    const history=useHistory();

    return(
        <>
        <Header />
        <div className='content'>
            <main>
                <div id="getElements">
                    {galleries.map(gallery=><div key={gallery.id} className="gallery" onClick={()=>history.push(`/ShowRoom/${gallery.id}`)}>
                                                <span>{gallery.galleryname}</span>
                                                <div id="galData">
                                                    <p>{gallery.id}</p>
                                                    <p>Author: {gallery.auth}</p>
                                                    <p>Files: {gallery.nfiles}</p></div></div>)}
                </div>
            </main>
            <Footer/>
        </div>
        </>
    );
}
export default Home;