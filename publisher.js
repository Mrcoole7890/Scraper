const { Webhook, MessageBuilder } = require('discord-webhook-node');
const dotenv = require('dotenv').config();
const hook = new Webhook(process.env.WEBHOOK_FOR_PUBLISH);
 
dealFields = [
    ["Name", "Kobalt - Blue Black Polyester 13.5-in Backpack"],
    ["MSRP", "$59.98"],
    ["Min Price", "$0.02"],
    ["Percent Off", "100%"],
    ["SKU", "5013497799"],
    ["In-Store Item Number", "5064410"],
    ["Barcode", "N/A"],
    ["Sold Listings", "N/A"],
    ["Brickseek", "N/A"],
    ["Amazon Products", "N/A"],
    ["Store Info", "N/A"]
]


const embed = new MessageBuilder()
.setTitle(dealFields[0][1])
.setColor('#00b0f4')
.setThumbnail('https://mms-images.out.customink.com/mms/images/catalog/0a5035381454c4f36514087bde93df70/colors/661402/views/alt/front_medium.png?placeMax=1&placeMaxPct=0.8&placeUseProduct=1&placeUseView=front&ixbg=%23ffffff&ixfm=jpeg&ixq=60&ixw=412&autoNegate=1&design=nmp0-00cm-q9ga&digest=000000028&imembroider=1')

for (var i = 1; i < dealFields.length; i++)
    embed.addField(dealFields[i][0], dealFields[i][1])
 
hook.send(embed);