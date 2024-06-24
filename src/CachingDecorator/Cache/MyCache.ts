import IApp from "../IApp";

abstract class MyCache implements IApp{

    app: IApp;
    refresh_rate: number;

    constructor(app: IApp){
        this.app = app;
        this.refresh_rate = 30; // in seconds, setting manually for now
    }

    async getResult(userId: string): Promise<JSON> {
        // check if the cache contains stuff
        if(this.contains(userId) && this.isExpired(userId) == false){
            console.log('returning the data from the cache');
            return Promise.resolve(this.getData(userId));
        }
        // else make a new fetch request
        const result = await this.app.getResult(userId);
        // cache the result
        this.add(userId, result);
        // return the promise of result
        return Promise.resolve(result);
    }

    abstract instantiateCache(): void;
    abstract contains(userId: string): boolean;
    abstract add(userId: string, data: JSON): void;
    abstract isExpired(userId: string): boolean;
    abstract getData(userId: string): JSON;
    abstract delete(userId: string): boolean;
}

export default MyCache;