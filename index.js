
let URL = "https://api.adviceslip.com/advice"

async function allData(){
    try {
        let res = await fetch(URL)
        // console.log(await res.json())
        let data = await res.json()
        // console.log(data.slip.advice)
        return data
    } catch (error) {
        console.log("error")    
    }
}

async function getData(){
    let data = await allData()
    console.log(data)

    let card = document.createElement('div')
    card.setAttribute('id','card')
    document.getElementById("root").appendChild(card)

    let h2 = document.createElement('h2')
    h2.innerHTML = 'Advise slip'
    h2.setAttribute('id','head')
    card.appendChild(h2)

    let result = document.createElement('div')
    result.setAttribute('id','result')
    // result.innerHTML = `${data.slip.advice}`
    card.appendChild(result)

    let btn = document.createElement('button')
    btn.setAttribute('id','btn')
    btn.setAttribute('class','btn btn-primary')
    btn.innerHTML='Get Advice'
    btn.addEventListener('click',()=>{
        result.innerHTML=`${data.slip.advice}`
    })


    result.appendChild(btn)

}
getData()