/* 
 * String.js
 * This file is part of the PassJS library
 * This file is licensed under the GNU GPLv3 license
 * 
 * @author: Nowres RAFID <nowres.rafed@gmail.com>
 * @version: 0.1.0
 */

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
};