require('dotenv').config();
const Twit = require('twit');

module.exports = (fullDataVideo) => {

    const TwitCliente = new Twit({
        consumer_key: process.env.TWITTER_API_KEY,
        consumer_secret: process.env.TWITTER_API_SECRET,
        access_token: process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    statusMessage =
        `ð¥³ VÃ­deo novo no canal do ${fullDataVideo.ownerChannelName} ð¥³
â¨ ${fullDataVideo.title} â¨ 
ð¯ð¼ð¿ð® ð¹ð® ð®ððð¶ððð¶ð¿:
    ${fullDataVideo.video_url}
    `

    TwitCliente.post('statuses/update', { status: statusMessage },
        function (err, data, response) {
            if (err) {
                console.log('---------------error TwitCliente.post()---------------')
                console.log(err)
            }
            if (data) {
                console.log('---------------publicou TwitCliente.post()---------------')
            }
        }
    )

}