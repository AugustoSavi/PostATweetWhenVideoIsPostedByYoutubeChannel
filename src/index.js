require('dotenv').config();
const ytdl = require('ytdl-core');
const ytch = require('yt-channel-info');
const moment = require('moment');
const Tweetar = require('./tweetar');
const express = require('express')
const http = require('http');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`app is running: ${history}`);
})

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

const history = {
    lastVideoId: '',
    today: ''
}

setInterval(info, parseInt(process.env.CHECK_INTERVAL_MS));
setInterval(function() {
    http.get(process.env.HEROKU_APP_URL);
    console.log('KeepAwake');
}, 300000);

async function info() {
    console.log('---------------Iniciando Verificação---------------')

    history.today = moment().format('YYYY-MM-DD');

    const videoInfo = {};

    // get basic data vídeo
    await ytch.getChannelVideos(process.env.YOUTUBE_CHANNEL_ID, 'newest', 1).then((videos) => {
        videoInfo.lastVideoBasicInfo = videos.items[0];

    }).catch((err) => {
        again('get basic data vídeo \n' + err);
    });

    // get full data vídeo
    await ytdl.getInfo(videoInfo.lastVideoBasicInfo?.videoId).then((videoData) => {
        videoInfo.lastVideoFullInfo = videoData;

        validateVideoPost(videoInfo.lastVideoFullInfo);

    }).catch((err) => {
        again('get full data vídeo \n' + err);
    });
}

function validateVideoPost(fullDataVideo) {

    if (fullDataVideo.videoDetails?.publishDate === history.today && fullDataVideo.videoDetails?.videoId !== history.lastVideoId) {
        history.lastVideoId = fullDataVideo.videoDetails.videoId;
        Tweetar(fullDataVideo.videoDetails);
    }
    else {
        console.log('---------------Sem Vídeo novo---------------')
    }
}

function again(err) {
    console.log(err);
    sleep(20000);
    info();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}