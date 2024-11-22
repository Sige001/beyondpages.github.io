// Example books object
const books = {
    1: {
      title: "Angels and Demons",
      author: "Dan Brown",
      description: "A thriller novel that explores the battle between science and religion.",
      image: "/Website/Mystery/Angels.jpg",
      price: "$19.99"
    },
    2: {
      title: "The Bone Collector",
      author: "Jeffery Deaver",
      description: "A crime thriller featuring a quadriplegic detective.",
      image: "/Website/Mystery/Collector.jpg",
      price: "$15.99"
    },
    3: {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      description: "A gripping mystery involving a journalist and a hacker solving a decades-old disappearance.",
      image: "/Website/Mystery/Dragon.jpg",
      price: "$18.99"
    }
    
    // Add more books as needed
  };
  
  // Get the book ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get('book');
  
  // Get the book data based on the bookId
  const book = books[bookId];
  
  if (book) {
    // Update the page with book details
    document.getElementById('book-title').innerText = book.title;
    document.getElementById('book-author').innerText = `Author: ${book.author}`;
    document.getElementById('book-description').innerText = book.description;
    document.getElementById('book-cover-left').src = book.image;
    document.getElementById('paperback-price').innerText = book.price;
    document.getElementById('hardcover-price').innerText = "$29.99"; // Example, you can adjust it
  } else {
    // Handle case where book is not found
    document.querySelector('.book-detail').innerHTML = "<p>Book not found</p>";
  }
  
  // Update quantity value dynamically when slider changes
  document.getElementById('quantity').addEventListener('input', function() {
      document.getElementById('quantity-value').textContent = this.value;
  });
  
  // Add to cart functionality (simple demo)
  document.getElementById('add-to-cart').addEventListener('click', function() {
      const selectedType = document.querySelector('input[name="book-type"]:checked').value;
      const quantity = document.getElementById('quantity').value;
      
      // Alert the user with the details
      alert(`Added ${quantity} ${selectedType} copy(ies) of "${book.title}" to your cart!`);
  });
  