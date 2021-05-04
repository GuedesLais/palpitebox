const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1iQOuYierK8Iw9OCts4N2hs98wgtuSoRyGBKnPX5403I')

const run = async() => {
    
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
        console.log(doc.title)

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:B2')
        console.log(sheet.title) 
        const mostrarPromocaoCell = sheet.getCell(1,0)
        console.log(mostrarPromocaoCell.value)

        const textoCell = sheet.getCell(1,1)
        console.log(textoCell.value)


}
run()
