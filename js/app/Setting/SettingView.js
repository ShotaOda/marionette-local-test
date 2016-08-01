var myPageLayoutView = Backbone.Marionette.LayoutView.extend({
   id: LAYOUTID.SETTINGLAYOUT
  ,template: TMPL['SettingLayout.hbs']
  ,regions: {
    content: '#setting-content-region'
  }
  ,initialize: function (option) {
    this.option = option
  }
  ,onAttach: function () {

  }
});

var settingListView = Backbone.Marionette.ItemView.extend({
  template: TMPL['SettingList.hbs']
})
