function generatepassword(length, numbers, uppercase, lowercase, symbols, noDuplicates){

    var characters = '';

    if(numbers){
        characters += '0123456789';
    }
    if(uppercase){
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(lowercase){
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if(symbols){
        characters += '!@#$%^&*';
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