var sections;
var audios;
$(document).ready(function(){

    var interval = setInterval(function() {

        if ($('section').size() == 6) {
            addMenu();
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

function setClassName(s,li)
{
    li.onclick = function(){
        if(s.className == 'ng-scope')
        {
            everythingInvisible();
            muteEverything();
            s.className = 'ng-scope visible';
        }
    }
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
    if(audios==null)
    {
        audios = document.getElementsByTagName('audio');
    }

    for(var i = 0, len = audios.length; i<len; i++)
    {
            audios[i].pause();
    }
}

