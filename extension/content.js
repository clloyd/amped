var ampLink = document.querySelector('link[rel="amphtml"]');

if (ampLink && ampLink.href) {
    chrome.runtime.sendMessage({amp: true, url: ampLink.href});
} else {
    chrome.runtime.sendMessage({amp: false });
}
