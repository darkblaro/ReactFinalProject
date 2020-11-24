const url = './scripts/process.php';

function validateForm(){
    if(!document.getElementById("galName").value || !document.getElementById('galName').value.trim())
        alert("You must give name to your gallery");
    if(!document.getElementById("author").value)
        alert("You must give author's name");
    if(document.querySelector('[type=file]').files.length===0)
        alert('You must upload at least one file');
}
export default function preview(){
    const files=document.querySelector('input[type=file]').files;
    function rap(file){
        let fr=new FileReader();
        fr.addEventListener('load',function(){
        let image=new Image();
        image.src=this.result;
        document.getElementById('gallery').appendChild(image);
    },false);
        fr.readAsDataURL(file);
    }
    if(files){
        [].forEach.call(files,rap)
    }
}

let form=document.getElementById("uploader");
form.addEventListener('submit', e => {
    e.preventDefault();

    validateForm();
    
    const files = document.querySelector('[type=file]').files;
    const galName=document.getElementById("galName").value;
    const author=document.getElementById('author').value;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        formData.append('files[]', file);
    }
    formData.append('galName',galName);
    formData.append('author',author);
    fetch(url, {
        method: 'POST',
        body: formData
    }).then(response => {
        return response.text();
    }).then(data => {
        console.log(data);
    });
    setTimeout(function(){
        document.getElementById('gallery').innerHTML="";
        form.reset();
    },1000);
});