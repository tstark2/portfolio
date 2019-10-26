document.addEventListener('DOMContentLoaded', () => {

    // if touch is enabled, respond to touch events
    window.addEventListener('touchstart', () => {
        document.getElementById('work').classList.remove('hover');
    });

    const examples = document.querySelectorAll('#work:not(hover) .example');
    for(const example of examples) {
        example.addEventListener('touchend', e => {
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