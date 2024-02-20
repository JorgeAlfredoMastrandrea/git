// esto es un helper, una función que vamos a asilar para que
// el código quede mas ordenado
export const fetchData = async (endPoint) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        const data = await response.json();
        return {
            data , 
            isLoading : false
        }
    } catch (error) {
        console.log(error)
    }
}