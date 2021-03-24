const path = require("path");
const express = require("express");
const webPush = require("web-push");

require("dotenv").config();
const app = express();

const port = 5000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

app.post("subscribe", (req, res) => {
  //  Get pushSubscription object from Client
  const subscription = req.body;

  res.status(201).json({});

  //   Create Payload
  const payload = JSON.stringify({ title: "Push Test" });

  //   Pass object into sendNotification
  webPush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});

app.listen(port, () => console.log(`Server listening on ${port}`));
