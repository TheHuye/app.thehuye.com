const API_URL = 'http://localhost:3000/api/v1';
const cookie = document.cookie.split('jwt=')[1]

function userLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => {
    return response.json()
    })
    .then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
        if ( data.user.isAdmin === false) {
            const { token } = data;
            const expiryDate = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
            document.cookie = `jwt=${token}; Path=/; Expires=${expiryDate};`;

            localStorage.setItem('jwtToken', token);

            showError(data.message, '#10E956', 3000)
            setTimeout(function() {
                window.location.href = './articles.html';
            }, 3000);
        } else {
            const { token } = data;
            const expiryDate = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
            document.cookie = `jwt=${token}; Path=/; Expires=${expiryDate};`;

            localStorage.setItem('jwtToken', token);

            showError(data.message, '#10E956', 3000)
            setTimeout(function() {
                window.location.href = '../admin/index.html';
            }, 3000);
        }
        }
    })
    .catch(error => {
        showError(error.message);
    });
}

function userLogout(event){
    event.preventDefault();

    localStorage.removeItem('jwtToken');
    fetch(`${API_URL}/api/user/logout`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${cookie}`
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            showError(data.error)
        } else {
            document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
            localStorage.removeItem('jwt');
            showError(data.message, '#10E956', 3000)
        }
    })
    .catch(error => {
        showError(error.message);
        // console.error(error);
    });
}

function fetchAndPopulateBlogPost() {

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        fetch(`${API_URL}/api/article/${postId}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    updateBlogPostHtml(data.singleArticle);
                    // console.log(data.singleArticle);
                } else {
                    console.error('No data found for the blog post with ID:', postId);
                }
            })
            .catch(error => {
                console.error('Error fetching blog post:', error);
            });
    } else {
        console.error('No blog post ID provided in the URL.');
    }
}