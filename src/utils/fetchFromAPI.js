import axios from 'axios';

const BASE_URL= 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key':"2344403d6dmsh8d08f8fff4db279p16441ajsnac179e260d42",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI=async(url)=>{
  const {data}=await axios.get(`${BASE_URL}/${url}`,options)

  return data;
}