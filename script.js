	const bar = document.getElementById('bar');
	const wrong = document.getElementById('wrong');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
    }
    if (wrong) {
        wrong.addEventListener('click', () => {
            nav.classList.remove('active');
        })
    }