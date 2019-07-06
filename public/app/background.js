const blinkerSettings = {
  durationTime: 40000,
  message: 'Give your eyes a break and reduce your eye strain',
  reminderDuration: 40000
};
// eslint-disable-next-line
chrome.storage.sync.set(blinkerSettings, function() {});
// eslint-disable-next-line
chrome.storage.sync.get(['durationTime'], function(items) {
  console.log('durationTime', items);
});

// const options = {
//   type: 'basic',
//   title: 'It is a time to blink',
//   message: 'Give your eyes a break and reduce your eye strain',
//   priority: 1,
//   // items: [
//   //   {
//   //     title: 'It is a time to blink',
//   //     message: 'Give your eyes a break and reduce your eye strain'
//   //   }
//   // ],
//   iconUrl: 'icon.png'
// };

// function sendNotification() {
//   // eslint-disable-next-line
//   chrome.notifications.create('alert' + new Date(), options, function(id) {
//     // eslint-disable-next-line
//     console.log('Last error:', id, chrome.runtime.lastError);
//   });
// }

// eslint-disable-next-line
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('onMessage-->', request);
  if (request.durationTime) {
    blinkerSettings.durationTime = request.durationTime;
    // eslint-disable-next-line
    chrome.storage.sync.set(blinkerSettings, function() {});
  }
  // eslint-disable-next-line
  chrome.storage.sync.get(['durationTime'], function(items) {
    console.log('durationTime after onMessage', items);
  });
});
