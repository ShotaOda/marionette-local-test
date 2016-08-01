(function() {
  var template = Handlebars.template, templates = TMPL = TMPL || {};
templates['SettingLayout.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\">\n  <div class=\"col-md-8 col-md-offset-3 col-sm-offset-4\">\n    <div class=\"panel panel-default panel-padding\">\n      <ul class=\"nav nav-pills nav-justified\">\n        <li role=\"presentation\" class=\"active\"><a href=\"#\">ツイート</a></li>\n        <li role=\"presentation\"><a href=\"#\">メディア</a></li>\n        <li role=\"presentation\"><a href=\"#\">フォロー</a></li>\n        <li role=\"presentation\"><a href=\"#\">フォローワー</a></li>\n        <li role=\"presentation\"><a href=\"#\">いいね</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div id=\"setting-content-region\" class=\"col-md-8 col-md-offset-3 col-sm-offset-4\"></div>\n</div>\n";
},"useData":true});
})();