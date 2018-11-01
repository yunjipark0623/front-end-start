//start...


//할일을 입력하세요에 할일을 입력하면 포스트로 넘겨줘야함
//input입력받기

var input = document.getElementById('memo');
var list = document.getElementById('list');
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
    var html = `<li>
    <button class="delete">×</button>
    <input type="checkbox" class="toggle-checked">
    <span class="text">${todo}</span>
    </li>`;

    list.innerHTML += html;
}

//x누르면 삭제하기
list.querySelector('.delete').addEventListener('click', remove);

function remove(list) {

    console.log('click');
    todo = event.target;
    list.removeChild(todo.parentNode);
}

//체크박스 누르면 글에 줄가기
