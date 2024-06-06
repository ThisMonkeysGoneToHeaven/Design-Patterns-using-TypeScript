
abstract class MyCache{

    constructor(refresh_rate: number){
        this.refresh_rate = refresh_rate;
    }

    refresh_rate: number;

    abstract contains(userId: string): boolean;
    abstract add(userId: string, data: JSON): void;
    abstract isExpired(userId: string): boolean;
    abstract getData(userId: string): JSON;
    abstract delete(userId: string): boolean;
}

export default MyCache;