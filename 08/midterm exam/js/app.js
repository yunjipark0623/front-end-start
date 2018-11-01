var btn_trending = document.getElementsByClassName('active btn_trending');
var btn_issue = document.getElementsByClassName('active btn_issue');
var btn_enter = document.getElementsByClassName('active btn_enter');
var btn_default = document.getElementsByClassName('btn btn-default');
var list = document.getElementById('list');
var url_trending = 'https://1boon.kakao.com/ch/trending.json?page=1&pagesize=10';
var url_issue = 'https://1boon.kakao.com/ch/issue.json?page=1&pagesize=10';
var url_enter = 'https://1boon.kakao.com/ch/enter.json?page=1&pagesize=10';
var pgnumber = 2;

$(btn_trending).on('click', click_trending);
$(btn_issue).on('click', click_issue);
$(btn_enter).on('click', click_enter);

function click_trending() {
    var str = '';
    getTrendingData(url_trending, print);

    function print(json) {
        for(var i = 0; i < json.data.length; i++) {
            var title = json.data[i].title;
            var coverImage = json.data[i].coverImage;
            var path = json.data[i].path;
            var totalView = json.data[i].totalView;
    
            str += `<div class="grid"><img src="${coverImage}"><br>`;
            str += `<a href="https://1boon.kakao.com/${path}" target="_blank" class="link">${title}</a><br>`;
            str += `<p>${totalView}명이 읽음</p></div>`;
        }
        list.innerHTML = str;
    }
    
    function getTrendingData(url_trending, callback) {
        fetch(url_trending)
            .then(function(response) {
                response.json().then(function(data) {
                    callback(data);
                });
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

    $(btn_default).on('click', more);

    function more() {
        var url_trending = `https://1boon.kakao.com/ch/trending.json?page=${pgnumber}&pagesize=10`;
        getTrendingData(url_trending, print);
        pgnumber++;
    }
}

function click_issue() {
    var str = '';
    getIssueData(url_issue, print);

    function print(json) {
        for(var i = 0; i < json.data.length; i++) {
            var title = json.data[i].title;
            var coverImage = json.data[i].coverImage;
            var path = json.data[i].path;
            var totalView = json.data[i].totalView;
    
            str += `<div class="grid"><img src="${coverImage}"><br>`;
            str += `<a href="https://1boon.kakao.com/${path}" target="_blank" class="link">${title}</a><br>`;
            str += `<p>${totalView}명이 읽음</p></div>`;
        }
        list.innerHTML = str;
    }

    function getIssueData(url_issue, callback) {
        fetch(url_issue)
            .then(function(response) {
                response.json().then(function(data) {
                    callback(data);
                });
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

    $(btn_default).on('click', more);

    function more() {
        var url_issue = `https://1boon.kakao.com/ch/issue.json?page=${pgnumber}&pagesize=10`;
        getIssueData(url_issue, print);
        pgnumber++;
    }
}

function click_enter() {
    var str = '';
    getEnterData(url_enter, print);

    function print(json) {
        for(var i = 0; i < json.data.length; i++) {
            var title = json.data[i].title;
            var coverImage = json.data[i].coverImage;
            var path = json.data[i].path;
            var totalView = json.data[i].totalView;
    
            str += `<div class="grid"><img src="${coverImage}"><br>`;
            str += `<a href="https://1boon.kakao.com/${path}" target="_blank" class="link">${title}</a><br>`;
            str += `<p>${totalView}명이 읽음</p></div>`;
        }
        list.innerHTML = str;
    }

    function getEnterData(url_enter, callback) {
        fetch(url_enter)
            .then(function(response) {
                response.json().then(function(data) {
                    callback(data);
                });
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

    $(btn_default).on('click', more);

    function more() {
        var url_enter = `https://1boon.kakao.com/ch/enter.json?page=${pgnumber}&pagesize=10`;
        getEnterData(url_enter, print);
        pgnumber++;
    }
}




