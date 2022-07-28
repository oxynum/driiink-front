import Driiink_API from "@/entity/driiink_api";

export const getMenu = async (barID) => {
    const driiink_api = new Driiink_API();

    const requestOptions = {
      method: 'GET',
      headers: driiink_api.header,
      redirect: 'follow'
    };
    
    const el = await (await fetch(process.env.VUE_APP_URL + 'bars/' + barID, requestOptions)).json()
    return el.menu    
}

