const student = {age:20};

const printAge = function() {
    return this.age;
};

const studentAge = printAge.bind(student);

console.log(studentAge());