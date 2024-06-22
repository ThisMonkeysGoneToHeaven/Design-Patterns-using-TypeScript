import IApp from "./IApp";

const mockAPIURL = `https://665f0f6a1e9017dc16f2a4e8.mockapi.io/api/v1/data`;

export default class App implements IApp{

    getResult(userId: string): JSON {
        throw new Error("Method not implemented.");
    }
    
    async fetchAPI(): Promise<JSON>{
        const response = await fetch(mockAPIURL);
        const data = await response.json();
        return data;
    };
}