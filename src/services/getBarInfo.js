export const getBarInfo = async (barID) => {
    let barInfo = {}
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.VUE_APP_API_KEY);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const el = await (await fetch(process.env.VUE_APP_URL + 'bars/' + barID, requestOptions)).json()
    barInfo.name = el.name
    barInfo.address = el.adress
    return barInfo
}

