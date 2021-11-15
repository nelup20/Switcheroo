
const data = [
    // {toReplace: "API", replacement: "Fancy beepboop thing"},
    // {toReplace: "Browser", replacement: "Addiction Interface"},
    // {toReplace: "manifest.json", replacement: "Idk123"}
]

// TODO: this is a bad idea from a security standpoint...
let result = document.body.innerHTML;

data.forEach(d => result = result.replaceAll(d.toReplace, d.replacement));

document.body.innerHTML = result;
