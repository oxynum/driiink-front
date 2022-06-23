export const parseCategories = async (products) => {
    let categories = []
    products.forEach(product => {
        if (!categories.includes(product.category.name)){
            categories.push(product.category.name)
        }
    });
    return categories
}