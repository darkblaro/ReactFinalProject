import axios from 'axios';

export default axios.create({
    baseURL:"https://my-json-server.typicode.com/darkblaro/jsonserver/galleries",
    headers:{
        "Content-type": "application/json"
    }
});
