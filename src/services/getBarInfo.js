import Driiink_API from "@/entity/driiink_api";

export const getBarInfo = async (barID) => {
    const driiink_api = new Driiink_API()
    
    return driiink_api.getBarInfoById(barID)

    //RAJOUTE LE HANDLING D'ERREUR

    

    // const requestOptions = {
    //   method: 'GET',
    //   headers: driiink_api,
    //   redirect: 'follow'
    // };
    
  
    // return await fetch(process.env.VUE_APP_URL + 'bars/' + barID, requestOptions)
    //   .then(async (resp) => {
    //     const data = await resp.json()
    //     if (!data.name){
    //       return "DATA WAS NOT FOUND"
    //     }
    //     console.log(data)
    //     return data
    //   })
    //   .catch((error) => {
    //     return "DATA WAS NOT FOUND" + error
    //   })
}

