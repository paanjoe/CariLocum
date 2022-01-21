// Import
const faker = require('@faker-js/faker');

// Database structure
var database = { 
    main_table: [],
    comment: []
};

// Generate Main Table
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

// Generate Comment
for (var i = 1; i<= 20; i++) {
  database.comment.push({
    ID: i,
    COMMENT: faker.lorem.sentence(),
    BY: faker.name.firstName() + ' ' + faker.name.lastName(),
    POST_DATE: faker.date.recent(),
    PROFILE_PICTURE: faker.image.imageUrl(200,200)
  });
}

// Write data to json file
console.log(JSON.stringify(database));