import { token } from './token.js'

export const API = {
    headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28"
    },
    URL: 'https://api.github.com/'
}

const inputEl = document.getElementById('search_bar')
inputEl.addEventListener('keydown', (e) => searchUser(e))

const loader = document.querySelector('.loader')

// get section info
const section = document.getElementById('section')

async function searchUser(e) {
    let userInfo = null 
    if (e.code == 'Enter') {
        section.innerHTML = ''
        loader.style.display = 'block'
        getUserInfo(e.target.value)
            .then((res) => {
                loader.style.display = 'none'
                drawPage(res)
                drawRepo(res.repoList)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

async function getUserInfo(value) {
    // GET search -users
    const { items } = await getApi(`search/users?q=${value}`)                           
    const { avatar_url, url, html_url, repos_url } = items[0]
    const { 
        company, 
        blog, 
        location, 
        public_repos, 
        public_gists,
        followers,
        following,
        created_at,
    } = await getApi(null, url) 
    const repoList = await getApi(null, repos_url+'?sort=updated')

    return {
        avatar_url,
        html_url,
        company, 
        blog, 
        location, 
        public_repos, 
        public_gists,
        followers,
        following,
        created_at,
        repoList
    }
}

function drawPage(userInfo) {

    // create element + add attributes
    const infoArticle = document.createElement('article')
    infoArticle.setAttribute('id', 'github_info')

    const leftDiv = document.createElement('div')
    const rightDiv = document.createElement('div')
    leftDiv.classList.add('tmp')
    rightDiv.classList.add('tmp')

    // left div
    const imgDiv = document.createElement('img')
    imgDiv.src = userInfo.avatar_url

    const viewProfileBtn = document.createElement('button')
    viewProfileBtn.classList.add('blue_box', 'primary_btn')
    viewProfileBtn.innerHTML = 'View Profile'

    // right div
    const infoLabelDiv = document.createElement('div')
    const blueLabel = document.createElement('div')
    blueLabel.classList.add('blue_box', 'box')
    blueLabel.innerHTML = 'Public Repos : ' + userInfo.public_repos
    const greyLabel = document.createElement('div')
    greyLabel.classList.add('grey_box', 'box')
    greyLabel.innerHTML = 'Public Gists : ' + userInfo.public_gists
    const greenLabel = document.createElement('div')
    greenLabel.classList.add('green_box', 'box')
    greenLabel.innerHTML = 'Followers : ' + userInfo.followers
    const turquoiseLabel = document.createElement('div')
    turquoiseLabel.classList.add('turquoise_box', 'box')
    turquoiseLabel.innerHTML = 'Following : ' + userInfo.following
    
    const tableEl = document.createElement('table')
    const row1 = tableEl.insertRow(0)
    row1.innerHTML = 'Company : ' + userInfo.company 
    const row2 = tableEl.insertRow(1)
    row2.innerHTML = 'Website/Blog : ' + userInfo.blog
    const row3 = tableEl.insertRow(2)
    row3.innerHTML = 'Location : ' + userInfo.location 
    const row4 = tableEl.insertRow(3)
    row4.innerHTML = 'Member Since : ' + userInfo.created_at 
    tableEl.classList.add('info_table')
    // repo 
    
    // change style
    leftDiv.style.width = '30%'
    leftDiv.style.textAlign = 'center'
    // leftDiv.style.display = 'flex'
    // leftDiv.style.flexDirection = 'row'
    // leftDiv.style.justifyContent = 'center'
    // leftDiv.style.alignItems = 'center'
    
    rightDiv.style.width = '70%'

    // append HTML
    leftDiv.append(imgDiv)
    leftDiv.append(viewProfileBtn)

    infoLabelDiv.append(blueLabel)
    infoLabelDiv.append(greyLabel)
    infoLabelDiv.append(greenLabel)
    infoLabelDiv.append(turquoiseLabel)
    
    rightDiv.append(infoLabelDiv)
    rightDiv.appendChild(tableEl)

    infoArticle.append(leftDiv)
    infoArticle.append(rightDiv)

    section.append(infoArticle)
}

function drawRepo(reposList) {
    const subTitle = document.createElement('p')
    subTitle.innerText = 'Latest Repository'
    subTitle.classList.add('sub_title')

    section.append(subTitle)

    const repoListDiv = document.createElement('div')
    for (const repo of reposList) {
        const { name, stargazers_count, watchers_count, forks } = repo

        const repoDiv = document.createElement('div')
        repoDiv.style.display = 'flex'
        repoDiv.classList.add('default_border', 'repo_div')
        const repoTitle = document.createElement('p')
        repoTitle.innerText = name
        repoTitle.style.width = '50%'
        const repoLabelList = document.createElement('div')
        repoLabelList.style.display = 'flex'
        const repoStarLabel = document.createElement('div')
        repoStarLabel.innerText = 'Stars: ' + stargazers_count
        repoStarLabel.classList.add('blue_box', 'box')
        const repoWatcherLabel = document.createElement('div')
        repoWatcherLabel.innerText = 'Watchers: ' + watchers_count
        repoWatcherLabel.classList.add('grey_box', 'box')
        const repoForkLabel = document.createElement('div')
        repoForkLabel.innerText = 'Forks: ' + forks
        repoForkLabel.classList.add('green_box', 'box')
        
        repoLabelList.append(repoStarLabel)
        repoLabelList.append(repoWatcherLabel)
        repoLabelList.append(repoForkLabel)
        repoDiv.append(repoTitle)
        repoDiv.append(repoLabelList)
        repoListDiv.append(repoDiv)
    }

    section.appendChild(repoListDiv)
}

async function getApi(params=null, url=null) {
    const api_url = url ? url : `${API.URL}${params}`
    const response = await fetch(api_url, {
      method: "GET",
      headers: API.headers,
    });
    const result = await response.json();
    return result
}