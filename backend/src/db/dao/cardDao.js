import { Card } from "../schema"

async function addCard(card) {
    const dbCard = new Card(card);
    await dbCard.save();
    return dbCard;
}

async function getCard(name) {
    let query 
    query = { "englishName": { $eq: name } }
    
    return Card.find(query);

}

async function deleteCard(ID) {
    await Item.deleteOne({_id: ID});
}


export {addCard, getCard, deleteCard}