/* 
 * String.js
 * This file is part of the PassJS library
 * This file is licensed under the GNU GPLv3 license
 * 
 * @author: Nowres RAFID <nowres.rafed@gmail.com>
 * @version: 0.1.0
 */

if(!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^\s+|\s+$/g,'');
	};
}

if(!String.prototype.trimRight) {
	String.prototype.trimRight = function () {
		return this.replace(/\s+$/g,'');
	};
}

if(!String.prototype.trimLeft) {
	String.prototype.trimLeft = function () {
		return this.replace(/^\s+/g,'');
	};
}