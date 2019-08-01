import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-362de.firebaseio.com/'
});

export default instance;
