document.addEventListener('DOMContentLoaded', () => {

    const examples = document.querySelectorAll('#work .example');
    for(const example of examples) {
        example.addEventListener('mouseover', e => {
            const flyover = e.currentTarget.querySelector('.flyover');
            flyover.classList.add('open');
        });

        example.addEventListener('mouseout', e => {
            const flyover = e.currentTarget.querySelector('.flyover');
            flyover.classList.remove('open');
        });

        example.addEventListener('touchstart', e => {
            const flyover = e.currentTarget.querySelector('.flyover');

            if(flyover.classList.contains('open')) {
                flyover.classList.remove('open');
            } else {
                flyover.classList.add('open');
            }
        });
    }
});