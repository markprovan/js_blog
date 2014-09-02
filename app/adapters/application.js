import DS from 'ember-data';

$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});

var ApplicationAdapter = DS.RESTAdapter.extend({
  host: "http://localhost:3000"
});

export default ApplicationAdapter;
