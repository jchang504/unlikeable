var INPUT_SELECTOR = 'input';
var INPUT_NOTIFICATIONS_SELECTOR = 'input[name="notifications"]';
var INPUT_COUNTERS_SELECTOR = 'input[name="counters"]';
var INPUT_BUTTONS_SELECTOR = 'input[name="buttons"]';
var OPTIONS_FORM_SELECTOR = '#options';
var SAVE_BUTTON_SELECTOR = '#save';
var CHECKED = ':checked';
var DISABLED = 'disabled';

// Saves options to chrome.storage.sync.
function saveOptions() {
    chrome.storage.sync.set({
        notifications: $(INPUT_NOTIFICATIONS_SELECTOR).is(CHECKED),
        counters: $(INPUT_COUNTERS_SELECTOR).is(CHECKED),
        buttons: $(INPUT_BUTTONS_SELECTOR).is(CHECKED)
    }, function() {
        // Disable save button to indicate that options are saved.
        $(SAVE_BUTTON_SELECTOR).prop(DISABLED, true);
    });
    return false;
}

// Restores options as previously stored in chrome.storage.sync.
function restoreOptions() {
    // Default values.
    chrome.storage.sync.get({
        notifications: true,
        counters: true,
        buttons: true,
    }, function(items) {
        $(INPUT_NOTIFICATIONS_SELECTOR).prop('checked', items.notifications);
        $(INPUT_COUNTERS_SELECTOR).prop('checked', items.counters);
        $(INPUT_BUTTONS_SELECTOR).prop('checked', items.buttons);
    });
}

function enableSaveButton() {
    $(SAVE_BUTTON_SELECTOR).prop(DISABLED, false);
}

// Load stored options.
$(document).ready(restoreOptions);

// Set up save button.
$(OPTIONS_FORM_SELECTOR).submit(saveOptions);
$(SAVE_BUTTON_SELECTOR).prop(DISABLED, true);
$(INPUT_SELECTOR).change(enableSaveButton);
