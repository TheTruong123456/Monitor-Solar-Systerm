import { createStore } from 'vuex'

const timeNow = Date.parse(new Date())

const store = createStore({
    state: {
        token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuZ3V5ZW50aGV0cnVvbmcwMjExOTlAZ21haWwuY29tIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJ1c2VySWQiOiI1NTRjM2Y0MC1kMmExLTExZWItOGQ0ZC05ZjA4ZmRjNjU3ZGIiLCJlbmFibGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiMmM5OGVmODAtZDJhMS0xMWViLThkNGQtOWYwOGZkYzY1N2RiIiwiY3VzdG9tZXJJZCI6IjEzODE0MDAwLTFkZDItMTFiMi04MDgwLTgwODA4MDgwODA4MCIsImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNjMxNjAyMzk2LCJleHAiOjE2MzE2MTEzOTZ9.rv4e-5v-X17Q8BWjiG5HkgWsQQG855bchkX94-BmSLCR-GgXhXRBpUlbZp_9AQ_ZpSyh8jJAc1zQiCDncPtgdA",
        timeNow: timeNow,
        time1dAgo: timeNow - 24 * 3600 * 1000,
        idDevice: "",
        idStation: "",
        dataListDevice: [],
    },
})

export default store