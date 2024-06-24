import IApp from "./IApp";

const mockAPIURL = `https://665f0f6a1e9017dc16f2a4e8.mockapi.io/api/v1/data`;

export default class App implements IApp{

    async getResult(userId: string): Promise<JSON> {
        const dataFetchedFromAPI = await this.fetchAPI();
        return dataFetchedFromAPI;
    }
    
    async fetchAPI(): Promise<JSON>{
        console.log('fetching from the API');
        const response = await fetch(mockAPIURL);
        const data = await response.json();
        return data;
    };
}