import axios from "axios";

const KEY='AIzaSyClkhhmEE0RoenOUWhrXxIl_XW5r6Al7m8';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});