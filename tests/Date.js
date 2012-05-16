/* 
 * Date.js
 * This file is part of the PassJS library
 * This file is part of the test suite
 * This file is licensed under the GNU GPLv3 license
 * 
 * @author: Nowres RAFID <nowres.rafed@gmail.com>
 * @version: 0.1.0
 */

function test_date_toISOString() {
    var date = new Date(1337183488269);
    ok(date.toISOString(), "2012-05-16T15:51:28.269Z", "Date.toISOString 1");
}

function test_date_toJSON() {
    var date = new Date(1337183488269);
    ok(date.toJSON(), "2012-05-16T15:51:28.269Z", "Date.toJSON 1");
}


function test_date() {
    info('Testing Date');
    test_date_toISOString();
    test_date_toJSON();
    info('Testing Date done');
}