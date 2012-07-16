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
;(function($){
	
	//define the method namespace in jQuery
	$.fn.myPlugin = function(options) {
		
		// setup some defaults for the plugin
		var defaults = {
			option: true,
			'color': 'lime',
			callback: function() { return true; }
		};
		
		// overwrite defaults with arguments passed in at invocation
    //var options = $.extend(defaults, options);
		
		// variables

		// to avoid confusions, use "plugin" to reference the current instance of the object
    var plugin = this;
		// this will hold the merged default, and user-provided options
    // plugin's properties will be available through this object like:
    // plugin.settings.propertyName from inside the plugin or
    // element.data('spotlight').settings.propertyName from outside the plugin, where "element" is the
    // element the plugin is attached to;
    plugin.settings = {};
		// the plugin's final properties are the merged default and user-provided options (if any)
    plugin.settings = $.extend({}, defaults, options);

		var myVar = false;
		
		// there's no need to do $(this) because
		// "this" is already a jquery object
		
		//make magic happen...
		this.css({'color': plugin.settings.color});
		
		return this; //maintain chain-ability i.e. - $(el).slideup().myPlugin().css('textDecoration', 'underline');
	};
	
	
})(jQuery);