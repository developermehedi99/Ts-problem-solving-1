{
    // You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

// Hints: Use getFullYear() method to extract the year to check the given year with current year

    type Book = {
        title:string;
        author:string;// You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

        // Hints: Use getFullYear() method to extract the year to check the given year with current year
        publishedYear:number;
    }

    function isRecentBook(bookYear: Book):boolean{
        const currentYear = new Date().getFullYear();
        return currentYear - bookYear.publishedYear <= 5;
    }

    const result = isRecentBook({
        title:'the javascipt and typescript',
        author:'mehedi_js',
        publishedYear:2014
    })
    console.log(result);




// 
}