export const getItem = key => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        console.log(`Error getting data from local storage by key: ${key}`)
        return null
    }
}

export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
        console.log('Error saving data in localStorage')
    }
}
