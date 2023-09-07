//sk_test_51NnjJEBxN6v7JPxmSdDjvBXDf8OKnvx220uPCqrf5yNYxVbbTNsJ2Fr4GMgJXJ5W1FDmSJXnuvJDIIHb422Hjwpi00N4Wfurua
// Rosco Lamp: price_1NnnYxBxN6v7JPxmTfq3rkAC
// Chair Leclo: price_1Nnne7BxN6v7JPxmnsVrjlpj
//Vase "Petit Lou": price_1NnnrzBxN6v7JPxmCzX6UJwh
//Table vaseli: price_1NnntUBxN6v7JPxmOktCpShW
//Vase cokera: price_1Nnny1BxN6v7JPxmawhhuJMJ
//Chair amonbi: price_1Nno19BxN6v7JPxms1uxUNWw
//Lamp huleti: price_1Nno7UBxN6v7JPxmrAWBFs9W
//Table barelly: price_1NnoBXBxN6v7JPxmED0bQYvJ
//Table pink infinity: price_1NnoEFBxN6v7JPxmhGDCyPs2
//Vase mobuchi: price_1NnoYVBxN6v7JPxmawPMG4Uh
//Timeless Treasures: price_1NnoZpBxN6v7JPxmEdJcvAzQ
//Harmony of Heritage: price_1NnofnBxN6v7JPxmVA4yQRY9
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51NnjJEBxN6v7JPxmSdDjvBXDf8OKnvx220uPCqrf5yNYxVbbTNsJ2Fr4GMgJXJ5W1FDmSJXnuvJDIIHb422Hjwpi00N4Wfurua");
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.post("/checkout", async (req, res) => {
  /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000!"));
