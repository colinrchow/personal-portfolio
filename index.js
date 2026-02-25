const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const emailForm = document.getElementById('email-form')


setTimeout(function(){
    modal.style.display = 'inline'
}, 3000)

closeBtn.addEventListener("click", function(){
    modal.style.display = 'none'
})

emailForm.addEventListener('submit', function(e){
    e.preventDefault()
    const emailFormData = new FormData(emailForm)
    const firstName = emailFormData.get('firstName')
    document.getElementById('modal-inner').innerHTML = `
        <h1 class="modal-title">Thanks for signing up 
            <span>${firstName}!</span>
        </h1>`
})