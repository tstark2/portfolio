document.addEventListener('DOMContentLoaded', () => {

    const examples = document.querySelectorAll('#work .example');
    for(const example of examples) {
        example.addEventListener('mouseover', e => {
            const flyover = e.currentTarget.querySelector('.flyover');
            flyover.classList.add('open');
        });
    }
});