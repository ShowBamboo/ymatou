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