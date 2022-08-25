import axios from 'axios';

const url='http://localhost:5000/poxts';

export const fetchPosts=()=>axios.get(url);