
let playBgMusic = () => {
    document.getElementById('bgMusic').play();
}


let playHoverSound = () => {
    document.getElementById('soundHover').play();
}


let addToScreen = (data) => {
    document.getElementById('soundClick').play();
    document.getElementById("screen").value += data;
}

let clearScreen = () => {
    document.getElementById('soundC').play();
    document.getElementById("screen").value = "";
}

let calculate = () => {
    let operation = document.getElementById("screen").value;

    console.log(`primerNum: ${operation}`);

    let result = "E";
    result = calcul(operation);
    //operar el string
    
    console.log(`num1: ${findNum1(operation)}`);
    console.log(`num2: ${findNum2(operation)}`);
    // console.log(`operator is in position: ${findPosOperator(operation)}`)
    console.log(`operator is: ${findOperator(operation)}`)

    document.getElementById('soundResult').play();
    document.getElementById("screen").value = result;
}   

let findPosOperator = (operation) => {
    let pos = -1;

    for (let i = 0; i < operation.length && pos == -1; i++){
        if(!isNaN(operation[i]) && isNaN(operation[i + 1])){
            pos = i + 1;
        } 
    }
    
    return pos;
}

let findOperator = (operation) => {
    let operator = null;
    let cont = 0;

    for (let i = 0; i < operation.length; i++) {
        let char = operation[i];

        if (char === '+' || char === '-' || char === '*' || char === '/') {
            cont++;

            if (cont === 1) {
                operator = char;
            }
        }
    }

    if (cont > 1) {
        return " > 1";
    } else {
        return operator;
    }
}

let findNum1 = (operation) => {
   
    return parseInt(operation.slice(0, findPosOperator(operation)));
}

let findNum2 = (operation) => {
   
    return parseInt(operation.slice(findPosOperator(operation) + 1, operation.length));
}

let calcul = (operation) => {
    let toOperate = [findNum1(operation), findOperator(operation), findNum2(operation)];
    let result = "";
    if (!isNaN(toOperate[0])&& !isNaN(toOperate[2])){

        switch (toOperate[1]){
            case ("+"):
                result = toOperate[0] + toOperate[2];
                break;
    
            case ("-"):
                result = toOperate[0] - toOperate[2];
                break;
    
            case ("*"):
                result = toOperate[0] * toOperate[2];
                break;
    
            case ("/"):
                if (toOperate[2] != 0){
                    result = toOperate[0] / toOperate[2];
                }
                else{
                    result = "eh...??"
                }
                break;

            case (" > 1"):
                result = "just 2 numbers, pleaseee";
                break;
    
            default:
                result = "try again";
                break;            
        }
    }

    else {
        result = "Whaaat?"
    }

    

    return result;
}




