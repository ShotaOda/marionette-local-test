(function() {
  var template = Handlebars.template, templates = TMPL = TMPL || {};
templates['UserStaticItem.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"panel panel-default hidden-xs\" style=\"position: fixed; width: 20%; min-width: 200px;\">\n  <div class=\"panel-body\">\n    <img src=\"image/pizza.jpg\" alt=\"ユーザー\" class=\"img-circle center-block\">\n    <p>username</p>\n    <div class=\"list-group\">\n      <a id=\"button-navigation-myTweet\" class=\"list-group-item a\">\n        <h4 class=\"list-group-item-heading\">ツイート</h4>\n        <p class=\"list-group-item-text\">xxx</p>\n      </a>\n      <a id=\"button-navigation-myFollow\" class=\"list-group-item\">\n        <h4 class=\"list-group-item-heading\">フォロー</h4>\n        <p class=\"list-group-item-text\">yyy</p>\n      </a>\n      <a id=\"button-navigation-myFollower\" class=\"list-group-item\">\n        <h4 class=\"list-group-item-heading\">フォローワー</h4>\n        <p class=\"list-group-item-text\">zzz</p>\n      </a>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();