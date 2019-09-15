const AlertNotification = require('./notifications/AlertNotification/AlertNotification');

const notifications = [
  {
    type: "alert",
    label: "Alert",
    defaultValue: "This is a test alert",
    view: AlertNotification,
  },
  {
    type: "base",
    label: "Base",
    defaultValue: "This is a test base notification",
  },
  {
    type: "alert",
    label: "otherAleart",
    defaultValue: "This is a test alert",
    view: AlertNotification,
  },
  {
    type: "alert",
    label: "fourthAlert",
    defaultValue: "This is a test alert",
    view: AlertNotification,
  }
];


module.exports = notifications;
