const circle_items = $('.circle-items');
const description_info = $('.description-info');
let circle_animation_interval = 6000;
let current_circle_element = 1;
let animation_iteration = 0;
let is_interval_set = false;
let circle_loop = null;

function circle_animation() {
    if (animation_iteration > 0) {
        unHighlightElement($(circle_items[circle_items.length - 1]));
    }
    unHighlightElement($(circle_items[current_circle_element - 1]))

    highlightElement($(circle_items[current_circle_element]));
    showDependingElement($(circle_items[current_circle_element]));

    current_circle_element = current_circle_element + 1;
    if (current_circle_element === circle_items.length) {
        current_circle_element = 0;
        animation_iteration++;
    }
}


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


if (!is_interval_set) {
    circle_loop = setInterval(circle_animation, circle_animation_interval);
    is_interval_set = true;
}

highlightElement($(circle_items[0]));
showDependingElement($(circle_items[0]));

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
            current_circle_element = $(circle_items).index($(this)) +1
        }
    })
})


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
