

const switchInput = document.querySelector("input");

let isActive = browser.storage.sync.get("switcherooActive").then(res => res.switcherooActive === undefined ? true : res.switcherooActive);

switchInput.checked = isActive;

switchInput.addEventListener("change", e => {
    browser.storage.sync.set({
        switcherooActive: e.target.checked
    });
})
