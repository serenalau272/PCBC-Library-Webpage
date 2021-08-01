import mongoose from "mongoose"

const Schema = mongoose.Schema;

// Content
const schemaItem = new Schema(
    {
        chineseName: {type: String},
        englishName: {type: String},
        itemCategory: {type: String, required: true},
        itemCode: {type: Number, required: true},
        bookAV: {type: String, required: true},
        language: {type: String, required: true},
        authors: {type: String, required: true},
        publisher: {type: String, required: true},
        ISBN: {type: String, required: true},
        purchaseDate: {type: String},
        barcodePrintOut: {type: String}
    },
    {
        timestamp: {},
    }
);

const Item = mongoose.model("Item", schemaItem);

// Status
const schemaCard = new Schema(
    {
        chineseName: {type: String},
        englishName: {type: String},
        gender: {type: String},
        cardNumber: {type: Number, required: true},
        membership: {type: String, required: true},
        barcodePrintOut: {type: String}
        
    },
    {
        timestamp: {},
    }
);

const Card = mongoose.model("Card", schemaCard);

export {Item, Card};
