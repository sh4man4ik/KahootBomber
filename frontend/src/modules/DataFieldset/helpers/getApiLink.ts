function getApiLink() {
	let prod = import.meta.env.VITE_API_URL;
	let dev = 'http://localhost:5000';

	return dev;
}

export default getApiLink;
