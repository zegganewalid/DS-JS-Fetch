export const displayProducts = (products, productList) => {
    productList.innerHTML = '';

    const categories = getUniqueCategories(products);

    categories.forEach(category => {
        const categoryRow = document.createElement('tr');
        const categoryCell = document.createElement('td');
        categoryCell.textContent = category;
        categoryCell.classList.add('category');
        categoryCell.setAttribute('colspan', 2);
        categoryRow.appendChild(categoryCell);  
        productList.appendChild(categoryRow);

        const categoryProducts = products.filter(product => product.category === category);
        categoryProducts.forEach(product => {
            const productRow = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;

            if (!product.stocked) {
                nameCell.classList.add('out-of-stock');
            }

            const priceCell = document.createElement('td');
            priceCell.textContent = product.price;

            productRow.appendChild(nameCell);
            productRow.appendChild(priceCell);
            productList.appendChild(productRow);
        });
    });
};

const getUniqueCategories = (products) => {
    const categories = new Set();
    products.forEach(product => categories.add(product.category));
    return Array.from(categories);
};

