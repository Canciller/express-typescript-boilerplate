import express from 'express';

export default function expressLoader(app: express.Application) {
  app.get('/', (req, res) => {
    res.send('Hello World');
  });
}