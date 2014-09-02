import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get("store").createRecord("post")
  },
  actions: {
    create: function() {
      this.currentModel.save();
      this.transitionTo("application");
    },
    willTransition: function(transition) {
      var name = this.routeName;
      var isTransitionOut = transition.state.handlerInfos.every(function(item){
        return name !== item.name;
      });

      if (isTransitionOut) {
        if (!this.currentModel.get("isSaving")) {
          var conf = confirm("This post has not been saved. Are you sure you want to lose it?");
          if (conf == true) {
            this.currentModel.destroy();
          } else {
            transition.abort();
          }
        }
      }
    }
  }
});
