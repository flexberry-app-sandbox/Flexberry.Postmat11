import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postmat11-постамат', 'Unit | Serializer | i-i-s-postmat11-постамат', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-postmat11-постамат',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-postmat11-оплата',
    'transform:i-i-s-postmat11-состояние',
    'transform:i-i-s-postmat11-статус',
    'transform:i-i-s-postmat11-статусы',

    'model:i-i-s-postmat11-логистика',
    'model:i-i-s-postmat11-пользователь',
    'model:i-i-s-postmat11-постамат',
    'model:i-i-s-postmat11-посылка',
    'model:i-i-s-postmat11-служба-доставки',
    'model:i-i-s-postmat11-транзакция',
    'model:i-i-s-postmat11-хранение',
    'model:i-i-s-postmat11-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
