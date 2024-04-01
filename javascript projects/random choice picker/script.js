const tagsE1 = docunment.getElementById('tags')
const textarea = document.getElementById('textarea')
textarea.focus()
textarea.addEventListener('keyup' , (e) => {
    createTags(e.target.value)
    if(e.key ==='Enter') {
        setTimeout(() => {
            e.target.value =''
        }, 10)
        randomSelect()
    }
})
function randomSelect() {
const times = 30
const interval = setInterval(() =>{
    const randomTag = pickrandomTag()
    if (randomTag !== undefined){
        highlightTag(randomTag)
    }, 100) 
}
}, 100):
}, times *10)
}
fuction pickRandomTag() {
    const tags = document.quereySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
    fuction highlightTag(tag) {
        tag.classList.add('highlight')
    }
    fuction unHighlightTag(tag) {
        tag.classList.remove('highlight')
    }

