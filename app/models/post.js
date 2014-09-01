import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  body: DS.attr("string"),

  bodyAsMarkdown: function() {
    if (!Ember.isNone(this.get("body"))) {
      return markdown.toHTML(this.get("body"));
    } else {
      return ""
    }   
  }.property("body")
});
