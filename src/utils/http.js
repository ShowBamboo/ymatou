import axios from 'axios'

export const get = ({
    url,
    parms
}) => {
    return axios({
        url,
        parms
    }).then((result) => {
        return result.data
    }).catch((err) => {
        return err.message
    })
}

export const post = ({
    url,
    data
}) => {
    return axios({
        url,
        method: 'POST',
        data,
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            ret = ret.slice(0, -1)
            return ret
        }]
    }).then((result) => {
        return result.data
    }).catch((err) => {
        return err.message
    })
}