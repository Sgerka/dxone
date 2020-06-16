const circle_items = $('.circle-items');
const description_info = $('.description-info');
let circle_animation_interval = 7000;
let current_circle_element = 1;
var i = 0;
var is_interval_set = false;
var circle_loop = null;

function circle_animation() {
    if (i > 0) {
        unHighlightElement($(circle_items[circle_items.length - 1]));
    }
    unHighlightElement($(circle_items[current_circle_element - 1]))

    highlightElement($(circle_items[current_circle_element]));
    showDependingElement($(circle_items[current_circle_element]));

    current_circle_element = current_circle_element + 1;
    if (current_circle_element === circle_items.length) {
        current_circle_element = 0;
        i++;
    }
}

if (!is_interval_set) {
    circle_loop = setInterval(circle_animation, circle_animation_interval);
    is_interval_set = true;
}


highlightElement($(circle_items[0]));

function highlightElement(element) {
    $('.circle-items').addClass('circle-items-grey');
    element.removeClass('circle-items-grey');
}

function unHighlightElement(element) {
    element.addClass('circle-items-grey');
}

function showDependingElement(element) {
    description_info.each(function (info) {
        let item = $(this)[0];
        if (!item.className.includes('d-none')) {
            item.className += ' d-none';
        }
    })
    let elToShow = $('#' + element[0].id.replace('img-', ''))[0];
    elToShow.classList.remove("d-none");
}

circle_items.each(function (item) {
    $(this).mouseover(function () {
        clearInterval(circle_loop);
        is_interval_set = false;
        highlightElement($(this));
        showDependingElement($(this));
    })
    $(this).mouseout(function () {
        if (!is_interval_set) {
            circle_loop = setInterval(circle_animation, circle_animation_interval);
            is_interval_set = true;
            highlightElement($(circle_items[current_circle_element]));
        }
        unHighlightElement($(this));
    })

})



