let saveEl = document.getElementById('save-el');

let count = 0;

document.getElementById('increment-btn').addEventListener('click', () => {
    count += 1;
    let newCount = document.getElementById('count').innerText = count;
});

function save() {
    let entries = count + ' - ';
    saveEl.innerText += ' ' + entries;
    count = 0;
    let newCount = document.getElementById('count').innerText = count;
}

function reset() {
    location.reload();
}