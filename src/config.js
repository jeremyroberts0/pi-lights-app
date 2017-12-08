const defaultConfig = {
    HOST: '192.168.40.205',
    PORT: '8080',
    BASE_PATH: '/pi-lights'
}

const currentConfig = Object.assign({ }, defaultConfig)

const get = (key, defaultVal) => {
    if (currentConfig[key]) return currentConfig[key]
    if (defaultVal) return defaulVal
    throw new Error(`Missing config ${key} and no defaultVal passed`)
}

const set = (key, value,) => {
    currentConfig[key] = value
}

const getAll = () => Object.assign({ }, currentConfig)

export default {
    get,
    set,
    getAll,
}