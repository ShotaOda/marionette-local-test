var headerView = Backbone.Marionette.View.extend({
	//attach static html elments not reference/template
	el: $("#Header")

	//nav buttons
	,ui: {
		 tweetlist : '#nav-tweet-list'
		,mypage    : '#nav-mypaget'
		,user      : '#nav-user'
		,setting   : '#nav-setting'
	}

	,events: {
		"click @ui.SendReport": "navToSend"
		,"click @ui.ReadReport": "navToRead"
		,"click @ui.ManageSetting": "navToSetting"
	}

	//Attaching a view to an existing element is the exception.
	//The normal view lifecycle involves calling render, and without doing that there would be nothing for the UI elements to bind to.
	//so call this.bindUIElements() in your initialize method when need to attach a view to an existing element.
	,initialize: function(){
		this.bindUIElements();

	}

	,changeState: function () {
		
	}

});
