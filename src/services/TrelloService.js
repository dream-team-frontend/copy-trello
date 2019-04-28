const API_ROOT = 'http://greenpanther.ru/';

class TrelloService {
	callApi = async (endpoint) => {
		const url = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Could not fetch ${url}, received ${response.status}`);
		}

		return await response.json();
	};

	getInitialState = async () => {
		const response = await this.callApi(`init/`);
		return response.results;
	};

	getBoards = async () => {
		const response = await this.callApi(`boards/`);
		return response.results;
	};

	getBoard = async (id) => {
		return await this.callApi(`boards/${id}/`);
	};
}

export default TrelloService;