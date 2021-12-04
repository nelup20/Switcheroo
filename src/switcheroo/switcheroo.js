

const isActiveSwitch = document.getElementById("isActiveSwitch");
const addRuleBtn = document.getElementById("addRuleButton");
const table = document.getElementsByTagName("table")[0];

let isActive = browser.storage.sync.get("switcherooActive").then(res => res.switcherooActive === undefined ? true : res.switcherooActive);
let rows = [];

isActiveSwitch.checked = isActive;

isActiveSwitch.addEventListener("change", e => {
    browser.storage.sync.set({
        switcherooActive: e.target.checked
    });
})

addRuleBtn.addEventListener("click", addRow);

function addRow(){
    let newRow = table.insertRow();
    let newCell1 = newRow.insertCell();
    let newCell2 = newRow.insertCell();
    let newCell3 = newRow.insertCell();
    let newCell4 = newRow.insertCell();
    let newCell5 = newRow.insertCell();

    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";

    let newTextInput1 = document.createElement("input");
    newTextInput1.type = "text";

    let newTextInput2 = document.createElement("input");
    newTextInput2.type = "text";

    let newSwitchInput = document.createElement("label");
    newSwitchInput.classList.add("switch");
    newSwitchInput.classList.add("small");
    newSwitchInput.appendChild(newCheckbox);
    let newSwitchInputSpan = document.createElement("span");
    newSwitchInputSpan.classList.add("slider");
    newSwitchInputSpan.classList.add("small");
    newSwitchInputSpan.classList.add("round");
    newSwitchInput.appendChild(newSwitchInputSpan);

    let newDeleteBtn = document.createElement("button");
    newDeleteBtn.innerText = "Delete";
    newDeleteBtn.addEventListener("click", e => deleteRow(e.target.parentNode.parentNode));

    newCell1.appendChild(newCheckbox);
    newCell2.appendChild(newTextInput1);
    newCell3.appendChild(newTextInput2);
    newCell4.appendChild(newSwitchInput);
    newCell5.appendChild(newDeleteBtn);

    rows.push(newRow);
}

function deleteRow(rowToDelete){
    rowToDelete.parentNode.removeChild(rowToDelete);
    rows.splice(rows.findIndex(row => row === rowToDelete), 1);
}
