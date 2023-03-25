const mongoose = require('mongoose').default;
const dotenv = require('dotenv');
const maptoolz = require('maptoolz');
const { WebhookClient } = require('discord.js');

dotenv.config({path:'../.env'})


// Create a personnal alert to send
const createPersonalAlert = async (req, res) => {
    const { title, lon, lat} = req.body;
    const date = new Date();
    const time = date.toLocaleTimeString(); 
    const webhookClient = new WebhookClient({ url: DISCORD_URL });
    const coordinates = maptoolz.toDMS([lat,lon]);

    switch (title) {
        case 'Animal Attack' :
            return webhookClient.send({
                content: `A user life is threaten after encountering a dangerous animal, here's the location : ${coordinates[0].lat},${coordinates[0].long} where the signals was sent at ${time}. This message is automated.`,
                username: 'Emergency bot',
                avatarURL: 'https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
            });
        case 'No ressources' :
            return webhookClient.send({
                content: `A user life is threaten from lack of life supplies, here's the location : ${coordinates[0].lat},${coordinates[0].long} where the signals was sent at ${time}. This message is automated.`,
                username: 'Emergency bot',
                avatarURL: 'https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
            });
        case 'Lost' :
            return webhookClient.send({
                content: `A user life is threaten, the user is lost and can't find his way out, here's the location : ${coordinates[0].lat},${coordinates[0].long} where the signals was sent at ${time}. This message is automated.`,
                username: 'Emergency bot',
                avatarURL: 'https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
            });
        case 'Unsafe' :
            return webhookClient.send({
                content: `A user is feeling threaten by someone, here's the location : ${coordinates[0].lat},${coordinates[0].long} where the signals was sent at ${time}. This message is automated.`,
                username: 'Emergency bot',
                avatarURL: 'https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
            });
        case 'Injured' :
            return webhookClient.send({
                content: `A user life is threaten from an injury, here's the location : ${coordinates[0].lat},${coordinates[0].long} where the signals was sent at ${time}. This message is automated.`,
                username: 'Emergency bot',
                avatarURL: 'https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
            });
        case 'Stucked' :
            return webhookClient.send({
                content: `A user life is threaten and is being stuck with no way out, here's the location : ${coordinates[0].lat},${coordinates[0].long} where the signals was sent at ${time}. This message is automated.`,
                username: 'Emergency bot',
                avatarURL: 'https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
            });
        default :
            return webhookClient.send({
                content: `SOS`,
                username: 'Emergency bot',
                avatarURL: 'https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
            });
    }
}

module.exports = {
    createPersonalAlert,
}