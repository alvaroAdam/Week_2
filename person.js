class person {
    constructor(altura,peso,){
        this.altura=altura
        this.peso=peso
        this.pais
        this.cons
        this.yearOfBirth
        this.hobbies
 }
    calImc(){
    return (this.altura*2)/this.peso;
 }
    
    edad(ano){
        return ano -this.yearOfBirth
    
    }
    
    printall(){
      return console.log("la altura es - "  + this.altura + " el peso es -  " + this.peso + " y la edad es - " + (2023 -this.yearOfBirth))
    }
    
     printHobbies(){
        for (let i=0;i<this.hobbies.length;i++){
        console.log(this.hobbies[i])
     }
    }
    }





module.exports={person}









 
