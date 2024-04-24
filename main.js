function generate(){
    const length = document.getElementById("length").value;
    const numbers = document.getElementById("numbers").checked;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const noDuplicates = document.getElementById("no-duplicates").checked;
    const symbols = document.getElementById("symbols").checked;



    const password = generatepassword(parseInt(length), numbers, uppercase, lowercase, symbols, noDuplicates)

    document.getElementById('output').innerText = password
}

function generatepassword(length, numbers, uppercase, lowercase, symbols, noDuplicates){

    var characters = "";
    var maxlength = 0;

    if(numbers){
        characters += '0123456789';
        maxlength += 10;
    }
    if(uppercase){
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        maxlength += 26;
    }
    if(lowercase){
        characters += 'abcdefghijklmnopqrstuvwxyz';
        maxlength += 26;
    }
    if(symbols){
        characters += '!@#$%^&*';
        maxlength += 10;
    }
    if(noDuplicates && length > maxlength){
        return `Error: password length should not be more than ${maxlength} characters for the specified options.`
    }

    var PasswordArray = [];

    while(PasswordArray.length < length){
        const character = characters[Math.floor(Math.random() * characters.length)];

        if(!noDuplicates || !PasswordArray.includes(character)){
            PasswordArray.push(character)
        }

    }

    return PasswordArray.join('');
}