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
    const review = reviewsTemplate.content.cloneNode(true);

    review.getElementById('name_s').textContent = reviewDetails['name'];

    review.getElementById('body_s').textContent = reviewDetails['body'];

    reviewsContainer.appendChild(review);
}

async function fetchData() {
    const reviewsContainer = document.getElementById('rev_container');
    const loadingContainer = document.getElementById('loading_container');
    const dataArray = [];

    for (let i = 0; i < 6; i++) {
        try {
            let rand = Math.floor(Math.random() * 499);
            const userData = await fetchDataFilter(rand, i);

            dataArray.push(userData)
        } catch (error) {
            return;
        }
    }

    for (const data of dataArray) {
        update(data);
    }

    loadingContainer.style.display = 'none';
    reviewsContainer.style.display = 'block';
}

setTimeout(function () {
    fetchData();
}, 2000);
