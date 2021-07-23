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
        `🥳 Vídeo novo no canal do ${fullDataVideo.ownerChannelName} 🥳
✨ ${fullDataVideo.title} ✨ 
𝗯𝗼𝗿𝗮 𝗹𝗮 𝗮𝘀𝘀𝗶𝘀𝘁𝗶𝗿:
    ${fullDataVideo.video_url}
    `

    TwitCliente.post('statuses/update', { status: statusMessage },
        function (err, data, response) {
            if (err) {
                console.log('---------------error---------------')
                console.log(err)
            }
            if (data) {
                console.log('---------------publicou---------------')
            }
        }
    )
}