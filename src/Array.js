/* Array.js
 * This file is part of the DeltaJS library
 * This file is licensed under the GNU GPLv3 license
 * 
 * @author: Nowres RAFID <nowres.rafed@gmail.com>
 * @version: 0.6.0
 */

/* TODO: sobj */
Array.prototype.forEach = function(func, sobj) {
    var i;
    for (i = 0; i < this.length; i++) {
        func(this[i], i, this);
    }
};

Array.prototype.map = function(func, sobj) {
    var i, a = [];
    for (i = 0; i < this.length; i++) {
        a[a.length] = func(this[i], i, this);
    }
    return a;
};

Array.prototype.filter = function(func, sobj) {
    var i, a = [], f;
    for (i = 0; i < this.length; i++) {
        f = func(this[i], i, this);
        if (f) {
            a[a.length] = this[i];
        }
    }
    return a;
};

Array.prototype.every = function(func, sobj) {
    var i, f;
    for (i = 0; i < this.length; i++) {
        f = func(this[i], i, this);
        if (!f) {
            return false;
        }
    }
    return true;
};

Array.prototype.some = function(func, sobj) {
    var i, f;
    for (i = 0; i < this.length; i++) {
        f = func(this[i], i, this);
        if (f) {
            return true;
        }
    }
    return false;
};

Array.prototype.indexOf = function(item, offset) {
    var i;
    if (offset === undefined) {
        offset = 0;
    }
    for (i = offset; i < this.length; i++) {
        if (item === this[i]) {
            return i;
        }
    }
    return -1;
};

Array.prototype.lastIndexOf = function(item, offset) {
    var i;
    if (offset === undefined) {
        offset = this.length - 1;
    }
    for (i = offset; i >= 0 ; i--) {
        if (item === this[i]) {
            return i;
        }
    }
    return -1;
};

Array.isArray = function (arr) {
    if (arr instanceof Array) {
        return true
    } else {
        return false;
    }
}

/* TODO:
Array.prototype.reduce;
Array.prototype.reduceRight;
*/