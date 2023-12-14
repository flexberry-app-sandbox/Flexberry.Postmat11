import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPostmat11ПользовательLForm from './forms/i-i-s-postmat11-пользователь-l';
import IISPostmat11ПостаматLForm from './forms/i-i-s-postmat11-постамат-l';
import IISPostmat11СлужбаДоставкиLForm from './forms/i-i-s-postmat11-служба-доставки-l';
import IISPostmat11ТранзакцияLForm from './forms/i-i-s-postmat11-транзакция-l';
import IISPostmat11ХранениеLForm from './forms/i-i-s-postmat11-хранение-l';
import IISPostmat11ПользовательEForm from './forms/i-i-s-postmat11-пользователь-e';
import IISPostmat11ПостаматEForm from './forms/i-i-s-postmat11-постамат-e';
import IISPostmat11СлужбаДоставкиEForm from './forms/i-i-s-postmat11-служба-доставки-e';
import IISPostmat11ТранзакцияEForm from './forms/i-i-s-postmat11-транзакция-e';
import IISPostmat11ХранEForm from './forms/i-i-s-postmat11-хран-e';
import IISPostmat11ХранениеEForm from './forms/i-i-s-postmat11-хранение-e';
import IISPostmat11ЛогистикаModel from './models/i-i-s-postmat11-логистика';
import IISPostmat11ПользовательModel from './models/i-i-s-postmat11-пользователь';
import IISPostmat11ПостаматModel from './models/i-i-s-postmat11-постамат';
import IISPostmat11ПосылкаModel from './models/i-i-s-postmat11-посылка';
import IISPostmat11СлужбаДоставкиModel from './models/i-i-s-postmat11-служба-доставки';
import IISPostmat11ТранзакцияModel from './models/i-i-s-postmat11-транзакция';
import IISPostmat11ХранениеModel from './models/i-i-s-postmat11-хранение';
import IISPostmat11ЯчейкаModel from './models/i-i-s-postmat11-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postmat11-логистика': IISPostmat11ЛогистикаModel,
    'i-i-s-postmat11-пользователь': IISPostmat11ПользовательModel,
    'i-i-s-postmat11-постамат': IISPostmat11ПостаматModel,
    'i-i-s-postmat11-посылка': IISPostmat11ПосылкаModel,
    'i-i-s-postmat11-служба-доставки': IISPostmat11СлужбаДоставкиModel,
    'i-i-s-postmat11-транзакция': IISPostmat11ТранзакцияModel,
    'i-i-s-postmat11-хранение': IISPostmat11ХранениеModel,
    'i-i-s-postmat11-ячейка': IISPostmat11ЯчейкаModel
  },

  'application-name': 'Postmat11',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Postmat11',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postmat11',
          title: 'Postmat11'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        postmat11: {
          caption: 'Postmat11',
          title: 'Postmat11',
          'i-i-s-postmat11-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postmat11-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-postmat11-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-postmat11-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postmat11-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-postmat11-пользователь-l': IISPostmat11ПользовательLForm,
    'i-i-s-postmat11-постамат-l': IISPostmat11ПостаматLForm,
    'i-i-s-postmat11-служба-доставки-l': IISPostmat11СлужбаДоставкиLForm,
    'i-i-s-postmat11-транзакция-l': IISPostmat11ТранзакцияLForm,
    'i-i-s-postmat11-хранение-l': IISPostmat11ХранениеLForm,
    'i-i-s-postmat11-пользователь-e': IISPostmat11ПользовательEForm,
    'i-i-s-postmat11-постамат-e': IISPostmat11ПостаматEForm,
    'i-i-s-postmat11-служба-доставки-e': IISPostmat11СлужбаДоставкиEForm,
    'i-i-s-postmat11-транзакция-e': IISPostmat11ТранзакцияEForm,
    'i-i-s-postmat11-хран-e': IISPostmat11ХранEForm,
    'i-i-s-postmat11-хранение-e': IISPostmat11ХранениеEForm
  },

});

export default translations;
