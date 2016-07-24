var IMPL = IMPL || {};
(function () {
  'use strict'

  IMPL.RootLayoutView = Backbone.Marionette.LayoutView.extend({
     el: 'body'

		,regions: {
        left : "#left" 
			 ,main : "#main"
		}
  });
})()
