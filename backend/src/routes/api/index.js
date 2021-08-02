import express from "express"
import { addItem, getItem, deleteItem } from "../../db/dao/itemDao.js";
import { addCard, getCard, deleteCard } from "../../db/dao/cardDao.js";

const router = express.Router();

router.get('/', function(req, res) {
    res.send("Test Route");
});


// router.get('/card', async function(req, res) {
//     const status = await getStatus();
//     res.json(status);
// });


// router.put('/card', async function(req, res) {
//     const data = req.body;
//     const newStatus = await changeStatus(data.status);
//     res.json(newStatus);
// });


router.get('/item/:id', async function(req, res) {
    const {id} = req.params;
    const item = await getItem(id);
    res.json(item);
});

router.post('/item', async function(req, res) {
    const data = req.body;
    const newItem = await addItem({
        englishName: data.englishName,
        barcode: data.barcode
    });

    res.status(201).json(newItem);
});

router.get('/card/:id', async function(req, res) {
    const {id} = req.params;
    const card = await getCard(id);
    res.json(card);
});

router.post('/card', async function(req, res) {
    const data = req.body;
    const newCard = await addCard({
        englishName: data.englishName,
        barcode: data.barcode
    });

    res.status(201).json(newCard);
});


// router.delete('/database/:id', async function(req, res) {
//     const {id} = req.params;
//     await deleteContent(id);

//     res.sendStatus(204);
// });

module.exports = router;