function getCodeString(codingName){

        let newString =  codingName.split('');  
        let regularExpresion  = /[","]/g; 
        let decryptedString;
        let finalString; 
        let name; 
        let last_name; 
        let id;  
        
        for(let i = 0; i <newString.length;  i++) {
            if(newString[i] === "0"){
                if(newString[i+1] !== "0"){
                    i++;  
                }else{
                    newString.splice(i,1,"");
                }
            }
        }
       
        decryptedString = newString.toString().replace(regularExpresion,"");
        let [nombre, apellido, id2] =  decryptedString.split('0');  
        name = nombre.replace(/[0]/g, " ");
        last_name = apellido.replace(/[0]/g, " ");
        id = id2.replace(/[0]/g, " ");
    
        finalString = `{name:${name}, last_name:${last_name}, id:${id2}}`;
        
    
        return finalString; 
    }
    
    module.exports ={
        getCodeString
    }