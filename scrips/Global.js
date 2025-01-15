const textArea = document.getElementById("textArea")
const resultBox = document.getElementById("resultBox")
const previewButton = document.getElementById("previewButton")
const indexButton = document.getElementById("indexButton")
const colNumber = document.getElementById("colNumber")

textArea.addEventListener('input', ()=>{
    resultBox.innerHTML = `${textArea.value}`
})


