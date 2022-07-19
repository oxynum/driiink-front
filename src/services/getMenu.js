export const getMenu = async (barID) => {
    let barMenu = []
    const myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.VUE_APP_API_KEY);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const el = await (await fetch(process.env.VUE_APP_URL + 'bars/' + barID, requestOptions)).json()
    // TODO: HAndle errors of API call
    barMenu = el.menu
    return barMenu    
}

