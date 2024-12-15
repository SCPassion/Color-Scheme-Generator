const form = document.getElementById('form')
const color = document.getElementById('color')
const scheme = document.getElementById('scheme')
const submitBtn = document.getElementById('submit')

const colorHex = [...document.getElementsByClassName('color-hex')]

const baseURL = "https://www.thecolorapi.com"
const endpoint = "/scheme"

// Set default color value for the html color input selector
color.value = "#F55A5A"

// Listen to form submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form)
    const url = `${baseURL}${endpoint}?hex=${formData.get('color').slice(1)}&count=5&mode=${formData.get('scheme')}`
    fetch(url)
        .then(res=>res.json())
        .then(data=> {
            data.colors.forEach((color, index)=> {
                colorHex[index].textContent = color.hex.value
                document.getElementById(colorHex[index].dataset.id).style.backgroundColor = color.hex.value
            })
        })
});

// Listen to copy color hex event
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('color-bar')) {
        // Get color hex content
        const colorHexContent = document.querySelector(`[data-id="${e.target.id}"]`).textContent

        // Copy to clipboard
        navigator.clipboard.writeText(colorHexContent).then(()=>{
            alert('Color copied to clipboard')
        }).catch((err)=> {
            console.error(err)
        })
    }
})