import React,{useEffect, useState} from 'react';
import './styles/index.css'
import Header from './Header'
import Footer from './Footer'

function createNewElement(name="",author="",nFiles=0, link){

    let doc=document.getElementById('getElements');
    
    let divGallery=document.createElement('div');
    divGallery.setAttribute('class','gallery');

    let span=document.createElement('span');
    span.textContent=name;

    let divData=document.createElement('div');
    divData.setAttribute("id","galData");
    let pAuthor=document.createElement('p');
    pAuthor.textContent="Author: "+author;
    let pFiles=document.createElement('p');
    pFiles.textContent="Files: "+nFiles;
    divData.appendChild(pAuthor);
    divData.appendChild(pFiles);

    divGallery.appendChild(span);
    divGallery.appendChild(divData)
    divGallery.onclick=function(){
        let data="?"+encodeURIComponent("p1="+link);
        window.location.href='showroom.html'+data;
    }

    doc.appendChild(divGallery)
}

//https://jsonplaceholder.typicode.com/photos
function Home(){
    const [galleries, setGalleries]=useState([]);
    useEffect(()=>{
        const getGalleries=async()=>{
            fetch('https://my-json-server.typicode.com/darkblaro/jsonserver/galleries').then(res => res.json())
                .then((out) => {
                    //console.log(out)
                    setGalleries(out)
                }).catch(err => console.error(err));
        }
        getGalleries();
    },[])
    return(
        <>
        <Header />
        <div className='content'>
            <main>
                <div id="getElements">
                    {galleries.map(gallery=><div key={gallery.id}>{createNewElement(gallery.galleryname,gallery.auth,gallery.nfiles,gallery.url)}</div>)}
                </div>
            </main>
            <Footer/>
        </div>
        </>
    );
}
export default Home;