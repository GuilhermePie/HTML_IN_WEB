const textArea = document.getElementById("textArea")
const resultBox = document.getElementById("resultBox")

textArea.addEventListener('input', ()=>{
    resultBox.innerHTML = `${textArea.value}`
})