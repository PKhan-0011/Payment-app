import express from 'express';

const app = express();
import {z} from 'zod';

app.post('/', (req, res) => {
      
      const paymentInformation  = {
           token: req.body.token,
           userId: req.body.userId,
           amount: req.body.amount

           // ye tenno data frontend s aa rhe honge okkh!..
      }
});
