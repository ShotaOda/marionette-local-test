(function() {
  var template = Handlebars.template, templates = TMPL = TMPL || {};
templates['TweetPostComposite.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- input form -->\n<form id=\"input-form\" onsubmit=\"return false;\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <textarea id=\"tweet-input\" class=\"form-control\" rows=\"5\"></textarea>\n      <div id=\"preview-container\" class=\"row\"></div>\n      <div class=\"tweet-post-action\">\n        <label for=\"file-input\" class=\"glyphicon glyphicon-camera\">\n          <input id=\"file-input\" type=\"file\" name=\"name\" accept=\"image/gif,image/jpeg,image/jpg,image/png\" value=\"\" style=\"display:none;\" multiple>\n        </label>\n        <div class=\"pull-right\">\n          <span class=\"text-counter\">140</span>\n          <button id=\"tweet-post-button\" class=\"btn btn-primary\">投稿する</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n";
},"useData":true});
})();