export default interface IApp{
    getResult(userId: string): Promise<JSON>;
}