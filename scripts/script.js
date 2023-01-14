'use strict'


//TABS or wit?
$(document).ready(function () {
    $('#africa').click(function (event) {
        $('.africa').addClass('active');
    });
});
$(document).ready(function () {
    $('.close_button').click(function (event) {
        $('.africa').removeClass('active');
    });
});

$(document).ready(function () {
    $('#pivdamer').click(function (event) {
        $('.pivdamer').addClass('active');
    });
});
$(document).ready(function () {
    $('.close_button').click(function (event) {
        $('.pivdamer').removeClass('active');
    });
});

$(document).ready(function () {
    $('#austr').click(function (event) {
        $('.austr').addClass('active');
    });
});
$(document).ready(function () {
    $('.close_button').click(function (event) {
        $('.austr').removeClass('active');
    });
});

$(document).ready(function () {
    $('#pivnamer').click(function (event) {
        $('.pivnamer').addClass('active');
    });
});
$(document).ready(function () {
    $('.close_button').click(function (event) {
        $('.pivnamer').removeClass('active');
    });
});

$(document).ready(function () {
    $('#euraz').click(function (event) {
        $('.euraz').addClass('active');
    });
});
$(document).ready(function () {
    $('.close_button').click(function (event) {
        $('.euraz').removeClass('active');
    });
});

$(document).ready(function () {
    $('#antarkt').click(function (event) {
        $('.antarkt').addClass('active');
    });
});
$(document).ready(function () {
    $('.close_button').click(function (event) {
        $('.antarkt').removeClass('active');
    });
});


//INFO BUTTON
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'focus'
});

