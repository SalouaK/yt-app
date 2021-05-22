import axios from 'axios';

const KEY = 'AIzaSyDYQawnxySviY_xa2neZiAkcA7DZI6zyEc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});