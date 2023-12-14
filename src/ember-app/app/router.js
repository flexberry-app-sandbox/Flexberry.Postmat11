import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postmat11-пользователь-l');
  this.route('i-i-s-postmat11-пользователь-e',
  { path: 'i-i-s-postmat11-пользователь-e/:id' });
  this.route('i-i-s-postmat11-пользователь-e.new',
  { path: 'i-i-s-postmat11-пользователь-e/new' });
  this.route('i-i-s-postmat11-постамат-l');
  this.route('i-i-s-postmat11-постамат-e',
  { path: 'i-i-s-postmat11-постамат-e/:id' });
  this.route('i-i-s-postmat11-постамат-e.new',
  { path: 'i-i-s-postmat11-постамат-e/new' });
  this.route('i-i-s-postmat11-служба-доставки-l');
  this.route('i-i-s-postmat11-служба-доставки-e',
  { path: 'i-i-s-postmat11-служба-доставки-e/:id' });
  this.route('i-i-s-postmat11-служба-доставки-e.new',
  { path: 'i-i-s-postmat11-служба-доставки-e/new' });
  this.route('i-i-s-postmat11-транзакция-l');
  this.route('i-i-s-postmat11-транзакция-e',
  { path: 'i-i-s-postmat11-транзакция-e/:id' });
  this.route('i-i-s-postmat11-транзакция-e.new',
  { path: 'i-i-s-postmat11-транзакция-e/new' });
  this.route('i-i-s-postmat11-хранение-l');
  this.route('i-i-s-postmat11-хранение-e',
  { path: 'i-i-s-postmat11-хранение-e/:id' });
  this.route('i-i-s-postmat11-хранение-e.new',
  { path: 'i-i-s-postmat11-хранение-e/new' });
});

export default Router;
