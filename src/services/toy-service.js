import { storageService } from './async-storage-service.js'
import axios from 'axios'

export const toyService = {
    save,
    query,
    remove,
    getById,
    getEmptyToy
}

// const TOYS_KEY = 'toysDB'
const API_URL = `http://localhost:3031/api/toy`

// _createToys()

function query() {
    return axios.get(API_URL)
        .then(res => res.data)
        .catch(err => {
            throw err
        })
    // return storageService.query(TOYS_KEY)
}

function remove(_id) {
    return axios.delete(`${API_URL}/${_id}`)
    // return storageService.remove(TOYS_KEY, _id)
}

function getById(_id) {
    // return storageService.get(TOYS_KEY, _id)
    return axios.get(`${API_URL}/${_id}`)
        .then(res => res.data)
        .then(toy => {
            toy.reviews = [{
                txt: 'It was great!',
                createdAt: Date.now()
            }]
            return toy
        })
        .catch((err) => {
            throw err
        })
}

function save(toy) {
    return toy._id ? _update(toy) : _add(toy)
}

function _update(toy) {
    return axios.put(API_URL, toy)
        .then(res => res.data)
        .catch(err => { throw err })
    // return storageService.put(TOYS_KEY, toy)
}

function _add(toy) {
    toy.createdAt = Date.now()
    return axios.post(API_URL, toy)
        .then(res => res.data)
        .catch(err => { throw err })
    // return storageService.post(TOYS_KEY, toy)
}

function getEmptyToy() {
    return {
        _id: ``,
        name: ``,
        price: 123,
        labels: [],
        createdAt: 0,
        inStock: true
    }
}

// For use in frontend testing only
function _createToys() {
    query()
        .then(toys => {
            if (!toys || !toys.length) {
                return storageService.postMany(TOYS_KEY, _getData())
            }
        })
        .catch(err => console.log('couldnt create toys', err))
}

function _getData() {
    return [
        {
            '_id': '41',
            'name': 'lacus sollicitudin',
            'price': 5,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1992-01-02T07:22:15.527Z',
            'inStock': false
        },
        {
            '_id': '42',
            'name': 'egestas odio',
            'price': 58,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1985-01-16T21:56:31.812Z',
            'inStock': true
        },
        {
            '_id': '43',
            'name': 'sed in',
            'price': 42,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1972-08-23T21:23:33.227Z',
            'inStock': true
        },
        {
            '_id': '44',
            'name': 'sed malesuada',
            'price': 81,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1997-08-23T21:48:37.635Z',
            'inStock': true
        },
        {
            '_id': '45',
            'name': 'tincidunt sit',
            'price': 80,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1987-05-04T18:19:07.719Z',
            'inStock': false
        },
        {
            '_id': '46',
            'name': 'sit adipiscing',
            'price': 62,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1987-05-24T05:10:20.385Z',
            'inStock': true
        },
        {
            '_id': '47',
            'name': 'malesuada nullam',
            'price': 87,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1996-11-03T17:53:36.252Z',
            'inStock': true
        },
        {
            '_id': '48',
            'name': 'tellus sed',
            'price': 65,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1994-03-06T05:38:22.239Z',
            'inStock': false
        },
        {
            '_id': '49',
            'name': 'sed ac',
            'price': 86,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1975-07-09T02:49:17.140Z',
            'inStock': true
        },
        {
            '_id': '50',
            'name': 'porttitor eros',
            'price': 65,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1981-04-14T19:27:35.805Z',
            'inStock': true
        },
        {
            '_id': '51',
            'name': 'non magna',
            'price': 12,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1995-12-08T04:15:20.430Z',
            'inStock': true
        },
        {
            '_id': '52',
            'name': 'nec tempor',
            'price': 68,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1990-06-20T12:06:48.197Z',
            'inStock': true
        },
        {
            '_id': '53',
            'name': 'odio eget',
            'price': 51,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1994-06-13T21:12:31.058Z',
            'inStock': false
        },
        {
            '_id': '54',
            'name': 'pulvinar orci',
            'price': 87,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1989-05-02T03:20:58.435Z',
            'inStock': false
        },
        {
            '_id': '55',
            'name': 'consequat tincidunt',
            'price': 14,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1986-06-13T11:22:03.188Z',
            'inStock': false
        },
        {
            '_id': '56',
            'name': 'ante malesuada',
            'price': 68,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1975-10-01T21:45:53.316Z',
            'inStock': true
        },
        {
            '_id': '57',
            'name': 'magna magna',
            'price': 55,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1974-07-17T00:34:23.841Z',
            'inStock': false
        },
        {
            '_id': '58',
            'name': 'porttitor augue',
            'price': 62,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1994-05-25T01:11:37.409Z',
            'inStock': true
        },
        {
            '_id': '59',
            'name': 'sit ac',
            'price': 98,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1979-03-04T08:25:54.914Z',
            'inStock': true
        },
        {
            '_id': '60',
            'name': 'lacus in',
            'price': 22,
            'labels': ['Doll', 'Battery Powered', 'Baby'],
            'createdAt': '1977-10-04T13:34:40.613Z',
            'inStock': false
        }
    ]
}