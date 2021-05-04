const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1iQOuYierK8Iw9OCts4N2hs98wgtuSoRyGBKnPX5403I')

const run = async() => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
        console.log(doc.title)
}
run()

