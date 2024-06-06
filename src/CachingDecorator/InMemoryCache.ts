import MyCache from "./MyCache";

// Defining Interfaces for Cache & CacheEntry
interface MyInMemoryCacheEntry{
    expiryTime: number,
    data: JSON
}

interface MyInMemoryCache{
    [key: string]: MyInMemoryCacheEntry
}

class InMemoryCache extends MyCache{

    constructor(refresh_rate: number){
        super(refresh_rate);
        this.cache = {};
    }
    
    cache: MyInMemoryCache;

    contains(userId: string){
        if(userId in this.cache)
            return true;
        return false;
    }

    add(userId : string, data : JSON){
        this.cache[userId] = {
            data: data,
            expiryTime: Date.now() + this.refresh_rate * 1000
        }
    }

    isExpired(userId: string){
        return this.cache[userId].expiryTime < Date.now();
    }

    getData(userId: string){
        return this.cache[userId].data;
    }

    delete(userId: string){
        delete this.cache[userId];
        return true;
    }
}

export default InMemoryCache;