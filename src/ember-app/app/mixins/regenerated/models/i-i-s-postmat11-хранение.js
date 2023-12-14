import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗавершения: DS.attr('date'),
  датаНачала: DS.attr('date'),
  номер: DS.attr('number'),
  продления: DS.attr('string'),
  посылка: DS.hasMany('i-i-s-postmat11-посылка', { inverse: 'хранение', async: false })
});

export let ValidationRules = {
  датаЗавершения: {
    descriptionKey: 'models.i-i-s-postmat11-хранение.validations.датаЗавершения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-postmat11-хранение.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postmat11-хранение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  продления: {
    descriptionKey: 'models.i-i-s-postmat11-хранение.validations.продления.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-postmat11-хранение.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ХранениеE', 'i-i-s-postmat11-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продление', { index: 3 }),
    посылка: hasMany('i-i-s-postmat11-посылка', 'Посылка', {
      номер: attr('Номер', { index: 0 }),
      статус: attr('Статус', { index: 1 })
    })
  });

  modelClass.defineProjection('ХранениеE', 'i-i-s-postmat11-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продления', { index: 3 }),
    посылка: hasMany('i-i-s-postmat11-посылка', 'Посылка', {
      номер: attr('Номер', { index: 0 }),
      статус: attr('Статус', { index: 1 })
    })
  });

  modelClass.defineProjection('ХранениеL', 'i-i-s-postmat11-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продления', { index: 3 })
  });
};
