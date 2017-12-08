import config from './config'

const wrappedFetch = (url, options) => {
    console.log(`Fetch - ${url} - `, options)
    return fetch(url, options)
        .catch(err => {
            console.error('Fetch error - ', err)
            throw err
        })
}

const getBasePath = () => `http://${config.get('HOST')}:${config.get('PORT')}${config.get('BASE_PATH')}/leds`

const reset = () => wrappedFetch(`${getBasePath()}/reset`, {method: 'POST'})

const rainbow = () => wrappedFetch(`${getBasePath()}/rainbow`, {method: 'POST'})

const xmas = () => wrappedFetch(`${getBasePath()}/xmas`, {method: 'POST'})

const off = () => wrappedFetch(`${getBasePath()}/solid`, {
    method: 'POST',
    body: JSON.stringify([1,1,1]),
})

const solid = color => wrappedFetch(`${getBasePath()}/solid`, {
    method: 'POST',
    body: JSON.stringify(color)
})

export default {
    reset,
    rainbow,
    xmas,
    solid,
    off
}
