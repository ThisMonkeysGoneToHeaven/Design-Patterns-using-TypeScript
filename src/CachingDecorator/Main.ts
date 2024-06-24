import InMemoryCache from "./Cache/InMemoryCache";
import App from "./App"
import IApp from "./IApp"
import express, {Request, Response} from 'express';

async function useApp(myApp: IApp, userId: string){
    const result = await myApp.getResult(userId);
    console.log(result);
}

const app = express();
const myApp: IApp = new App();
const myAppWithCache: IApp = new InMemoryCache(myApp);

app.get('/endpoint', (req: Request, res: Response) => {
    useApp(myAppWithCache, 'anyUser');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`app listening on PORT: ${PORT}`);
});