const hero = document.querySelector('select')
const inputForm = document.querySelector('.input-form')
const results = document.querySelector('.stat-result')

inputForm.addEventListener('submit', calculateStats)
hero.addEventListener('click', changeHero)

function changeHero(){
    if(results.innerHTML === ''){
        return
    } else {
        calculateStats()
    }
}

function calculateStats(){
    event.preventDefault()
    const statInput = document.querySelector('.input-primary-stat')
    const statPoint = document.querySelector('.input-primary-stat').value
    if(results.firstChild !== 'null'){
        results.innerHTML = ''
    }
    if(statPoint === '' || !parseInt(statPoint) ){
        statInput.value = 'Irj be egy szamot!'
        statInput.style.background = 'red'
        statInput.style.color = 'white'
        statInput.style.fontWeight = '600'
        setTimeout(function(){
            statInput.value=""
            statInput.style.background = 'white'
            statInput.style.color = 'black'
            statInput.style.fontWeight = 'normal'
        }, 2000)

    }else{
    
    const heroClass = hero.value
    let ero
    let ugyesseg
    let intelligencia
    const kitartas = parseInt(statPoint) * 0.8
    const szerencse = parseInt(statPoint) * 0.4
    switch(heroClass){
        case 'harcos':
        case 'haborgo':
        case 'harcimagus':        
            ero = statPoint
            ugyesseg = parseInt(statPoint) * 0.4
            intelligencia = parseInt(statPoint) * 0.4
            break
        case 'magus':
            intelligencia = statPoint
            ugyesseg = parseInt(statPoint) * 0.4
            ero = parseInt(statPoint) * 0.4
            break
        case 'felderito':
        case 'demonvadasz':
        case 'orvgyilkos':    
            ugyesseg = statPoint
            ero = parseInt(statPoint) * 0.4
            intelligencia = parseInt(statPoint) * 0.4
            break
    }
    console.log(`${ero} ${ugyesseg} ${intelligencia}  ${kitartas} ${szerencse}`)
    const p = document.createElement('p')
    p.className = 'result-p'
    p.innerHTML = `
    Ero : ${Math.floor(ero)}<br><br>
    Ugyesseg : ${Math.floor(ugyesseg)}<br><br>
    Intelligencia : ${Math.floor(intelligencia)}<br><br>
    Kitartas : ${Math.floor(kitartas)}<br><br>
    Szerencse : ${Math.floor(szerencse)}
    `
    results.appendChild(p)


    }
}