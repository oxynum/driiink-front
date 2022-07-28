import Driiink_API from "@/entity/driiink_api";

export const getMenuData = async (menuID) => {
    const driiink_api = new Driiink_API();

    const requestOptions = {
      method: 'GET',
      headers: driiink_api.header,
      redirect: 'follow'
    };

    const el = await (await fetch(process.env.VUE_APP_URL + 'menus/' + menuID, requestOptions)).json()
    // TODO: Handle errors
    return el
}