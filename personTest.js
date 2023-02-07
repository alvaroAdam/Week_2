let {person}=require("./person");

let alvaro = new person(1.72,94)
alvaro.yearOfBirth=1980;
alvaro.hobbies=["nadar,correr"]
console.log(alvaro.calImc())
console.log(alvaro.edad(2023))
console.log(alvaro.printall())
alvaro.printHobbies()
