import IApp from "../IApp";

abstract class MyCache implements IApp{

    app: IApp;
    refresh_rate: number;

    constructor(app: IApp){
        this.app = app;
        this.refresh_rate = 30; // in seconds, setting manually for now
    }

    getResult(userId: string): JSON {
        // check if the cache contains stuff
        if(this.contains(userId) && this.isExpired(userId) == false)
            return this.getData(userId);
        // else make a new fetch request, cache the result and return it
        const result = this.app.getResult(userId);
        this.add(userId, result);
        return result;
    }

    abstract instantiateCache(): void;
    abstract contains(userId: string): boolean;
    abstract add(userId: string, data: JSON): void;
    abstract isExpired(userId: string): boolean;
    abstract getData(userId: string): JSON;
    abstract delete(userId: string): boolean;
}

export default MyCache;