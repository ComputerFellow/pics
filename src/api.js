import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID -eJ9cgm80FL6F4HMOjqdizufCQAt26Rtq5RS6gj0aQw'
        },
        params: {
            query: term,
        }
    })

    return response.data.results;
}

export default searchImages;