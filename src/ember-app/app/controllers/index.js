import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.postmat11.caption'),
          title: i18n.t('forms.application.sitemap.postmat11.title'),
          children: [{
            link: 'i-i-s-postmat11-постамат-l',
            caption: i18n.t('forms.application.sitemap.postmat11.i-i-s-postmat11-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postmat11.i-i-s-postmat11-постамат-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-postmat11-хранение-l',
            caption: i18n.t('forms.application.sitemap.postmat11.i-i-s-postmat11-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.postmat11.i-i-s-postmat11-хранение-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-postmat11-пользователь-l',
            caption: i18n.t('forms.application.sitemap.postmat11.i-i-s-postmat11-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.postmat11.i-i-s-postmat11-пользователь-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-postmat11-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postmat11.i-i-s-postmat11-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postmat11.i-i-s-postmat11-служба-доставки-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-postmat11-транзакция-l',
            caption: i18n.t('forms.application.sitemap.postmat11.i-i-s-postmat11-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.postmat11.i-i-s-postmat11-транзакция-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})