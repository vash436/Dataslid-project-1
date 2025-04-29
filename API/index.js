const base_url = "https://fakestoreapi.com/"

const getProductsAwait = async () => {
    try {
    const response = await fetch(`${base_url}products`)
    const data = await response.json()
    console.log(data, "data await")
} catch (error) {
    console.log('Error:', error):
}
}

const getProductsThen =