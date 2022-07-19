export const getBarInfo = async (barID) => {
    let barInfo = {}
    const myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.VUE_APP_API_KEY);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const el = await (await fetch(process.env.VUE_APP_URL + 'bars/' + barID, requestOptions)).json()
    // TODO: HAndle Errors from API call
    barInfo.name = el.name
    barInfo.address = el.adress
    return barInfo
}

