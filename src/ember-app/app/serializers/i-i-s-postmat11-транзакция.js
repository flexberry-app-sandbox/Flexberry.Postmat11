import { Serializer as ТранзакцияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postmat11-транзакция';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТранзакцияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
