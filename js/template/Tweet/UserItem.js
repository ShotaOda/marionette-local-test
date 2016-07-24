(function() {
  var template = Handlebars.template, templates = TMPL = TMPL || {};
templates['UserItem.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-4\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <img src=\"image/pizza.jpg\" alt=\"ユーザー\" class=\"img-circle center-block bottom-space\">\n      <h3 class=\"bottom-space\">\n        "
    + container.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"username","hash":{},"data":data}) : helper)))
    + "\n        <button type=\"button\" class=\"btn btn-primary pull-right\">フォロー中</button>\n      </h3>\n      <div class=\"list-group\">\n        <a href=\"#\" class=\"list-group-item\">\n          <h4 class=\"list-group-item-heading\">ツイート</h4>\n          <p class=\"list-group-item-text\">xxx</p>\n        </a>\n        <a href=\"#\" class=\"list-group-item\">\n          <h4 class=\"list-group-item-heading\">フォロー</h4>\n          <p class=\"list-group-item-text\">yyy</p>\n        </a>\n        <a href=\"#\" class=\"list-group-item\">\n          <h4 class=\"list-group-item-heading\">フォローワー</h4>\n          <p class=\"list-group-item-text\">zzz</p>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();