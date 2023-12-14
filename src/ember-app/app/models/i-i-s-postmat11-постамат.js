import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПостаматMixin
} from '../mixins/regenerated/models/i-i-s-postmat11-постамат';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПостаматMixin, Validations, {
});

defineProjections(Model);

export default Model;
