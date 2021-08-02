import { Item } from "../schema"

async function addItem(item) {
    const dbItem = new Item(item);
    await dbItem.save();
    return dbItem;
}

async function getItem(name) {
    let query 
    query = { "englishName": { $eq: name } }
    
    return Item.find(query);

}

async function deleteItem(ID) {
    await Item.deleteOne({_id: ID});
}


export {addItem, getItem, deleteItem}