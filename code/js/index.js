document.addEventListener('DOMContentLoaded', () => {

    const examples = document.querySelectorAll('#work .example');
    for(const example of examples) {
        example.addEventListener('click', e => {
            const flyover = e.currentTarget.querySelector('.flyover');

            if(e.target.tagName != 'A') {
                if(flyover.classList.contains('open')) {
                    flyover.classList.remove('open');
                } else {
                    flyover.classList.add('open');
                }
            }
        });
    }
});