const faker = require('@faker-js/faker');

var database = { 
    main_table: []
};

for (var i = 1; i<= 100; i++) {
  database.main_table.push({
    ID: i,
    JOB_TYPE: faker.name.jobArea(),
    NAME: faker.name.firstName(),
    WORKER_TYPE: faker.name.jobTitle(),
    RATE: faker.commerce.price(),
    TIME_START: faker.time.recent(),
    TIME_END: faker.time.recent(),
    START_DATE: faker.date.recent(),
    END_DATE: faker.date.soon(),
    ADDRESS_GEOLOCATION: faker.address.longitude(),
    ADDRESS: faker.address.streetAddress(),
    PHONE: faker.phone.phoneNumber(),
    EMAIL: faker.internet.email(),
    DESCRIPTION: faker.lorem.paragraph(),
    ATTACHMENT: faker.system.fileName()
  });
}

console.log(JSON.stringify(database));