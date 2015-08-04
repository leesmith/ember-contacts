import DS from 'ember-data';

var User = DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  address: DS.attr(),
  zip: DS.attr(),
  country: DS.attr()
});

User.reopenClass({
   FIXTURES: [
     {
      id: 1,
      firstName: 'Sam',
      lastName: 'Adams',
      address: '123 Main Street',
      zip: '12345',
      country: 'USA'
     },
     {
      id: 2,
      firstName: 'Jim',
      lastName: 'Beam',
      address: '123 Hometown Circle',
      zip: '12345',
      country: 'USA'
     },
     {
      id: 3,
      firstName: 'Jack',
      lastName: 'Daniels',
      address: '123 Magnolia Trail',
      zip: '12345',
      country: 'USA'
     }
   ]
});
