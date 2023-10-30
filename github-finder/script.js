import { token } from './token.js'

const inputEl = document.getElementById('search_bar')
inputEl.addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
        searchUser(e.target.value)
    }
})

function searchUser(value) {
    getUser(value)
}

async function getUser(value) {
    const headers = {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28"
    }
    const api_url = `https://api.github.com/search/users?q=${value}`
    const response = await fetch(api_url, {
      method: "GET",
      headers: headers,
    });
    const result = await response.json();
    const { avatar_url, url } = result.items[0]

    console.log(result.items[0])
}

