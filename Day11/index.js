// const key = document.querySelector('.keyname');
// const code = document.querySelector('.code');
// const keyCode = document.querySelector('.keycode');
const KEY = document.querySelector('.key');

// window.addEventListener('keydown', (e) => {
//     key.textContent = e.key;
//     code.textContent = e.code;
//     keyCode.textContent = e.keyCode;
// });

window.addEventListener('keydown', (e) => {
    // KEY.insertHTML = `
    // <div class="key">
    //     ${e.key === ' ' ? 'Space' : e.key}
    //     <small>event.key</small>
    //     document.getElementById('key').innerHTML = e.key;
    // </div>
    // `;
    document.querySelector('.keyname').innerHTML = e.key;
    document.querySelector('.code').innerHTML = e.code;
    document.querySelector('.keycode').innerHTML = e.keyCode;
});