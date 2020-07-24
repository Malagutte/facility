const { Kafka } = require("kafkajs");

const yargs = require('yargs');

const argv = yargs
    .option('type', {
        alias: 't',
        description: 'Class Event java',
        type: 'string',
    })
    .option('command', {
        alias: 'c',
        description: 'Topic command kafka',
        type: 'string',
    })
    .option('event', {
        alias: 'e',
        description: 'Topic event kafka',
        type: 'string',
    })
    .option('url', {
        alias: 'u',
        type: 'string',
    })
    .argv;




console.log("Type: " + argv.type + " Command: " + argv.command + " Event: " + argv.event + " Url: "+ argv.url);

(async () => {
  const kafka = new Kafka({
    brokers: [argv.url]
    // brokers: ["localhost:9092"]
  });

  const consumer = kafka.consumer({
    groupId: `robot${new Date().getTime()}`
  });

  await consumer.subscribe({
    topic: argv.command,
    fromBeginning: false
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      
      let jsonString = message.value.toString();
      const json = JSON.parse(jsonString);
      const rigthJson = parseMessage(json);
      console.log("\n"+rigthJson);
      posta(kafka, rigthJson);
    }
  });
})();

const parseMessage = ({commandStatusEnum,...others})=>{
  return JSON.stringify(others);
}

let typeH = argv.type;
let bff = Buffer.alloc(typeH.length, typeH);



const posta = async (kafka, value) => {
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic: argv.event,
    messages: [
      {
        value,
        headers: {
          type: bff
        }
      }
    ]
  });
  console.log("\ntask: " + JSON.parse(value).taskId + "  evento gerado !!!")
  await producer.disconnect();
};
