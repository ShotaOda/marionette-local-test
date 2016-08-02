(function() {
  var template = Handlebars.template, templates = TMPL = TMPL || {};
templates['UserStaticItem.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"panel panel-default hidden-xs\" style=\"position: fixed; width: 20%; min-width: 200px;\">\n  <div class=\"panel-body\">\n    <img src=\"image/pizza.jpg\" alt=\"ユーザー\" id=\"user-image\" class=\"img-circle center-block\">\n    <h3 id=\"user-name\">username</h3>\n    <div id=\"action-list\" class=\"list-group\">\n      <a href=\"#tweets\" id=\"button-navigation-myTweet\" class=\"list-group-item\">\n        <h4 class=\"list-group-item-heading\">ツイート</h4>\n        <p class=\"list-group-item-text\">xxx</p>\n      </a>\n      <a href=\"#follow\" id=\"button-navigation-myFollow\" class=\"list-group-item\">\n        <h4 class=\"list-group-item-heading\">フォロー</h4>\n        <p class=\"list-group-item-text\">yyy</p>\n      </a>\n      <a href=\"#follower\" id=\"button-navigation-myFollower\" class=\"list-group-item\">\n        <h4 class=\"list-group-item-heading\">フォローワー</h4>\n        <p class=\"list-group-item-text\">zzz</p>\n      </a>\n    </div>\n    <div id=\"user-edit-list\">\n      <br>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </span>\n        <input type=\"text\" class=\"form-control\" placeholder=\"@username\" aria-describedby=\"basic-addon1\">\n      </div>\n      <br>\n      <textarea class=\"form-control\" rows=\"3\" placeholder=\"自己紹介...\"></textarea>\n      <br>\n      <button type=\"button\" class=\"btn btn-default pull-right\">変更する</button>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();