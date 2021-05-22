import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

// * Reusable code with customized hook 

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // here we change our input (the hard coded search term)
        // into a reusable argument named 'defaultSearchTerm'
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
    };
    // * We can here return an array or an object of our output arguments 
    return [videos, search];
};

export default useVideos;