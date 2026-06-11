async function generate() {
    const categoryText = document.getElementById("category-text");
    const flavor1Text = document.getElementById("flavor1");
    const flavor2Text = document.getElementById("flavor2");
    const flavor3Text = document.getElementById("flavor3");

    const flavors = await fetch('flavors.txt');
    let flavorsText = await flavors.text()
    flavorsText = flavorsText.split("\n")
        .map(word => word.trim());

    const categories = await fetch ("baked_goods.txt");
    let categoriesText = await categories.text()
    categoriesText = categoriesText.split("\n")
        .map(word => word.trim());

    categoryText.innerText = categoriesText[Math.floor(Math.random() * categoriesText.length)];
    flavor1Text.innerText = flavorsText[Math.floor(Math.random() * flavorsText.length)];
    flavor2Text.innerText = flavorsText[Math.floor(Math.random() * flavorsText.length)];
    flavor3Text.innerText = flavorsText[Math.floor(Math.random() * flavorsText.length)];
}
document.getElementById("button").addEventListener("click", generate);