// Load CSS based on user's options.
chrome.storage.sync.get({
    notifications: true,
    counters: true,
    buttons: true
}, function(items) {
    var head = document.getElementsByTagName('head')[0];

    if (items.notifications) {
        console.log("Unlikeable: Removing reaction and like notifications.");
        var notificationsCss = document.createElement('link');
        notificationsCss.setAttribute('rel', 'stylesheet');
        notificationsCss.setAttribute('type', 'text/css');
        notificationsCss.setAttribute('href',
                chrome.runtime.getURL('notifications.css'));
        head.appendChild(notificationsCss);
    }

    if (items.counters) {
        console.log("Unlikeable: Removing reactio and like counters.");
        var countersCss = document.createElement('link');
        countersCss.setAttribute('rel', 'stylesheet');
        countersCss.setAttribute('type', 'text/css');
        countersCss.setAttribute('href',
                chrome.runtime.getURL('counters.css'));
        head.appendChild(countersCss);
    }

    if (items.buttons) {
        console.log("Unlikeable: Removing reaction and like buttons.");
        var buttonsCss = document.createElement('link');
        buttonsCss.setAttribute('rel', 'stylesheet');
        buttonsCss.setAttribute('type', 'text/css');
        buttonsCss.setAttribute('href', chrome.runtime.getURL('buttons.css'));
        head.appendChild(buttonsCss);
    }
});
