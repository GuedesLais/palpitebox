const { GoogleSpreadsheet } = require('google-spreadsheet')
const { getDomainLocale } = require('next/dist/next-server/lib/router/router')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1iQOuYierK8Iw9OCts4N2hs98wgtuSoRyGBKnPX5403I')

const run = async() => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    //Nome	E-mail	Whatsapp	Cupom	Promo
    await sheet.addRow({
        Nome: 'Lais Guedes',
        Email: 'guedes.lais@gmail.com',
        Whatsapp: '982150000',
        Cupom: 'aaa111',
        Promo: 'asjhshga'
    })
        
}
run()

