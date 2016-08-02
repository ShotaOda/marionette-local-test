var navigationView = Backbone.Marionette.View.extend({
	//attach static html elments not reference/template
	el: $("#navigation-container")

	//nav buttons
	,ui: {
		tweetlist : '#nav-tweet-list'
		,mypage    : '#nav-mypage'
		,user      : '#nav-user'
		,setting   : '#nav-setting'
		,navlinks  : 'li.nav-link'
	}

	,state: {
		LIS: 1
		,MYP: 2
		,USR: 3
		,SET: 4
	}

	//Attaching a view to an existing element is the exception.
	//The normal view lifecycle involves calling render, and without doing that there would be nothing for the UI elements to bind to.
	//so call this.bindUIElements() in your initialize method when need to attach a view to an existing element.
	,initialize: function(){
		this.bindUIElements();
	}

	,changeState: function (state) {
		var $el;
		switch (state) {
			case 1:
			$el = this.ui.tweetlist
			break;
			case 2:
			$el = this.ui.mypage
			break;
			case 3:
			$el = this.ui.user
			break;
			case 4:
			$el = this.ui.setting
			break;
			default:
		}
		this.ui.navlinks.each(function(i,val){$(val).removeClass('active')})
		if($el) $el.addClass('active')
	}

});
