console.log('ver 0.1.1')

function hello() {
    var qi =  {
        url: '*://*.youtube.com/*'
    }

    chrome.tabs.query(qi, function (tabs) {
        console.log("tabs.length: " + tabs.length)
        //tabs.forEach(function(t){
        //    chrome.tabs.highlight({windowId: tabs.windowId, tabs: t.index}, function(w) {})
        //})

        tabs.forEach(function (tab) {
            chrome.tabs.sendMessage(tab.id, {cmd: "pause"}, function (response) {
                console.log(response);
            });
        })
    })
}

chrome.browserAction.onClicked.addListener(function (tab) {
    hello();
});