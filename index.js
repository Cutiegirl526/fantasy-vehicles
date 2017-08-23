class Vehicle{
  constructor(make, color, type){
  this.make = make;
  this.color = color;
  this.type = type;
  }

  getvehicleDetails(){
    return '${this.make} ${this.color} ${this.type}';
  }
}

class SuperCar extends vehicleDetails{
  constructor(make, color, type, topSpeed, cost){
    super(firstName, lastName);
    this.managesEmployee = [];
  }

  addEmployee(employee){
    this.managesEmployee.push(employee);
  }
}

let bob = new Manager('Bob', 'Thorn');
//console.log(bob.getFullName());
bob.addEmployee('Cindy', 'Zak', 'Tyler');
console.log(bob.managesEmployee);