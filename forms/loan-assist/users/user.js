var API_URL = 'https://base-forms.onrender.com/api';
const cookie = document.cookie.split('jwt=')[1]

function fetchAndPopulateUser() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    if(!userId) {
        console.error('No blog post ID provided in the URL.');
    }

    fetch(`${API_URL}/form/${userId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.form);
        })
        .catch(error => {
            console.error('Error fetching articles:', error);
        });
}

document.addEventListener('DOMContentLoaded', fetchAndPopulateUser);