var clickColor;
var clickValue;
var buttons = document.querySelectorAll('.menu');

function chColor(event) {
    if(clickValue != null) {
        $(clickValue)
            .css('backgroundColor', clickColor)
            .css('border-radius', radius)
            .css('border', border)
            .css('color', font);
    }

    clickValue = event.target;
    clickColor = event.currentTarget.style.backgroundColor;
    radius = event.currentTarget.style.borderRadius;
    border = event.currentTarget.style.border;
    font = event.currentTarget.style.color;

    event.currentTarget.style.backgroundColor = '#6167F6';
    event.currentTarget.style.borderRadius = '50%';
    event.currentTarget.style.border = 0;
    event.currentTarget.style.color = '#eee';
}

for(var i = 0; i < buttons.length; i++) {
    $(buttons[i]).on('click', chColor);
}