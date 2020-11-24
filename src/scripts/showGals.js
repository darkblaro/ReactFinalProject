//let temp=[];
// fetch('scripts/showgallery.php')
//     .then(res => res.json())
//     .then((out) => {
//         // temp.push(out.toString());
//         setTimeout(function(){
//             temp=out;
//         },1000);
//     }).catch(err => console.error(err));

export async function getData(){
    let resp=await fetch('scripts/showgallery.php')
    if(resp.ok){
        let res_json=await resp.json();
        //console.log(res_json);
        setTimeout(function(){
            const jsresArray=resArray(res_json)
            for(let i=0;i<jsresArray.length;i++){
                let auth=jsresArray[i][0]; //auth[9]
                let gName=jsresArray[i][1];
                let nFiles=jsresArray[i][2];
                let link=jsresArray[i][3];
                createNewElement(gName,auth,nFiles,link)
            }
        },1000);
    }
    else{
        console.log("HTTP error: ", resp.status);
    }
}
getData();


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


function resArray(jsonResult){
    let resArray=[], data=[];
    let name, gName, count=0,k,link;
    for(let i=0;i<jsonResult.length;i++){
        name=jsonResult[i].split('/')[9];
        gName=jsonResult[i].split('/')[10];
        link=jsonResult[i].split('/');
        link.pop();
        link.shift();
        link=link.join('/');
        for(k=i;k<jsonResult.length;k++){
            if(name===jsonResult[k].split('/')[9] && gName===jsonResult[k].split('/')[10])
                count++;
            else{
                break;
            }
        }
        if(k===jsonResult.length)
            count--;
        i=k-1;
        data.push(name,gName,count,link);
        resArray.push(data);
        data=[];
        count=0;
    }
    //console.log(resArray)
    return resArray;
}