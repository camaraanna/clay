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
const stripe = require("stripe")("sk_test_51NnjJEBxN6v7JPxmSdDjvBXDf8OKnvx220uPCqrf5yNYxVbbTNsJ2Fr4GMgJXJ5W1FDmSJXnuvJDIIHb422Hjwpi00N4Wfurua"); // Remplacez par votre clé secrète Stripe

const app = express();

const corsOptions = {
  origin: "https://localhost:3001", // Remplacez par l'URL de votre application React
};

app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];

  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "https://localhost:3001/success", // Remplacez par l'URL de succès de votre application React
    cancel_url: "https://localhost:3001/cancel", // Remplacez par l'URL d'annulation de votre application React
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

const port = 4000;
app.listen(port, () => console.log(`Le serveur fonctionne sur le port ${port}`));
