(function() {
  var template = Handlebars.template, templates = TMPL = TMPL || {};
templates['TweetComposite.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\">\n  <div class=\"col-md-8 col-md-offset-3 col-sm-offset-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <textarea class=\"form-control\" rows=\"3\"></textarea>\n        <button class=\"btn btn-default pull-right\">添付する</button>\n        <button class=\"btn btn-default pull-right\">投稿する</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div id=\"tweetContainer\" class=\"col-md-8 col-md-offset-3 col-sm-offset-4\"></div>\n</div>\n";
},"useData":true});
})();