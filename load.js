window.onload = load

function load() {
    document.getElementById('Header').innerHTML = `
        <div id="Banner" onclick="location.href = 'index.html'">pupungeggang6's blog</div>
    `
    document.getElementById('UpperBar').innerHTML = `
    `
}

function addBack() {
    const buttonBack = document.createElement('button')
    document.body.appendChild(buttonBack)
}
