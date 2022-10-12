import * as express from 'express';
import { Request, Response } from 'express';

import {SendText} from './example/sender_of_requests/sendText';
import {SendPhoto} from './example/sender_of_requests/sendPhoto';
import {SendFile} from './example/sender_of_requests/sendFile';
import {SendLocation} from './example/sender_of_requests/sendLocation';
import {GetUserInfo} from './example/sender_of_requests/getUserInfo';
import {RequestCustom} from './example/sender_of_requests/custom';

const app = express();
const port = 3000;

//////////////
// sendText //
//////////////
app.get('/sendText.telegram', async (req: Request, res: Response) => {
  res.send(await SendText.telegram());
});

app.get('/sendText.vk', async (req: Request, res: Response) => {
  res.send(await SendText.vk());
});

app.get('/sendText.viber', async (req: Request, res: Response) => {
  res.send(await SendText.viber());
});

///////////////
// sendPhoto //
///////////////
app.get('/sendPhoto.telegram', async (req: Request, res: Response) => {
  res.send(await SendPhoto.telegram());
});

app.get('/sendPhoto.vk', async (req: Request, res: Response) => {
  res.send(await SendPhoto.vk());
});

app.get('/sendPhoto.viber', async (req: Request, res: Response) => {
  res.send(await SendPhoto.viber());
});

//////////////
// sendFile //
//////////////
app.get('/sendFile.telegram', async (req: Request, res: Response) => {
  res.send(await SendFile.telegram());
});

app.get('/sendFile.vk', async (req: Request, res: Response) => {
  res.send(await SendFile.vk());
});

app.get('/sendFile.viber', async (req: Request, res: Response) => {
  res.send(await SendFile.viber());
});

//////////////////
// sendLocation //
//////////////////
app.get('/sendLocation.telegram', async (req: Request, res: Response) => {
  res.send(await SendLocation.telegram());
});

app.get('/sendLocation.vk', async (req: Request, res: Response) => {
  res.send(await SendLocation.vk());
});

app.get('/sendLocation.viber', async (req: Request, res: Response) => {
  res.send(await SendLocation.viber());
});

/////////////////
// getUserInfo //
/////////////////
app.get('/getUserInfo.telegram', async (req: Request, res: Response) => {
  res.send(await GetUserInfo.telegram());
});

app.get('/getUserInfo.vk', async (req: Request, res: Response) => {
  res.send(await GetUserInfo.vk());
});

app.get('/getUserInfo.viber', async (req: Request, res: Response) => {
  res.send(await GetUserInfo.viber());
});

///////////////////
// requestCustom //
///////////////////
app.get('/requestCustom.telegram', async (req: Request, res: Response) => {
  res.send(await RequestCustom.telegram());
});

app.get('/requestCustom.vk', async (req: Request, res: Response) => {
  res.send(await RequestCustom.vk());
});

app.get('/requestCustom.viber', async (req: Request, res: Response) => {
  res.send(await RequestCustom.viber());
});

////////////
// listen //
////////////
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});