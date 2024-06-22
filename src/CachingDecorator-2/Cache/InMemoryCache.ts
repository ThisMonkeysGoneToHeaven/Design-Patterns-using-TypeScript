import MyCache from "./MyCache";
import MyCacheEntry from "./MyCacheEntry";

// Defining Interface for My<CacheType>
interface MyInMemoryCache{
    [key: string]: MyCacheEntry
}

class InMemoryCache extends MyCache{
    
    cache: MyInMemoryCache = this.instantiateCache();

    instantiateCache(){
        return {};
    }

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