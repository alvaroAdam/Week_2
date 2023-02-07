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


let alvaro = new person(1.72,94)
alvaro.yearOfBirth=1980;
alvaro.hobbies=["nadar,correr"]
console.log(alvaro.calImc())
console.log(alvaro.edad(2023))
console.log(alvaro.printall())
alvaro.printHobbies()










 
