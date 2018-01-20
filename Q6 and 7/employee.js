function Employee(name) {
  this.name = name;
  this.dept = "general";
}

function Manager(name) {
  Employee.call(this, name);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);

function WorkerBee(name) {
  Employee.call(this, name);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson(name) {
  WorkerBee.call(this, name);
  this.dept = "sales";
  this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer(name) {
  WorkerBee.call(this, name);
  this.dept = "engineering";
  this.machine = "";
}
Engineer.prototype = Object.create(WorkerBee.prototype);
