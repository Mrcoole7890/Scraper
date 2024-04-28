var Publishers = require('../Publisher.js');
const dotenv = require('dotenv').config();

describe("Testing suite for the publisher file", function() {
    it("can be called in the testing suite", function() {
        var myPublisher = new Publishers.Publisher(process.env.WEBHOOK_FOR_PUBLISH);
        expect(myPublisher).not.toBe(null);
    });
});