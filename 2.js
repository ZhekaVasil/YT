{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n\r\n| First column | Second Column |\r\n| --- | --- |\r\n| git status | List all new or modified files |\r\n| git diff | Show file differences that haven't been staged |\r\n| third column | Show file differences that haven't been staged |\r\n| fourth column | Show file differences that haven't been staged |\r\n| fifth column | Show file differences that haven't been staged |\r\n| sixth column | Show file differences that haven't been staged |\r\n";
},"useData":true}