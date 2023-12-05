async function fetchDataFilter(rand) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${rand}`);
        if (response.status !== 200) {
            return { error: true, message: this.error.message };
        }

        return response.json();
    } catch (error) {
        const loadingContainer = document.getElementById('loading_container');
        const errorContainer = document.getElementById('error_container');

        loadingContainer.style.display = 'none'
        errorContainer.style.display = 'flex';

        return { error: true, message: this.error.message };
    }
}

function update(reviewDetails) {
    const reviewsTemplate = document.getElementById('rev_template');
    const reviewsContainer = document.getElementById('rev_container');
    const loadingContainer = document.getElementById('loading_container');

    const review = reviewsTemplate.content.cloneNode(true);

    review.getElementById('name_s').textContent = reviewDetails['name'];

    review.getElementById('body_s').textContent = reviewDetails['body'];

    reviewsContainer.appendChild(review);

    /*let newRev = document.createElement('ul');
    newRev.classList.add('rev_s')
    reviewsList.appendChild(newRev);

    let newName = document.createElement('il');
    newName.textContent = reviewDetails['name'];
    newName.classList.add('name_s')
    newRev.appendChild(newName);

    let newBody = document.createElement('li');
    newBody.textContent = reviewDetails['body'];
    newBody.classList.add('body_s')
    newRev.appendChild(newBody);*/

    loadingContainer.style.display = 'none';
    reviewsContainer.style.display = 'block';
}

async function fetchData() {
    for (let i = 0; i < 6; i++) {
        try {
            let rand = Math.floor(Math.random() * 499);
            const userData = await fetchDataFilter(rand, i);

            update(userData);
        } catch (error) {
            return;
        }
    }
}

setTimeout(function () {
    fetchData();
}, 2000);
