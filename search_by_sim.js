const searchBar = document.getElementById("search_bar")
const instructs = document.getElementById("instructions")
const libraryJson = sessionStorage.getItem("LibraryList");
const library = JSON.parse(libraryJson);

searchBar.addEventListener("input", searchFunction)


function searchFunction()
{
    if(searchBar.value) {
        instructs.innerText = "";
        displayBooks();
    }
    else
    {
        instructs.innerText = "Please Enter a Book Title!"
        document.getElementById("suggestions").innerHTML = "";
    }
}

function displayBooks()
{
    var books = findBooks()
    suggestions = document.getElementById("suggestions")
    suggestions.innerHTML = "";
    for (var i = 0; i<books.length; i++)
    {
        var bookNum = books[i];
        var bookArray = library[bookNum];
        var book = document.createElement('div');

        let title = document.createElement('h2');
        let titleText = document.createTextNode(bookArray[0]);
        title.appendChild(titleText);

        let author = document.createElement('h3');
        let authorText = document.createTextNode(bookArray[1]);
        author.appendChild(authorText);

        let descrip = document.createElement('p');
        let descripText = document.createTextNode('"' + bookArray[bookArray.length-2] + '"');
        descrip.appendChild(descripText);

        let citation = document.createElement('h4');
        let citationText = document.createTextNode("— " + bookArray[bookArray.length-1]);
        citation.appendChild(citationText);

        let b_div = document.createElement('div');
        let link = document.createElement('button')
        link.innerHTML = "Select"
        link.onclick = function() {
            const jsonBook = JSON.stringify(bookArray);
            sessionStorage.setItem("WantedFeatures", jsonBook);
            sessionStorage.setItem("Backpointer", "Similar");

            window.location='book_suggestions.html';
        }

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(descrip);
        book.appendChild(citation);
        b_div.appendChild(link);
        book.appendChild(b_div);

        suggestions.appendChild(book)
    }

    if(books.length == 0)
    {
        let sorry = document.createElement('h4');
        let sorryText = document.createTextNode("We unfortunately could not find a book by that name.");
        sorry.appendChild(sorryText);
        suggestions.appendChild(sorry)
    }
}


function findBooks()
{
    var name = searchBar.value.toLowerCase()
    var books = []

    for(var i=0; i<library.length; i++)
    {
        var currentBook = library[i]
        if(currentBook[0].toLowerCase().search(name) != -1 || currentBook[1].toLowerCase().search(name) != -1 || currentBook[currentBook.length - 2].toLowerCase().search(name) != -1)
        {
            books.push(i);
        }
    }

    return books;
}