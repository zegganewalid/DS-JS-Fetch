import { ProductController } from './controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const inStockCheckbox = document.getElementById('in-stock');
    const productList = document.getElementById('product-list');

    const productController = new ProductController(searchBar, inStockCheckbox, productList);
    productController.initialize();
});
