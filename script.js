const colors = [
    [
        "#F45D4C",
        "#F7A541",
        "#FACA66",
        "#FEE5AD",
        "#A1DBB2"
    ],
    [
        "#76a3cf",
        "#255e8b", 
        "#fccc5b", 
        "#2fab74", 
        "#8f812a", 
        "#564c29", 
        "#1f201c"
    ],
    [
        "#6fb1f8",
        "#b0d7e5",
        "#ebd2af",
        "#8b8a86",
        "#6f9087",
        "#5b7b4b",
        "#333f31",
    ]
]

const fonts = [
    "font-family: 'Lobster', sans-serif;",
    "font-family: 'Courgette', sans-serif;",
    "font-family: 'Yellowtail', sans-serif;",
    "font-family: 'Caveat', sans-serif;",
    "font-family: 'Lobster', sans-serif;",
    "font-family: 'Belanosima', sans-serif;",
    "font-family: 'Quicksand', sans-serif;",
    "font-family: 'Okemo', sans-serif;",
    "font-family: 'Kalam', sans-serif;",
    "font-family: 'Pacifico', sans-serif;",
    "font-family: 'Lobster Two', sans-serif;",
    "font-family: 'Kaushan Script', sans-serif;",
    "font-family: 'Concert One', sans-serif;",
    "font-family: 'Vantage', sans-serif;",
    "font-family: 'Corbby', sans-serif;",
    "font-family: 'Brick', sans-serif;",
    "font-family: 'Glitten', sans-serif;",
    "font-family: 'Kelsi', sans-serif;",
    "font-family: 'Kelsi Fill', sans-serif;",
    "font-family: 'Vertigo', sans-serif;",
]

var title1 = document.querySelector("#title1");
var fontPicker = document.querySelector("#font-picker");
var colorPicker = document.querySelector("#color-picker");
var el1 = document.querySelector("#color-1");
var fontSample = document.querySelector("#font-sample");

fonts.forEach((e, index) => {
    fontPicker.innerHTML += `<option style="${e}" value="${index}">${e}</option>`
});

colors.forEach( (e, index) => {
    colorPicker.innerHTML += `<option value="${index}">Color ${index}</option>`
} )

colors[colorPicker.value].forEach(el =>{
    el1.innerHTML= el1.innerHTML + (`<div style="background-color: ${el}; aspect-ratio: 1/1; ${fonts[fontPicker.value]}" onclick="colorFontChange('${el}')"><h4>${el}</h4></div>`)
})

title1.innerHTML = `<h2 style="${fonts[0]}">Title</h2>`;
fontSample.innerHTML = `<h1 style="${fonts[fontPicker.value]}">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</h1>`;

const fontChange = () => {
    title1.innerHTML = `<h2 style="${fonts[fontPicker.value]}">Title</h2>`
    el1.innerHTML = "";
    fontSample.innerHTML = `<h1 style="${fonts[fontPicker.value]}">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</h1>`;
    colors[colorPicker.value].forEach( el => {
        el1.innerHTML += `<div style="background-color: ${el}; aspect-ratio: 1/1; ${fonts[fontPicker.value]}" onclick="colorFontChange('${el}')"><h4>${el}</h4></div>`
    });
}

const colorChange = () => {
    title1.innerHTML = `<h2 style="${fonts[fontPicker.value]}">Title</h2>`
    el1.innerHTML = "";
    colors[colorPicker.value].forEach( el => {
        el1.innerHTML += `<div style="background-color: ${el}; aspect-ratio: 1/1; ${fonts[fontPicker.value]}" onclick="colorFontChange('${el}')"><h4>${el}</h4></div>`
    });
}

const colorOption = (e) => {
    var colors;
    e.forEach( (color) => {
        colors += `<div style="background-color: ${color}; aspect-ratio: 1/1"></div>` 
    } );
    return colors;
}

const colorFontChange = (color) => {
    fontSample.innerHTML = `<h1 style="${fonts[fontPicker.value]}; color: ${color}">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</h1>`
}