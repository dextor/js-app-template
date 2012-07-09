/**
 * 
 * jquery.plugin.js
 * v0.1
 *
 */

/**
 * Usage:
 *
 * // using default options
 * $(a.tooltippable).tooltip();
 *
 * // using some custom options
 * $(document).endlessScroll({
 *   option: false,
 *   callback: function(){
 *     alert("test");
 *   }
 * });
 *
 * Configuration options:
 *
 * 
 *
 */

//immediately invoke the function
// and map "$" to jQuery
(function($){
	
	//define the method namespace in jQuery
	$.fn.plugin = function(options) {
		
		// setup some defaults for the plugin
		var defaults = {
			option: true,
			callback: function() { return true; }
		};
		
		// overwrite defaults with arguments passed in at invocation
    var options = $.extend(defaults, options);
		
		// variables
		var myVar = false;
		
		//make magic happen...
		
		
	};
	
	
})(jQuery);