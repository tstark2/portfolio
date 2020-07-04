document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.getElementsByClassName('opener');
    
    for(const button of openButtons) {
        button.addEventListener('touchstart', e => {
            const opened = document.querySelectorAll('.flyover.open');
            for(const open of opened) {
                open.classList.remove('open');
            }

            const flyover = e.currentTarget.parentElement.querySelector('.flyover');
            flyover.classList.add('open');
        });
    }

    const flyovers = document.getElementsByClassName('flyover');
    for(const flyover of flyovers) {
        flyover.addEventListener('touchstart', e => {
            if(e.target.tagName !== 'A') {
                flyover.classList.remove('open');
            }
        });
    }

    document.getElementById('copyYear').textContent = new Date().getFullYear();
});