const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Express server for uptime pinging
app.get('/', (req, res) => res.send('Bot is online!'));
app.listen(port, () => console.log(`Server running on port ${port}`));

// Create Discord client
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Ready event
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Message event
client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

// Login to Discord
client.login(MTM2MDUzNzgwMTM1MDk3NTYwOA.GuJrV5.05WI1nzHq-7J6uEera5VcJn5S06o0rpv8iYpcs); // Replace with your bot token
