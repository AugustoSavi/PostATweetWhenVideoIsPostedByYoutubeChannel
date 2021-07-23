const ytdl = require('ytdl-core');
const ytch = require('yt-channel-info');
const moment = require('moment');

const history = {
    lastVideoId: '',
    today: ''
}

info();

async function info(){
    console.log('Iniciando')

    history.today = moment().format('YYYY-MM-DD');

    const videoInfo = {};

    // get basic data vídeo
    await ytch.getChannelVideos('UCEKS6GQ60VyhGkAVgJ_Rm6w', 'newest', 1).then((videos) => {
        videoInfo.lastVideoBasicInfo = videos.items[0];

    }).catch((err) => {
        again(err)
    });
    
    // get full data vídeo
    await ytdl.getInfo(videoInfo.lastVideoBasicInfo?.videoId).then((videoData)=>{
        videoInfo.lastVideoFullInfo = videoData;

        validateVideoPost(videoInfo.lastVideoFullInfo);

    }).catch((err) => {
        again(err)
    });
}

function validateVideoPost(fullDataVideo) {

    if(!fullDataVideo.videoDetails?.publishDate){
        return false;
    }
    
    if(fullDataVideo.videoDetails?.publishDate === history.today && fullDataVideo.videoDetails?.videoId !== history.lastVideoId){
        history.lastVideoId = fullDataVideo.videoDetails.videoId;
        return true;
    }
}

function again(err){
    console.log(err)
    sleep(2000);
    info();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}