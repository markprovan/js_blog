import { test, moduleForModel } from 'ember-qunit';

moduleForModel('post', 'Post', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});

test('it can be rendered as markdown', function() {
  var post = this.subject({title: "Blah", body: "#Hello"});
  equal(post.get("bodyAsMarkdown"), "<h1>Hello</h1>");
});
