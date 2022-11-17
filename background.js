browser.webNavigation['onCommitted'].addListener(function(data) {
    console.log(data)
    if (data.url.split('//')[1].split('/')[0] === "www.linkedin.com") {
        browser.tabs.executeScript(data.tabId, { file: "/content.js" });
    } else {
        console.log('load page : "%s" with id : %i', data.url, data.tabId);
    }
});