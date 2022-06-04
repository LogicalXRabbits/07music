const { prefix } = require("../../config.js");

module.exports ={
name: "ready",
run: async (client) => {
    client.logger.log(`${client.user.username} online!`, "ready");
    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`, "ready");
   
    let statuses = ['/help', `OFFICIAL 07 BOT MUSIC`];
    setInterval(function() {
  	let status = statuses[Math.floor(Math.random()*statuses.length)];		
        client.user.setPresence({
            activities: [
                {
                    name: status,
                    type: "WATCHING"
                }
            ],
            status: "Do Not Distrub"
        });
    }, 10000)
 }
};
