import axios from 'axios'

const track = axios.create({
    baseURL: 'http://api.ka1024.com/track'
})

track.interceptors.response.use(
    res => {
        if (res.status < 400) return {
            code: res.status,
            message: res.message ? res.message : 'Success',
            data: res.data
        }
        return {
            code: res.status,
            message: res.message
        }
    },
    err => {
        return {
            code: err.response.data.statusCode,
            message: err.response.data.message
        }
    }
)

class Track {
    constructor(params) {
        const {
            PUid
        } = params
        this.PUid = PUid
    }
    async timer(params) {
        try {
            await track.get('/timer/set', {
                params: Object.assign(params, {
                    PUid: this.PUid
                })
            })
        } catch (err) {
            throw new Error(err)
        }
    }
    async event(params) {
        try {
            await track.get('/events/set', {
                params: Object.assign(params, {
                    PUid: this.PUid
                })
            })
        } catch (err) {
            throw new Error(err)
        }
    }
    async error(params) {
        try {
            await track.get('/error/set', {
                params: Object.assign(params, {
                    PUid: this.PUid
                })
            })
        } catch (err) {
            throw new Error(err)
        }
    }
}
//导出
export default Track