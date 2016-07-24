(function() {
  var template = Handlebars.template, templates = TMPL = TMPL || {};
templates['TweetItem.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " <small> date</small></h3>\n    "
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "\n  </div>\n  <div class=\"panel-footer-action\">\n    <a href=\"#\"><span class=\"glyphicon glyphicon-share-alt\" aria-hidden=\"true\"></span></a>\n    <a href=\"#\"><span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span></a>\n    <a href=\"#\"><span class=\"glyphicon glyphicon-star-empty\" aria-hidden=\"true\"></span></a>\n    <a href=\"#\"><span class=\"glyphicon glyphicon-thumbs-up\" aria-hidden=\"true\"></span></a>\n  </div>\n</div>\n";
},"useData":true});
})();