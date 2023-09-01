const categoriesContainer = document.getElementById('categories')
const videosContainer = document.getElementById('videos')

// load all categories
const loadCategories = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const result = await res.json();
    const data = result.data;
    displayCategories(data)
}
// set all categories in categories container
const displayCategories = (categories) => {
    categories.forEach(item => {
        const button = document.createElement("button");
        button.innerText = `${item.category}`;
        button.setAttribute('class', `btn ${item.category}`)
        button.setAttribute('onclick', `loadVideos(${item.category_id})`)        
        categoriesContainer.appendChild(button)
    })
}

loadCategories()

// load all videos for individual category
const loadVideos = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const result = await res.json();
    const data = result.data;
    displayAllVideos(data);
}

const displayAllVideos = (videos) => {
    videosContainer.innerText = "";
    videos.forEach(video => {
        console.log(video);
        const div = document.createElement("div");
        div.className = "card cursor-pointer border-2";
        div.innerHTML = `
        <figure>
            <img src="${video.thumbnail}" alt="video" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${video.title}</h2>
            <span>${video?.authors[0]?.profile_name}</span>
            <span>${video?.others?.views} views</span>
        </div>
        `
        videosContainer.appendChild(div)
    })
}