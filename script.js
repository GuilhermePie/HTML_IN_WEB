const textArea = document.getElementById("textArea")
const resultBox = document.getElementById("resultBox")
const previewButton = document.getElementById("previewButton")
const indexButton = document.getElementById("indexButton")

textArea.addEventListener('input', ()=>{
    resultBox.innerHTML = `${textArea.value}`
})

previewButton.addEventListener('click', ()=>[
    previewButton.classList.toggle("hideButton"),
    resultBox.classList.toggle("hide")
])

indexButton.addEventListener('click', ()=>[
    indexButton.classList.toggle("hideButton"),
    textArea.classList.toggle("hide")
])

