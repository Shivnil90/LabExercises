// Create a book object.
const book = {
    title: "JavaScript Basics",
    description: "An introduction to JavaScript programming.",
    author: "John Smith",
    pages: 250
};

// Print the individual book properties.
console.log("Title:", book.title);
console.log("Description:", book.description);
console.log("Author:", book.author);
console.log("Pages:", book.pages);

// Print the whole book object.
console.log("\nBook Object:");
console.log(book);

// Update the description of the book.
book.description = "A complete guide to JavaScript programming.";

// Print the updated book object.
console.log("\nUpdated Book Object:");
console.log(book);

// Create an array that has 5 book objects.
const books = [
    {
        title: "JavaScript Basics",
        description: "Introduction to JavaScript",
        author: "John Smith",
        pages: 250
    },
    {
        title: "HTML Guide",
        description: "Learning HTML",
        author: "David Lee",
        pages: 180
    },
    {
        title: "CSS Essentials",
        description: "Learning CSS",
        author: "Emily Brown",
        pages: 220
    },
    {
        title: "Node.js Fundamentals",
        description: "Backend Development",
        author: "Michael Johnson",
        pages: 310
    },
    {
        title: "Web Development",
        description: "Full Stack Development",
        author: "Sarah Wilson",
        pages: 400
    }
];

// Print the array of book objects.
console.log("\nBooks Array:");
console.log(books);

// Update the description of every book object.
books[0].description = "A complete guide to JavaScript programming.";      // Update Book 1
books[1].description = "A complete guide to HTML development.";             // Update Book 2
books[2].description = "A complete guide to CSS styling.";                  // Update Book 3
books[3].description = "A complete guide to Node.js backend development.";  // Update Book 4
books[4].description = "A complete guide to Full Stack Web Development.";   // Update Book 5

// Print the updated array.
console.log("\nUpdated Books Array:");
console.log(books);
