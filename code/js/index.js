document.addEventListener('DOMContentLoaded', () => {

    const examples = document.querySelectorAll('#work .example');
    for(const example of examples) {
        example.addEventListener('click', e => {
            const flyover = e.currentTarget.querySelector('.flyover');

            flyover.classList.add('open');

            // if(e.target.tagName != 'A') {
            //     if(flyover.classList.contains('open')) {
            //         flyover.classList.remove('open');
            //     } else {
            //         flyover.classList.add('open');
            //     }
            // }
        });
    }

    const flyovers = document.querySelectorAll('#work .flyover');
    for(const flyover of flyovers) {
        flyover.addEventListener('click', e => {
            const over = e.currentTarget;

            if(over.classList.contains('open')) {
                over.classList.remove('open');
            } else {
                over.classList.add('open');
            }
        });
    }
});