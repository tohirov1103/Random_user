const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

// 2-API
const modeLocal = localStorage.getItem('mode');

if(modeLocal){
    body.classList.add('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
}
//1-dark mode
const toggleModeBtn = ()=>{
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
}
// toggleModeBtn()
darkBtn.addEventListener('click', ()=>{
   toggleModeBtn()
    localStorage.setItem('mode', 'dark-mode')
})
lightBtn.addEventListener('click',()=>{
   toggleModeBtn()
   localStorage.setItem('mode', '')
})