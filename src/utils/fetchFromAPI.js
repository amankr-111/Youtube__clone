import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com/captions'
const options = {
  method: 'GET',
  url: BASE_URL,
  params: {},
  headers: {
    'X-RapidAPI-Key': Process.env.
    REACT_APP_RAPID_API_KET,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};