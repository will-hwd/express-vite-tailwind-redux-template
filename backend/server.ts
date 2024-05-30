import express, { ErrorRequestHandler, Express, Request, RequestHandler, Response } from "express";
import path from "path";
import https from "https";
import axios, { Axios, AxiosError } from "axios";
import cookies from "cookie-parser"
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware"
import morgan from "morgan";  

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(morgan("dev"))
app.use(cookies());

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../dist-frontend'))); //During dev, a concurrent web server is spun up to host frontend. 

app.all("/*", async (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist-frontend', 'index.html'));   
})

app.listen(port, () => {
    console.log(`Connect API listening on port ${port}`)
});