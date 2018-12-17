console.log('my-note app.js');

var note = document.getElementById('memo');
var layer = document.querySelector('.layer');
var fullScreen = document.querySelector('.btn-fullScreen')

localStorage.getItem('memo');
note.value = localStorage.getItem('memo');

function reset() {
    console.log('memo reset');
    note.value = '';
}

function store() {
    console.log('memo store');
    alert("노트를 저장 완료했습니다.");
    localStorage.setItem('memo', note.value);
}

function download() {
    console.log('memo download');
    var blob = new Blob([note.value], {type: "text/plain; charset = utf-8"});
    saveAs(blob, "note.txt");
}

var requestFullscreen = function (event) {
	if (event.requestFullscreen) {
		event.requestFullscreen();
	} else if (event.webkitRequestFullscreen) {
		event.webkitRequestFullscreen();
	} else if (event.mozRequestFullScreen) {
		event.mozRequestFullScreen();
	} else if (event.msRequestFullscreen) {
		event.msRequestFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
    }
};

var exitFullscreen = function () {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};

var screenFlag = true;

fullScreen.addEventListener('click', function(e) {
    if(screenFlag == true) {
        console.log('fullScreen On');
	    e.preventDefault();
        requestFullscreen(document.documentElement);
        screenFlag = false;
    }
    if(screenFlag == false) {
        console.log('fullScreen Off');
	    e.preventDefault();
        exitFullscreen(document.documentElement);
        screenFlag = true;
    } 
});

var flag = true;

function information() {
    console.log('app info');
    if(flag == true) {
        layer.style.visibility = 'visible';
        flag = false;
    }
    else if(flag == false) {
        layer.style.visibility = 'hidden';
        flag = true;
    }
}
