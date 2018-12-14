// import saveAs from 'file-saver';

console.log('my-note app.js');

// var newnote = $('.btn_newnote');
var note = document.getElementById('memo');
var layer = document.querySelector('.layer');
var window = document.querySelector('.btn-fullScreen')

localStorage.getItem('memo');
note.value = localStorage.getItem('memo');

function reset() {
    note.value = '';
}

function store() {
    localStorage.setItem('memo', note.value);
}

function download() {
    // var FileSaver = require('file-saver');
    var blob = new Blob(["hello"], {type: "text/plain; charset = utf-8"});
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

// var exitFullscreen = function () {
// 	if (document.exitFullscreen) {
// 		document.exitFullscreen();
// 	} else if (document.webkitExitFullscreen) {
// 		document.webkitExitFullscreen();
// 	} else if (document.mozCancelFullScreen) {
// 		document.mozCancelFullScreen();
// 	} else if (document.msExitFullscreen) {
// 		document.msExitFullscreen();
// 	} else {
// 		console.log('Fullscreen API is not supported.');
// 	}
// };

window.addEventListener('click', function(e) {
	e.preventDefault();
	requestFullscreen(document.documentElement);
});



// fsExitDocButton.addEventListener('click', function(e) {
// 	e.preventDefault();
// 	exitFullscreen();
// });


// function fullScreen() {
//     if (screenfull.enabled) {
// 		screenfull.request();
// 	} else {
// 		screenfull.exit();
// 	}

    // if (!document.fullscreenElement &&    // alternative standard method
    //     !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
    //   if (document.documentElement.requestFullscreen) {
    //     document.documentElement.requestFullscreen();
    //   } else if (document.documentElement.mozRequestFullScreen) {
    //     document.documentElement.mozRequestFullScreen();
    //   } else if (document.documentElement.webkitRequestFullscreen) {
    //     document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    //   }
    // } else {
    //   if (document.cancelFullScreen) {
    //     document.cancelFullScreen();
    //   } else if (document.mozCancelFullScreen) {
    //     document.mozCancelFullScreen();
    //   } else if (document.webkitCancelFullScreen) {
    //     document.webkitCancelFullScreen();
    //   }
    // }
//   }

var flag = true;

function information() {
    if(flag == true) {
        layer.style.visibility = 'visible';
        flag = false;
    }
    else if(flag == false) {
        layer.style.visibility = 'hidden';
        flag = true;
    }
}
