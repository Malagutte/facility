const usersId = ["PESS1949929", "PESS1943487", "PESS1932755", "PESS1929124", "PESS1926156", "PESS1925234", "PESS1919654", "PESS1919653", "PESS1913849", "PESS1902593", "PESS1899842", "PESS1896635", "PESS1887317", "PESS1884746", "PESS1876959", "PESS1875779", "PESS1875431", "PESS1819322", "PESS1818732", "PESS1818037", "PESS1817814", "PESS1812470", "PESS1804423", "PESS1801481", "PESS1793588", "PESS1791160", "PESS1788728", "PESS1787619", "PESS1777960", "PESS1771143", "PESS1770329", "PESS1766664", "PESS1766506", "PESS1765234", "PESS1747929", "PESS1740229", "PESS1724401", "PESS1713364", "PESS1712802", "PESS1709712", "PESS1707991", "PESS1698083", "PESS1668015", "PESS1648457", "PESS1639707", "PESS1632452", "PESS1624694", "PESS1602947", "PESS1510488", "PESS1505630", "PESS1464197", "PESS1462215", "PESS1451852", "PESS1366219", "PESS1307963", "PESS1127852", "PESS1117883", "PESS1114897", "PESS1111083", "PESS964307", "PESS714344", "PESS600484", "PESS587596", "PESS586289", "PESS585986", "PESS585164", "PESS583926"];

const bodyResult = [];


const AddUserIdToBody = (userId) => {

    const body = {
        match_phrase: {
            "user.id": {
                query: userId
            }
        }
    }

    bodyResult.push(body)
}


const doJob = () => {

    console.log(`Total de ids: ${usersId.length}`)

    for (let index = 0; index < usersId.length; index++) {
        const userId = usersId[index];

        AddUserIdToBody(userId)

    }

    console.log(`Result: ${JSON.stringify(bodyResult)}`)
}

doJob()