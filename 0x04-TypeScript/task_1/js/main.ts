interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const myTeacher: Teacher = {
    firstName: 'Henry',
    lastName: 'Morgan',
    fullTimeEmployee: true,
    location: 'Ibadan',
    contract: 'false'
};

console.log(myTeacher); 

interface Directors extends Teacher {
    numberOfReports: number,
}

const director1: Directors = {
    firstName: 'Rick',
    lastName: 'Sam',
    fullTimeEmployee: true,
    location: 'Lagos',
    numberOfReports: 17
};

console.log(director1)

type printTeacherFunction = (firstName: string, lastName: string) => string;

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher('Henry', 'Morgan'))

// Interface to describe the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  // Interface to describe the class
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the StudentClass
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Method to return a homework status string
    workOnHomework(): string {
      return "Currently working";
    }
  
    // Method to return the first name
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage
  const student: StudentClassInterface = new StudentClass("Alice", "Johnson");
  
  console.log(student.displayName()); // Output: Alice
  console.log(student.workOnHomework()); // Output: Currently working
  