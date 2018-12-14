//start...


//할일을 입력하세요에 할일을 입력하면 포스트로 넘겨줘야함
//input입력받기

var input = document.getElementById('memo');
var list = document.querySelector('#list');
var form = document.querySelector('.new-task');

function addTodo(event) {
    // if(event.keyCode === 13) {
    //     var todo = input.value;
    //     console.log(todo);
    // }
    // console.log(event);

    var todo = input.value;
    console.log(todo);
    insertTodo(todo);//todo를 넘김
    input.value = '';

    event.preventDefault();//이벤트 전파 중지
}

// input.addEventListener('keydown', addTodo);
form.addEventListener('submit', addTodo);//엔터만 치면 submit이 된다.

function insertTodo(todo) {
    var html = `<li class="content">`+
    `<button class="delete">×</button>`+
    `<input type="checkbox" class="toggle-checked">`+
    `<span class="text">${todo}</span>`+
    `</li>`;

    list.innerHTML += html;

}

list.addEventListener('click', remove);

function remove(e) {
    var currentNode = e.target.parentElement;
    console.log(currentNode.className);

    if (e.target.className == "delete" && currentNode.className == "content") {
        currentNode.remove();
    }

    if (e.target.className == "toggle-checked" && e.target.checked == true) {
        console.log("다한거");
        currentNode.children[2].style.textDecoration="line-through";
        currentNode.children[2].style.color ="gray";
    } else {
        console.log("다시 되돌리기");
        currentNode.children[2].style.textDecoration="none";
        currentNode.children[2].style.color ="black";
    }
}

