let project = []

function getData(event){
    event.preventDefault()

    let name = document.getElementById('name').value
    let desc = document.getElementById('description').value
    let image = document.getElementById('inputFile').files

    if(!name){
        return alert("Fill all the documenets!!!")
    } else if(!desc){
        return alert("Fill all the documenets!!!")
    } else if(!image){
        return alert("Fill all the documenets!!!")
    }

    image = URL.createObjectURL(image[0])

    let all = {
            name,
            desc,
            image,
            cek: getIcons(),
            postAt: getDuration()
        }
    
    
    project.push(all)
    inputProject()
}

function inputProject(){

    let getDoc = document.getElementById('cardContainer')

    getDoc.innerHTML = `
    
    <div class="card">
        <div class="card-head">
            <img src="assets/maki.jpg" alt="maki">
        </div>
        <div class="card-body">
        <a href="detail-project.html"><h4>Maki Zenin</h4></a>
            <p class="p">Duration : 3 months</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab facere quaerat debitis quos officiis maxime corporis tenetur illum iusto, laboriosam quia dolores aliquam.
            </p>
        </div>
        <div class="icons">
            <table>
                <tr>
                    <th><i class="fa-brands fa-python fa-2x"></i></th>
                    <th><i class="fa-brands fa-rust fa-2x"></i></th>
                    <th><i class="fa-brands fa-php fa-2x"></i></th>
                    <th><i class="fa-brands fa-node-js fa-2x"></i></th>
                </tr>
            </table>
        </div>
        <div class="buttons">
            <button class="b1">Edit</button>
            <button class="b2">Delete</button>
        </div>
    </div>
    
    `

    for(let i=0; i<project.length; i++){
        getDoc.innerHTML += `
        
        <div class="card">
        <div class="card-head">
            <img src="${project[i].image}" alt="maki">
        </div>
        <div class="card-body">
            <a href="detail-project.html"><h4>${project[i].name}</h4></a>
            <p class="p">Duration : ${project[i].postAt}</p>
            <p class="desc">
                ${project[i].desc}
            </p>
        </div>
        <div class="icons">
            <table>
                <tr>
                    <th>${project[i].cek.python?`<i class="fa-brands fa-python fa-2x"></i>` : ""}</th>
                    <th>${project[i].cek.rust?`<i class="fa-brands fa-rust fa-2x"></i>` : ""}</th>
                    <th>${project[i].cek.php?`<i class="fa-brands fa-php fa-2x"></i>` : ""}</th>
                    <th>${project[i].cek.nodejs?`<i class="fa-brands fa-node-js fa-2x"></i>` : ""}</th>
                </tr>
            </table>
        </div>
        <div class="buttons">
            <button class="b1">Edit</button>
            <button class="b2">Delete</button>
        </div>
    </div>
        
        `
    }
}

function getIcons(){

    let python = document.getElementById('python').checked
    let rust = document.getElementById('rust').checked
    let php = document.getElementById('php').checked
    let nodejs = document.getElementById('nodejs').checked

    let icons = {
        python,
        rust,
        php,
        nodejs
    }

    return(icons)
}

function getDuration(){

    let startDate = new Date(document.getElementById('start-date').value)
    let endtDate = new Date(document.getElementById('end-date').value)

    if(startDate > endtDate){
        return alert("Error! The value of start date cannot be bigger than the end date!!")
    }

    let time = new Date(endtDate - startDate)

    let miliSecond = 1000
    let secondInHour = 3600
    let hourInDay = 24
    let dayInMonth = 31
    let monthInYear = 12

    let day = Math.floor(time / (miliSecond * secondInHour * hourInDay))
    let month = Math.floor(day / dayInMonth)
    let year = Math.floor(month / monthInYear)

    if(month <= 0){
        let duration = day + " Days" 
        return(duration)
    } else if(year <= 0){
        let duration = month + " Months"
        return(duration)
    } else if(year >= 0){
        let duration = year + " Years"
        return(duration)
    }

}