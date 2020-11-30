import React,{useState} from 'react';
import './styles/index.css'
import './styles/NewGallery.css'
import Header from './Header'

function NewGallery(){
    const [galleryName, setGalleryName]=useState('');
    const [authorName, setAuthorName]=useState('');
    const [files, setFiles]=useState([]);

    const handleGalleryNameChanged=(event)=>{
        setGalleryName(event.target.value);
    }
    const handleAuthorNameChanged=(event)=>{
        setAuthorName(event.target.value);
    }
    const handleFileUpload=async(event)=>{
        const selectedFiles = [];
        for(let i=0; i<event.target.files.length; i++){
            const newfile={name:event.target.files[i].name}
            const fileContent=await convertBase64(event.target.files[i]);            
            selectedFiles.push({...newfile, content:fileContent});            
        }
        setFiles([...files,...selectedFiles])
    }
    const convertBase64 = (file) => {

        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            
            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }

    return(
        <div className='main-wrap'>
            <Header />
            <main className='ngmain'>
                <div className='content'>
                    <h1>Create New Gallery</h1> 
                    <div className="wrapper">
                        <form method="post" encType="multipart/form-data" id="uploader">
                            <div className="galName">
                                <label htmlFor="galName">Give name to your gallery: </label>
                                <input type="text" id="galName" name="galName" value={galleryName} onChange={handleGalleryNameChanged}/>
                            </div>
                            <div className="author">
                                <label htmlFor="author">Author: </label>
                                <input type="text" id="author" value={authorName} onChange={handleAuthorNameChanged}/>
                            </div>
                            <div className="files">
                                <label htmlFor="file">Select Files</label>
                                <input type="file" name="files[]"  multiple accept="image/*" id="file" onChange={handleFileUpload}/>
                                <div id="gallery">{
                                    files.map(file=>(<img src={file.content} key={file.name} alt="..."></img>))
                                }</div>
                                <label htmlFor="upld">Upload Files</label>
                                <input type="button" name="submit" id="upld" onClick={addFiles}/>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

function addFiles(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let form=document.getElementById("uploader");
    
    const files = document.querySelector('[type=file]').files;
    const galName=document.getElementById("galName").value;
    const author=document.getElementById('author').value;
    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            galleryName:galName,
            authorName:author,
            filesArray:files,
            nfiles:files.length
        }),
        headers:{
            'Content-type':'appclication/json; charset=UTF-8',
        },
    }).then((response) => response.json()).then((data) => {
        console.log(data);})
    document.getElementById('gallery').innerHTML="";
    form.reset();
}
export default NewGallery