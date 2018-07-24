import * as express from "express";
import * as cors from "cors";

const app = express();
app.use(cors());

interface Product {
    id: number,
    title: string,
    price: number
}

const products: Product[] = [
    { id:0, title: "First Product", price: 24.99 },
    { id:1, title: "Second Product", price: 64.99 },
    { id:2, title: "Third Product", price: 74.99}
];

function getProducts(): Product[] {
    return products;
}

 app.get('/', (req, res) => {
     res.send("Listening on " + port + " and " + server.address());
 });

app.get('/api/products', (req, res) => {
    console.log("got request for products" );
    res.json(getProducts());
});

function getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
}

app.get('/api/products/:id', (req, res) => {
    res.json(getProductById(parseInt(req.params.id)));
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    //const {address, port} = server.address();
    console.log("Listening on " + server.address().toString());
});
