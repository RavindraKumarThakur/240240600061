const UrlData = require('../db/shorturl.js');
const shortid = require('shortid');

async function shortUrl(req,res) {
    req.body.shortUrl = shortid.generate();
    
    await UrlData.create({
        fullUrl: req.body.longUrl,
        shortCode: req.body.shortUrl
    }).then(() => {
        console.log('Url created')
    }).catch((err) => {
        console.log(err)
    });
    return res.status(201).json({shortUrl: req.body.shortUrl, fullUrl: req.body.longUrl});
}

module.exports = { shortUrl };