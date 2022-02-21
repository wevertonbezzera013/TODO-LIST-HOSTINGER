document.querySelectorAll('.rows__button').forEach(button => {
    button.addEventListener('click', () =>{
        const rowsContent = button.nextElementSibling;

        button.classList.toggle('rows__button--active');

        if (button.classList.contains('rows__button--active')) {
            rowsContent.style.maxHeight = rowsContent.scrollHeight + 'px';
        } else {
            rowsContent.style.maxHeight = 0; 
        }
    })
})