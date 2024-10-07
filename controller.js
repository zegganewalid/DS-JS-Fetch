import { fetchData, parseProducts } from './model.js';
import { displayProducts } from './view.js';

export class ProductController {
    constructor(searchBar, inStockCheckbox, productList) {
        this.searchBar = searchBar;
        this.inStockCheckbox = inStockCheckbox;
        this.productList = productList;
        this.products = [];
    }

    async loadProducts() {
        try {
            const data = await fetchData(); 
            this.products = parseProducts(data);
            displayProducts(this.products, this.productList);
        } catch (error) {
            console.error('Error loading products:', error);
        }
    }

    filterProducts() {
        const searchTerm = this.searchBar.value.toLowerCase();
        const inStockOnly = this.inStockCheckbox.checked;

        const filteredProducts = this.products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            const matchesStock = !inStockOnly || product.stocked;
            return matchesSearch && matchesStock;
        });

        displayProducts(filteredProducts, this.productList);
    }

    initialize() {
        this.loadProducts();
        this.searchBar.addEventListener('input', () => this.filterProducts());
        this.inStockCheckbox.addEventListener('change', () => this.filterProducts());
    }
}
