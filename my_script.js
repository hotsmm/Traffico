$(document).ready(function () {
    $('.small a').click(function(e) {
        if($('.big img').attr('src')!==$(this).attr('href')) {
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
        }
        e.preventDefault();
    });
})

function onEntry(entry) {
entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
});
}

let options = {
threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.move, .title__text-slide');

for (let elm of elements) {
observer.observe(elm);
}


