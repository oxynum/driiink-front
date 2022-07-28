export const getMenuData = async (menuID) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.VUE_APP_API_KEY);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const el = await (await fetch(process.env.VUE_APP_URL + 'menus/' + menuID, requestOptions)).json()
    // TODO: Handle errors
    return el
}