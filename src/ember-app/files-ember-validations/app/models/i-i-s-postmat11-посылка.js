import {
  defineNamespace,
  defineProjections,
  Model as ПосылкаMixin
} from '../mixins/regenerated/models/i-i-s-postmat11-посылка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПосылкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
