export const activeMenu = async (menus) => {
  let activeMenu = []

  menus.forEach(e => {
    let activeAt = e.activeAt.slice(e.activeAt.indexOf('T') + 1, e.activeAt.lastIndexOf('+'))
    let activeArr = activeAt.split(':')
    let activeAtSeconds = parseInt(activeArr[0]) * 3600 + parseInt(activeArr[1] * 60) + parseInt(activeArr[2])
    
    let desactiveAt = e.desactiveAt.slice(e.desactiveAt.indexOf('T') + 1, e.desactiveAt.lastIndexOf('+'))
    let desactiveArr = desactiveAt.split(':')
    let desactiveAtSeconds = parseInt(desactiveArr[0]) * 3600 + parseInt(desactiveArr[1] * 60) + parseInt(desactiveArr[2])

    if(desactiveAtSeconds === 0){
      desactiveAtSeconds = 86400
    }

    let d = new Date().toLocaleTimeString()
    let dArr = d.split(':')
    let dAtSeconds = parseInt(dArr[0]) * 3600 + parseInt(dArr[1] * 60) + parseInt(dArr[2])

    console.log('Active :', activeAtSeconds)
    console.log('Actuel :', dAtSeconds)
    console.log('Desactive :', desactiveAtSeconds)
    
    if( (activeAtSeconds <= dAtSeconds) && (dAtSeconds < desactiveAtSeconds)){
      console.log(true)
      activeMenu = e
    }
  })

  return activeMenu
}