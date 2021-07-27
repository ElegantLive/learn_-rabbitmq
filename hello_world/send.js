var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (error, conn) {
    if (error) {
        throw error;
    }
    conn.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'hello';
        var msg = 'Hello world';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });

    // setTimeout(function() {
    //     conn.close();
    //     process.exit(0)
    // }, 500);
})
