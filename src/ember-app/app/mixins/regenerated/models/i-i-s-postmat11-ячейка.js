import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЯчейки: DS.attr('number'),
  хранение: DS.belongsTo('i-i-s-postmat11-хранение', { inverse: null, async: false }),
  постамат: DS.belongsTo('i-i-s-postmat11-постамат', { inverse: 'ячейка', async: false })
});

export let ValidationRules = {
  номерЯчейки: {
    descriptionKey: 'models.i-i-s-postmat11-ячейка.validations.номерЯчейки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postmat11-ячейка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  постамат: {
    descriptionKey: 'models.i-i-s-postmat11-ячейка.validations.постамат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЯчейкаE', 'i-i-s-postmat11-ячейка', {
    номерЯчейки: attr('Номер ячейки', { index: 0 }),
    хранение: belongsTo('i-i-s-postmat11-хранение', 'Хранение', {
      датаНачала: attr('Начала', { index: 2, hidden: true }),
      датаЗавершения: attr('конец', { index: 3, hidden: true }),
      продления: attr('Продления', { index: 4, hidden: true })
    }, { index: 1, displayMemberPath: 'продления' })
  });
};
