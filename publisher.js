const { Webhook, MessageBuilder } = require('discord-webhook-node');
const dotenv = require('dotenv').config();
var Deals = require('./Deal.js');

class Publisher {
    constructor(destination) {
        this.hook = new Webhook(destination);
        this.message = null;
    }

    send() {
        if (this.message == null) return false;
        return this.hook.send(this.message);
    }

    setMessage(fields) {
        this.message = null;
        if (this.validateFields(fields) == false) return;

        this.message = new MessageBuilder();
        this.message.setTitle(fields[0][1])
            .setColor('#00b0f4')
            .setThumbnail('https://mms-images.out.customink.com/mms/images/catalog/0a5035381454c4f36514087bde93df70/colors/661402/views/alt/front_medium.png?placeMax=1&placeMaxPct=0.8&placeUseProduct=1&placeUseView=front&ixbg=%23ffffff&ixfm=jpeg&ixq=60&ixw=412&autoNegate=1&design=nmp0-00cm-q9ga&digest=000000028&imembroider=1');

        for (var i = 1; i < fields.length; i++)
            this.message.addField(fields[i][0], fields[i][1]);
    }

    getMessage() {
        return this.message;
    }

    validateFields(feilds) {
        if (!Array.isArray(feilds)) return false;
        
        for (var i = 0; i < feilds.length; i++) {
            if (!Array.isArray(feilds[i]) || feilds[i].length != 2)
                return false;
        }

        return true;
    }
}

dealFields = new Deals.Deal();
var myPublisher = new Publisher(process.env.WEBHOOK_FOR_PUBLISH);
myPublisher.setMessage(dealFields.fields);
myPublisher.send();

exports.Publisher = Publisher;