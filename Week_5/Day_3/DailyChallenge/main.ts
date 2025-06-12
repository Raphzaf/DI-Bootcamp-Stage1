interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string; 
}

// Classe Library
class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | null {
    const book = this.books.find((b) => b.isbn === isbn);
    return book || null;
  }

  protected getAllBooks(): Book[] {
    return this.books;
  }
}

class DigitalLibrary extends Library {
  public readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.getAllBooks().map(book => book.title);
  }
}


const myDigitalLibrary = new DigitalLibrary("https://mylibrary.io");

myDigitalLibrary.addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  isbn: "9780132350884",
  publishedYear: 2008,
  genre: "Programming"
});

myDigitalLibrary.addBook({
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt",
  isbn: "9780201616224",
  publishedYear: 1999
});

const bookDetails = myDigitalLibrary.getBookDetails("9780132350884");

if (bookDetails) {
  console.log("📚 Détails du livre :");
  console.log(`Titre: ${bookDetails.title}`);
  console.log(`Auteur: ${bookDetails.author}`);
  console.log(`Année: ${bookDetails.publishedYear}`);
  console.log(`Genre: ${bookDetails.genre ?? "N/A"}`);
} else {
  console.log("❌ Livre introuvable.");
}

console.log("\n📖 Liste des livres dans la bibliothèque :");
console.log(myDigitalLibrary.listBooks());

console.log("\n🌐 Site Web de la bibliothèque :");
console.log(myDigitalLibrary.website);
