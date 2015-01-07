var sections;
var audios;
var imgs;
$(document).ready(function(){

    var interval = setInterval(function() {

        if ($('section').size() > 4) {
            addMenu();
            addAudioListeners();
            clearInterval(interval);
        }

    },50);

    });

function addMenu(){
    var lis = document.getElementsByTagName('li');
    sections = document.getElementsByTagName('section');

    for(var i = 0,len = lis.length; i<len; i++)
    {
        setClassName(sections[i], lis[i]);
    }
}

function addAudioListeners()
{
    audios = document.getElementsByTagName('audio');

    for(var i = 0, len = audios.length; i<len; i++)
    {
        audios[i].addEventListener('play',animateImgClass);

        audios[i].addEventListener('pause',stopImgClass);
    }
}

function animateImgClass()
{
    if(imgs == null){
        imgs = document.getElementsByTagName('img');
    }

    for(var i = 0, len = imgs.length; i < len; i++)
    {
        if(imgs[i].alt != 'Foto Cassette' && imgs[i].alt != 'Foto Digital')
        {
            imgs[i].className = 'imgCarrier Animate';
        }
    }
}

function stopImgClass()
{
    if(imgs == null){
        imgs = document.getElementsByTagName('img');
    }

    for(var i = 0, len = imgs.length; i < len; i++)
    {
        imgs[i].className = 'imgCarrier';
    }
}

function setClassName(s,li)
{
    li.addEventListener('click',function(){
        if(s.className == 'ng-scope')
        {
            everythingInvisible();
            muteEverything();
            s.className = 'ng-scope visible';
        }
    });
}

function everythingInvisible()
{
    for(var i = 0, len = sections.length; i < len; i++)
    {
        sections[i].className = 'ng-scope';
    }
}

function muteEverything()
{
    for(var i = 0, len = audios.length; i<len; i++)
    {
            audios[i].pause();
    }
}