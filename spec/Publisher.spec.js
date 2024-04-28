var Publishers = require('../Publisher.js');
const dotenv = require('dotenv').config();

describe("Testing suite for the publisher file", function() {
    it("can be called in the testing suite", function() {
        var myPublisher = new Publishers.Publisher(process.env.WEBHOOK_FOR_PUBLISH);
        expect(myPublisher).not.toBe(undefined);
    });
    it("will not set the message if the parameter is null", function() {
        var myPublisher = new Publishers.Publisher(process.env.WEBHOOK_FOR_PUBLISH);
        myPublisher.setMessage(null);
        expect(myPublisher.getMessage()).toBe(null);
    });
    it("will not set the message if the parameter is an array but the elements are not all arrays of size 2", function() {
        var myPublisher = new Publishers.Publisher(process.env.WEBHOOK_FOR_PUBLISH);
        myPublisher.setMessage([1,3,5]);
        expect(myPublisher.getMessage()).toBe(null);

        myPublisher.setMessage( [[1,3,5], [1,5]] );
        expect(myPublisher.getMessage()).toBe(null);

        myPublisher.setMessage( [ [1,6] , [7,7,3] ] );
        expect(myPublisher.getMessage()).toBe(null);
    });
});