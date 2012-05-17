/* 
 * Date.js
 * This file is part of the PassJS library
 * This file is licensed under the GNU GPLv3 license
 * 
 * @author: Nowres RAFID <nowres.rafed@gmail.com>
 * @version: 0.1.0
 */

/** Date Utility functions **/
function OzeroPad(val) {
	return val < 10 ? '0' + val : '' + val;
}
/** end Date Utility functions **/

/** Date prototype functions definition **/

//TODO: Handle hour = 24
if(!Date.prototype.toISOString) {
	Date.prototype.toISOString = function () {
		//ISO : YYYY-MM-DDTHH:mm:ss.sssZ
		var YYYY = this.getUTCFullYear(),
		MM = OzeroPad(this.getUTCMonth() + 1),
		DD = OzeroPad(this.getUTCDate()),
		HH = OzeroPad(this.getUTCHours()),
		mm = OzeroPad(this.getUTCMinutes()),
		ss = OzeroPad(this.getUTCSeconds()),
		sss = OzeroPad(this.getUTCMilliseconds()),
		ISO;

		ISO = YYYY + '-' + MM + '-' + DD + 'T' + HH + ':' + mm + ':' + ss + '.' + sss + 'Z';

		return ISO;
	};
}

//We Override toJSON definition to avoid a problem in IE
Date.prototype.toJSON = function () {
	return this.toISOString();
};

/* Date type definitions **/
if (!Date.now) {
	Date.now = function() {
		return new Date().getTime();
	}
}