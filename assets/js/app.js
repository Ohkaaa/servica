document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const message = document.getElementById('reviewMessage').value;

    const reviewContainer = document.getElementById('reviewsContainer');
    const newReview = document.createElement('div');
    newReview.classList.add('review', 'mb-4', 'p-3', 'border', 'rounded', 'shadow');

    newReview.innerHTML = `
        <p><strong>${name}</strong> - <em>${rating} Stars</em> <br><small>${new Date().toLocaleDateString()}</small></p>
        <p>"${message}"</p>
    `;

    reviewContainer.appendChild(newReview);
    document.getElementById('reviewForm').reset();
});