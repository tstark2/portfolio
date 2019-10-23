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

        // example.addEventListener('click', e => {
        //     const name = e.currentTarget.dataset.name
        //     window.location.assign(`workDetails.html?name=${name}`);
        // });
    }

    document.getElementById('menuButton').addEventListener('click', e => {
        document.getElementsByTagName('nav')[0].classList.add('open');

    });

    document.getElementsByTagName('nav')[0].addEventListener('click', e => {
        e.currentTarget.classList.remove('open');
    });
});