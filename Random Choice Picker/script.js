var textArea = document.getElementById('textArea')
var tags = document.getElementById('tags')
var spans = document.getElementsByTagName('span')

const createTag = (e)=>{
    let content = e.target.value 
    let contentToArray = content.split(",").filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tags.innerHTML = ''
    contentToArray.forEach(element => {
        var spaEl = document.createElement('span')
        spaEl.innerText = element
        tags.appendChild(spaEl)
    });

    if (e.key == 'Enter'){
       var index = 0
       let times = 30 
       let iterator = 0
       let interval = setInterval(()=>{
            index = random()
            setTimeout(()=>{
                highlight(index)
            },100)
            iterator++
            if(iterator == times){
                unHighlightAll(index) 
                highlightLast(index)
                clearInterval(interval)
            }
       },300)

    }
}

const random = () =>{
    choosed = Math.floor(Math.random() * spans.length)
    return  choosed 
}

const highlight = (index) =>{
       spans[index].classList.toggle('tag')
}


const highlightLast = (index) =>{
    console.log(' c bon rani khayartlk ' + spans[index].innerText)
    spans[index].classList.add('taag')
    console.log(spans[index])

}

const unHighlightAll = (index,choosedElement) =>{
    for(let i = 0 ; i< spans.length;i++){
        spans[i].classList.remove('tag')
    }
}


textArea.focus()
textArea.addEventListener('keyup',createTag)


