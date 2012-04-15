function array_eq(a, b) {
    var i;
    if (a.length === b.length) {
        for (i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function test_array_map() {
    var arr = [1, 2, 3],
    a = arr.map(function (v, i) {
        return v * 2;
    });
    ok(array_eq(a, [2, 4, 6]), true, "Array.map 1");
    ok(array_eq(arr, [1, 2, 3]), true, "Array.map 2");
    arr = [];
    a = arr.map(function (v, i) {
        return v * 2;
    });
    ok(array_eq(a, []), true, "Array.map 3");
}

function test_array_filter() {
    var arr = [1, 2, 3, 1, 44, 0],
    a = arr.filter(function (v, i) {
        return (v > 2);
    });
    ok(array_eq(a, [3, 44]), true, "Array.filter 1");
    ok(array_eq(arr, [1, 2, 3, 1, 44, 0]), true, "Array.filter 2");
    arr = [];
    a = arr.filter(function (v, i) {
        return v < 2;
    });
    ok(array_eq(a, []), true, "Array.filter 3");
}

function test_array_forEach() {
    var arr = [1, 2, 3, 4], a = [];
    arr.forEach(function (v, i) {
        a[a.length] = v;
    });
    ok(array_eq(a, arr), true, "Array.forEach 1");
    ok(array_eq(arr, [1, 2, 3, 4]), true, "Array.forEach 2");
    a = [];
    arr.forEach(function (v, i) {
        a[a.length] = v + i;
    });
    ok(array_eq(a, [1, 3, 5, 7]), true, "Array.forEach 3");
    ok(array_eq(arr, [1, 2, 3, 4]), true, "Array.forEach 4");
}

function test_array_every() {
    var arr = [1, 2, 3, 1, 44, 0],
    a = arr.every(function (v, i) {
        return (v > 0);
    });
    ok(a, false, "Array.every 1");
    ok(array_eq(arr, [1, 2, 3, 1, 44, 0]), true, "Array.every 2");
    a = arr.every(function (v, i) {
        return (v < 45);
    });
    ok(a, true, "Array.every 3");
}

function test_array_some() {
    var arr = [1, 2, 3, 1, 44, 0],
    a = arr.some(function (v, i) {
        return (v > 5);
    });
    ok(a, true, "Array.some 1");
    a = arr.some(function (v, i) {
        return (v < 45);
    });
    ok(a, true, "Array.some 2");
    a = arr.some(function (v, i) {
        return (v > 45);
    });
    ok(a, false, "Array.some 3");
    ok(array_eq(arr, [1, 2, 3, 1, 44, 0]), true, "Array.some 4");
}

function test_array() {
    info('Testing arrays');
    test_array_map();
    test_array_filter();
    test_array_forEach();
    test_array_every();
    test_array_some();
    info('Testing arrays done');
}