(function(window) {
	'use strict';

	var iconList = <%= JSON.stringify(glyphs) %>;
	window.iconList = iconList;
}(this));