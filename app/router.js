import Ember from 'ember';

var Router = Ember.Router.extend({
  location: JsBlogENV.locationType
});

Router.map(function() {
  this.route('post', {path: "/posts/:id"});
  this.route('new-post', {path: "/posts/new"});
});

export default Router;
