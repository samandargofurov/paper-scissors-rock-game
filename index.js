const rulesBtn = document.querySelector('.rules-btn')
const close = document.querySelector('.close-icon')
const modal = document.querySelector('.modal')


rulesBtn.addEventListener('click', () => {
    modal.classList.toggle('show-modal')
})

close.addEventListener('click', () => {
    modal.classList.toggle('show-modal')
})