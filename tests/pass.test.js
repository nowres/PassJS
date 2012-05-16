"use strict";

var con = document.getElementById("console"),
    title = document.getElementById("title");
    
function start_test() {
    title.innerHTML="Test started";
}

function end_test() {
    title.innerHTML="Test finished";
}

function print(m) {
    con.innerHTML += "<br />" + m;
}

function info(m) {
    print(m);
}

function err(m) {
    print('<span class="error">' + m + "</span>");
    console.log(m);
}

function pass(m) {
    print('<span class="pass">' + m + "</span>");
    console.log(m);
}

function ok(a, b, m) {
    if (a !== b) {
        err(m + " test failed");
    } else {
        pass(m + " OK");
    }
}

start_test();

if (test_array !== undefined) {
    test_array();
}

if (test_string !== undefined) {
    test_string();
}

if (test_date !== undefined) {
    test_date();
}

end_test();
