// https://developer.chrome.com/docs/extensions/reference/action/
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: "https://leetcode.com/playground/new/empty", index: tab.index + 1 });
});
