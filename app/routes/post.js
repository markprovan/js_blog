import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get("store").getById("post", params.id);
  }
});
