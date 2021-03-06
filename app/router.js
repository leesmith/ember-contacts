import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() {
    this.route('show', {path: '/:user_id'});
    this.route('edit', {path: ':user_id/edit'});
  });
  this.route('users');
});

export default Router;
