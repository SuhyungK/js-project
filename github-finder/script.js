import { API } from './token.js'

const inputEl = document.getElementById('search_bar')
inputEl.addEventListener('keydown', (e) => searchUser(e))

const loader = document.querySelector('.loader')

async function searchUser(e) {
    let userInfo = null
    if (e.code == 'Enter') {
        loader.style.display = 'block'
        getUserInfo(e.target.value)
            .then((res) => {
                loader.style.display = 'none'
                drawPage(res)
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

    // get section info
    const section = document.getElementById('section')

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
    blueLabel.innerHTML = 'Public Repos'
    const greyLabel = document.createElement('div')
    greyLabel.classList.add('grey_box', 'box')
    greyLabel.innerHTML = 'Public Gists'
    const greenLabel = document.createElement('div')
    greenLabel.classList.add('green_box', 'box')
    greenLabel.innerHTML = 'Followers'
    const turquoiseLabel = document.createElement('div')
    turquoiseLabel.classList.add('turquoise_box', 'box')
    turquoiseLabel.innerHTML = 'Following'
    
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

    infoArticle.append(leftDiv)
    infoArticle.append(rightDiv)

    section.append(infoArticle)
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