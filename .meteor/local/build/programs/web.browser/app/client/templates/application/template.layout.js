(function(){
Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("yield"));
}));

}).call(this);
