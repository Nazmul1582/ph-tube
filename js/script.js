const categoriesContainer = document.getElementById('categories')

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
    console.log(data);
}

