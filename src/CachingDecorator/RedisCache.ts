import MyCache from "./MyCache";

class RedisCache extends MyCache{
    
    constructor(refresh_rate: number){
        super(refresh_rate);
    }

    contains(userId: string): boolean {
        throw new Error("Method not implemented.");
    }
    add(userId: string, data: JSON): void {
        throw new Error("Method not implemented.");
    }
    isExpired(userId: string): boolean {
        throw new Error("Method not implemented.");
    }
    getData(userId: string): JSON {
        throw new Error("Method not implemented.");
    }
    delete(userId: string): boolean {
        throw new Error("Method not implemented.");
    }
    
}