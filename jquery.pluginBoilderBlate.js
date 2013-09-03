;(function(window, $, undefined) {
	"use strict";

	$.pluginName	= $.pluginName || function(_el, _settings) {
		var _this			= this,
			_$el			= $(_el),
			_privateVar		= 'X',

		_init				= function() {
			// do initialisation
		},
		_getPrivateVar		= function(){
			return _x;
		};

		/***************************************************************
		*****                                           ****************
		*****            PUBLIC VARS                    ****************
		*****                                           ****************
		***************************************************************/
		this.publicVar		= _privateVar;

		/***************************************************************
		*****                                           ****************
		*****            PUBLIC METHODS                 ****************
		*****                                           ****************
		***************************************************************/
		this.publicMethod		= function() {
			return _getPrivateVar();
		};

		this.update				= function() {
			// do update
		};

	};

	$.pluginName.defaults   = {

	};

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