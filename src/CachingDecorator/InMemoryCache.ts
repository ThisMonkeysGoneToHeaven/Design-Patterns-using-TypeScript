// Defining Interfaces for Cache & CacheEntry
interface CacheEntry{
    expiryTime: number,
    data: JSON
}

interface MyCache{
    [key: string]: CacheEntry
}

class InMemoryCache{
    constructor(cache_refresh_rate_in_seconds: number){
        this.cache = {};
        this.refresh_rate = cache_refresh_rate_in_seconds;
    }
    
    cache: MyCache;
    refresh_rate: number;

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