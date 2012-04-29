/* 
 * String.js
 * This file is part of the PassJS library
 * This file is part of the test suite
 * This file is licensed under the GNU GPLv3 license
 * 
 * @author: Nowres RAFID <nowres.rafed@gmail.com>
 * @version: 0.1.0
 */

function test_string_trim() {
    var s = "  test    ";
    ok(s.trim(), "test", "String.trim 1");
    s = "";
    ok(s.trim(), "", "String.trim 2");
    s = "   test";
    ok(s.trim(), "test", "String.trim 3");
    s = "test       ";
    ok(s.trim(), "test", "String.trim 4");
}


function test_string() {
    info('Testing String');
    test_array_map();
    info('Testing String done');
}