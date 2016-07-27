(function() {
  var template = Handlebars.template, templates = TMPL = TMPL || {};
templates['TweetPostPreviewItem.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-3\">\n  <a href=\"#\" class=\"thumbnail\">\n    <img alt=\"100%x180\" data-src=\"holder.js/100%x180\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\" />\n  </a>\n</div>\n";
},"useData":true});
})();