const mongoose = require("mongoose").default;
const dotenv = require("dotenv");
const maptoolz = require("maptoolz");
const { WebhookClient } = require("discord.js");

dotenv.config({ path: "../.env" });

// Create a personnal alert to send
const createPersonalAlert = async (req, res) => {
  try {
    const { title, lon, lat } = req.body;
    const date = new Date();
    const DISCORD_URL = process.env.DISCORD_INTEGRATION;
    const time = date.toLocaleTimeString();
    const webhookClient = new WebhookClient({ url: DISCORD_URL });
    const coordinates = maptoolz.toDMS([lat, lon]);

    switch (title) {
      case "Animal Attack":
        webhookClient.send({
          content: `A user life is threaten after encountering a dangerous animal, here's the location : ${coordinates[0].lat},${coordinates[0].long} where the signals was sent at ${time}. This message is automated.`,
          username: "Emergency bot",
          avatarURL:
            "https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        });
        return res.status(200).json("Call made");
      case "No ressources":
        webhookClient.send({
          content: `A user life is threaten from lack of life supplies, here's the location : ${coordinates[0].lat},${coordinates[0].long} where the signals was sent at ${time}. This message is automated.`,
          username: "Emergency bot",
          avatarURL:
            "https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        });
        return res.status(200).json("Call made");
      case "Lost":
        webhookClient.send({
          content: `A user life is threaten, the user is lost and can't find his way out, here's the location : ${coordinates[0].lat},${coordinates[0].long} where the signals was sent at ${time}. This message is automated.`,
          username: "Emergency bot",
          avatarURL:
            "https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        });
        return res
          .status(200)
          .json("SOS alert has been sent to the authorities");
      case "Unsafe":
        webhookClient.send({
          content: `A user is feeling threaten by someone, here's the location : ${coordinates[0].lat},${coordinates[0].long} where the signals was sent at ${time}. This message is automated.`,
          username: "Emergency bot",
          avatarURL:
            "https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        });
        return res
          .status(200)
          .json("SOS alert has been sent to the authorities");
      case "Injured":
        webhookClient.send({
          content: `A user life is threaten from an injury, here's the location : ${coordinates[0].lat},${coordinates[0].long} where the signals was sent at ${time}. This message is automated.`,
          username: "Emergency bot",
          avatarURL:
            "https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        });
        return res
          .status(200)
          .json("SOS alert has been sent to the authorities");
      case "Stucked":
        webhookClient.send({
          content: `A user life is threaten and is being stuck with no way out, here's the location : ${coordinates[0].lat},${coordinates[0].long} where the signals was sent at ${time}. This message is automated.`,
          username: "Emergency bot",
          avatarURL:
            "https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        });
        return res
          .status(200)
          .json("SOS alert has been sent to the authorities");
      default:
        webhookClient.send({
          content: `SOS`,
          username: "Emergency bot",
          avatarURL:
            "https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        });
        return res
          .status(200)
          .json("SOS alert has been sent to the authorities");
    }
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = {
  createPersonalAlert,
};
