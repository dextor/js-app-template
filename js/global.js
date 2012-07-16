//extend the window object (highest level, global scope) with our MyApplication scope
/*
 * @param {Object} app reference to our top-level scope
 * @param {Object} $ reference to jQuery
 * @returns {Object} app
*/
window.MyApplication = (function(app, $) {
	
/*
 *	@contstructor new Main()
 */	
	var Main = function() {
		
		var self = this;
		var container = $('#container');
		
		var showLog = true; // set to false in production (hide the consolelog calls)
		var showLogAlerts = false; // set to false to prevent alert messaging for console fallback
		
		
// private methods /////////////////////////////////////////////////////////////////////////////////
		var sayHello = function() {
			app.main.consolelog("Hello World!");
			app.main.consolelog(['this: ', this]);	// Window.MyApplication.main
			app.main.consolelog(['app.main: ', app.main]);
		};


		var setColor = function() {
			$('a.colorable').myPlugin({'color': 'blue'}).css('textDecoration', 'underline');
		};
		
		
// public methods  /////////////////////////////////////////////////////////////////////////////////

		var publicMethod0 = function() {
			app.main.consolelog('publicMethod0');
		};
		
		var publicMethod1 = function() {
			app.main.consolelog('publicMethod1');
		};
		
		var publicMethod2 = function() {
			app.main.consolelog('publicMethod2');
		};
		
		
		// @param {String} sVar The key who's value you wish to return from the query string
		// @returns {String} The value of the requested key
		var getQueryString = function(sVar) {
			var urlStr = window.location.search.substring(1);
			var sv = urlStr.split("&");
			var i;
			for (i=0; i<sv.length; i+=1) {
				var ft = sv[i].split("=");
				if(ft[0] === sVar) {
					return ft[1];
				}
			}
		};
		
		
		
		//allow logging to be turned on/off
		/*
		 * @param {String, Array} the message to log
		 * @param {String} the type of message (log, warn, error)
		 */
		var consolelog = function(msg, logType) { 
			if (showLog === false) return false;
			else {
				if(logType == null) { var logType = 'log'; }
				$(msg).each(function(i, val) {
					console[logType](val);
				});
			} 
		};
		
		
		
//js fallbacks /////////////////////////////////////////////////////////////////////////////////

		var consoleFallback = function() {
			// avoid console problem in browsers without a console/ no firebug
			if (typeof(console) === 'undefined') {
				console = {};
				console.log = function(str) {
					if(showLogAlerts) alert("console.log: " + str);
				};
				console.error = function(str) {
					if(showLogAlerts) alert("console.error: " + str);
				};
				console.warn = function(str) {
					if(showLogAlerts) alert("console.warn: " + str);
				};
			}
		};

		var indexOfFallback = function(obj, fromIndex) {
			// IE6 has no indexOf function, so let's define one if needed
			if (!Array.prototype.indexOf) {
				Array.prototype.indexOf = function(obj, fromIndex) {
					var i = 0;
					if (fromIndex === undefined || fromIndex === null) {
						fromIndex = 0;
					} else if (fromIndex < 0) {
						fromIndex = Math.max(0, this.length + fromIndex);
					}
					for (i = fromIndex, j = this.length; i < j; i += 1) {
						if (this[i] === obj) {
							return i;
						}
					}
					return -1;
				};
			}
		};
		
		
		
		return {
			init: function() {
				// private methods
				consoleFallback();
				indexOfFallback();
				sayHello();	
			},
			/* public methods */
			consolelog: consolelog,
			getQueryString: getQueryString,
			publicMethod0: publicMethod0,
			publicMethod1: publicMethod1,
			publicMethod2: publicMethod2
		}
	};
	
	//the "global" scope of our application
	// e.g > app.main.publicMethodName()
	app.main = app.main || new Main();
	
	
	// same thing as $(document).ready(function() {});
	$(function() {
		//initialize app
		MyApplication.main.init();
	});

	return app;
	
}(window.MyApplication || {}, jQuery));