export const driiink_api_response_parser = async (categories, products) => {
    const fullData = []

    categories.forEach(cat => {
        fullData.push({
            category: cat,
            products: []
        })
    })

    fullData.forEach(line => {
        let t = products.filter(product => product.category.name === line.category)
        line.products.push(t)
    });
    
    return fullData
}