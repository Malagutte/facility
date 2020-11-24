const { Kafka } = require("kafkajs");
var faker = require('faker');
const { v4: uuidv4 } = require('uuid');

const type = "CreateNotificationCommand";
const topicName = "qa_topic_notification_commands";
const urlKafka = "kafkasquadcrm.lpsbr.com:9092";
const userId = "PESS600484";
const amountNotification = 1000;
const typeBuffer = Buffer.alloc(type.length, type);
const kafka = new Kafka({ brokers: [urlKafka] });



const posta = async (value) => {
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic: topicName,
    messages: [
      {
        value,
        headers: {
          type: typeBuffer
        }
      }
    ]
  });
  console.log("\ntask: " + JSON.parse(value).task_id + "  evento gerado !!!")
  await producer.disconnect();
};


const createCommand = (userId) => {

  const command = {
    task_id: uuidv4(),
    user_id: userId,
    icon: "CREATED_FAC",
    cleared: false,
    read: false,
    date: new Date().toISOString(),
    title: "fac gerada para teste",
    type: "FAC",
    url:"/fac?=12321231",
    description: "Essa notificação está sendo gerada para teste de limpar notificações"
  }

  return JSON.stringify(command)

}


const sendCommands = async () => {
  for (i = 0; i < amountNotification; i++) {
    const value = createCommand(userId)
    console.log(`Notification ${value}`)
    await posta(value)
    console.log("==============================================")
  }
}


sendCommands();