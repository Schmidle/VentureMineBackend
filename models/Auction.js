var mongoose = require('mongoose');
var Bid = require('./Bid');
var VolumeData = require('./VolumeData');
var VolSchema = mongoose.model('VolumeData').schema;
var BidSchema = mongoose.model('Bid').schema;


var AuctionSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true, default: ''},
    auctionStart: {type: String, required: true},
    auctionEnd: {type: String, required: true},
    sharesOffered: {type: Number, required: true},
    currentStrikePrice: {type: Number, required: true, default: 0},
    currentPricePerShare: {type: Number, required: true, default: 0},
    currentBids: {type: Number, required: true, default: 0},
    showReserve: {type: Boolean, required: true, default: true},
    reservePrice: {type: Number, required: true, default: 10},
    reserveMet: {type: Boolean, required: true},
    uniqueBidders: {type: Number, required: true, default: 0},
    graphDataSets: {type: [{}], default: [{}], required: false},
    bids: {type: [BidSchema], required: true, default: []},
    time : { type : Date, default: Date.now },
    currentCommittedCapital: {type: Number, required: false, default: 0},
    volumeData: {type: [VolSchema], default: [], required: true}
});

module.exports = mongoose.model('Auction', AuctionSchema, 'Auctions');