namespace Subjects {
    // Declaration merging to add a new optional attribute to the Teacher interface
    export interface Teacher {
        experienceTeachingJava?: number;
        firstName?: string;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}