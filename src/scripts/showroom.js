import ShowRoom from "../ShowRoom";

let link=decodeURIComponent(window.location.search);
link=link.substring(4);
let sort=[];

async function getData(){
    let resp=await fetch('scripts/showgallery.php')
    if(resp.ok){
        let res_json=await resp.json();
        //console.log(res_json);
        setTimeout(function(){
            sort=getSelected(link,res_json);
            document.getElementById("slider").src=sort[0];
        },100);
    }
    else{
        console.log("HTTP error: ", resp.status);
    }
}
getData();

let index=1;
export function right(){
	let slider=document.getElementById('slider');
	index++;
	if(index>=sort.length)
		index=0;
	slider.src=sort[index];
}

export function left(){
	let slider=document.getElementById('slider');
	index--;
	if(index<0)
		index=sort.length-1;
	slider.src=sort[index];
}

function getSelected(data="",jsResponse){
    let imgArray=[];
    let authorName=data.split('/')[8];
    let galleryName=data.split('/')[9];
    for(let i=0;i<jsResponse.length;i++){
        if(authorName===jsResponse[i].split('/')[9] && galleryName===jsResponse[i].split('/')[10]){
            let t=jsResponse[i].split('/').splice(8,4);
            t=t.join('/')
            imgArray.push(t)
        }
    }
    //console.log(imgArray);
    return imgArray;
}
export default ShowRoom;