/**
 * jQuery Plugin Boilerplate by Stefan Friedl
 *
 * 
 * @param  {instance}   window      pass the window object to get global
 * @param  {object}     $           pass jQuery as $ to avoid conflicts with other frameworks like Prototype
 * @param  {undefined}  undefined   pass NULL as undefined to avoid overwrites
 */
;(function(window, $, undefined) {
	// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
	// http://www.w3schools.com/js/js_strict.asp
	"use strict";

	// append the plugin to the jQuery Object
	// all public vars/functions will be accessible in the $.pluginName namespace
	$.pluginName    = $.pluginName || function(_el, _settings) {
		/********** 		PRIVATE VARS 	**************/
		var _this           = this,
		  _$el            = $(_el),
		  _privateVar     = 'X',

		/********** 	PRIVATE METHODS 	**************/
		_init               = function() {
		  // do initialisation
		},
		_getPrivateVar      = function(){
		  return _x;
		};

		/********** 		PUBLIC VARS 	**************/
		this.publicVar      = _privateVar;

		/********** 	PRIVATE METHODS 	**************/
		this.publicMethod       = function(param1, param2) {
		  return _getPrivateVar();
		};

		this.update             = function(param1, param2) {
		  // do update
		};

	};

	// save the defaults of or plugin options to have global access and a backup of the original data
	$.pluginName.defaults   = {
		'debug': 	0
	,	'type': 	'advanced'
	};

	// Here comes the tricky part
	// 
	// We use a wrapper function to pass the given parameters
	// options to use it:
	// 	* $('#target').pluginName({'debug': 0});
	// 		that would pass the options object and check for an existing instance
	// 		if no instance is found it creates a new instant of our plugin and binds it on the target Object (also returns itself)
	// 	* $('#target').pluginName('publicMethod', 'param1', 'param2');
	// 		if it found an instance the public method of the plugin is called with the given parameters
	$.fn.pluginName   = function(options) {
		var args    = Array.prototype.slice.call( arguments, 1 ),
		  returnVal;

		this.each(function(){
		  var $form       = $(this),
			instance    = $form.data('pluginName');
			if( typeof options === 'string' ){
				if( instance ){
					if( typeof instance[options] === 'function' ){
						returnVal = instance[options].apply( instance, args);
					}else{
						$.error('[pluginName] method "'+options+'" not available');
					}
				}else{
					$.error('[pluginName] cannot call methods prior to initialization');
				}
		  	}else if( typeof options === 'object' || !options ){
				var settings = $.extend(true, {}, $.pluginName.defaults, options);
				if( instance ){
					instance.init(options)
				}else{
					$form.data('pluginName', new $.pluginName(this, settings));
				}
			}
		});
		if( returnVal !== undefined ){ return returnVal; }
		return this;
	};


})(window, window.jQuery);