const mongoose = require('mongoose');

const WhitelistSchema = new mongoose.Schema({
    address: {
        type: String
    }
});

module.exports = mongoose.model('whitelist', WhitelistSchema);
