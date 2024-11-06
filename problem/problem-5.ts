{
  // You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

  // Hints: Use a reduce() method to sum the grades. average = total grades/ total length

  interface student {
    name: string;
    age: number;
    grads: number[];
  }

  function calculateAverageGrade(stud: student): number {
    const totalGrade = stud.grads.reduce((accu, grad) => accu + grad, 0);
    const avarate = totalGrade / stud.grads.length;
    return avarate;
  }

  console.log(
    calculateAverageGrade({
      name: "nurmoni",
      age: 16,
      grads: [54, 93, 98, 64, 72,93, 88]
    })
  );

  //
}
