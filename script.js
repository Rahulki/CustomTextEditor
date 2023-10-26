const textArea = document.getElementById("textArea");

const fontSizeChange = (event) => {
  let fontSize = event.value;
  textArea.style.fontSize = fontSize + "px";
};

const fontBold = (event) => {
  if (textArea.style.fontWeight == "bold") {
    textArea.style.fontWeight = "normal";
    event.classList.remove("active");
  } else {
    textArea.style.fontWeight = "bold";
    event.classList.add("active");
  }
};

const fontItalic = (event) => {
  if (textArea.style.fontStyle == "italic") {
    textArea.style.fontStyle = "normal";
    event.classList.remove("active");
  } else {
    textArea.style.fontStyle = "italic";
    event.classList.add("active");
  }
};

const fontUnderline = (event) => {
  if (textArea.style.textDecoration == "") {
    textArea.style.textDecoration = "underline";
    event.classList.add("active");
  } else {
    textArea.style.textDecoration = "";
    event.classList.remove("active");
  }
};

const alignRight = (event) => {
  textArea.style.textAlign = "right";
  event.classList.add("active");
  document.getElementById("alignLeft").classList.remove("active");
  document.getElementById("alignCenter").classList.remove("active");
};

const alignCenter = (event) => {
  textArea.style.textAlign = "center";
  event.classList.add("active");
  document.getElementById("alignLeft").classList.remove("active");
  document.getElementById("alignRight").classList.remove("active");
};

const alignLeft = (event) => {
  textArea.style.textAlign = "left";
  event.classList.add("active");
  document.getElementById("alignRight").classList.remove("active");
  document.getElementById("alignCenter").classList.remove("active");
};

const fontColorChange= (event)=>{
    let fontColor = event.value;
    textArea.style.color = fontColor
}

const fontUpperCase=(event)=>{
    if(textArea.style.textTransform==""){
        textArea.style.textTransform = "uppercase";
        event.classList.add('active');
    }
    else{
        textArea.style.textTransform="";
        event.classList.remove('active');
    }
}

const changeFontFamily=(event)=>{
    let fontFamily = event.value;
    textArea.style.fontFamily= fontFamily;
}

let flag = false;
const darkMode=(event)=>{
  let darkModeDiv = document.getElementById('darkMode')
  if(!flag){
    darkModeDiv.classList.remove('darkMode')
    darkModeDiv.classList.add('lightMode')
    darkModeDiv.children.item(0).innerHTML="Light Mode"
    const headerMenu = document.getElementsByClassName("headerMenu")
    headerMenu.item(0).classList.add('headerMenuInDark')
    document.getElementsByTagName('input').item(0).classList.add('inputAndButtonInDark')
    document.getElementsByTagName('textarea').item(0).classList.add('darkTextArea')
    
    const buttonNodes = headerMenu.item(0).querySelectorAll('button')
    buttonNodes.forEach(button => {
      button.classList.add('inputAndButtonInDark')
    });
    headerMenu.item(0).classList.remove('headerMenu')

    flag=true;
    document.getElementById('fontFamily').classList.add('inputAndButtonInDark')
    const container = document.getElementById('container');
    container.classList.add('dark')
  }
  else{
    darkModeDiv.classList.add('darkMode')
    darkModeDiv.classList.remove('lightMode')
    darkModeDiv.children.item(0).innerHTML="Dark Mode"
    flag=false; 
    document.getElementsByClassName("headerMenuInDark").item(0).classList.add('headerMenu')
    document.getElementsByClassName("headerMenuInDark").item(0).classList.remove('headerMenuInDark')
    document.getElementsByTagName('input').item(0).classList.remove('inputAndButtonInDark')
    document.getElementsByTagName('textarea').item(0).classList.remove('darkTextArea')
    container.classList.remove('dark');

    const headerMenu = document.getElementsByClassName("headerMenu")
    const buttonNodes = headerMenu.item(0).querySelectorAll('button')
    buttonNodes.forEach(button => {
      button.classList.remove('inputAndButtonInDark')
    });
    document.getElementById('fontFamily').classList.remove('inputAndButtonInDark')
  }
}