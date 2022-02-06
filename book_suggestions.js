const paramsJson = sessionStorage.getItem("WantedFeatures");
const params = JSON.parse(paramsJson);
const backpointer = sessionStorage.getItem("Backpointer");
const libraryJson = sessionStorage.getItem("LibraryList");
const library = JSON.parse(libraryJson);
const randomise_button = document.querySelector(".randomise")
const backButton = document.getElementById("back_button")


const closeButton = document.querySelector(".close-button")
const b_title = document.getElementById("c_book_title")
const b_author = document.getElementById("c_book_author")
const b_descrip = document.getElementById("c_book_descrip")
const b_genre = document.getElementById("c_book_genre")
const b_identity = document.getElementById("c_book_identity")
const b_protagtype = document.getElementById("c_book_protagtype")
const b_other = document.getElementById("c_book_other")
const b_cite = document.getElementById("c_book_cite")

async function start() {
    //updateBackpointer();
    //console.log(params)
    updateBookList(params);
    if(backpointer == "Similar")
    {
        backButton.href="search_by_sim.html";
    }
    else
    {
        backButton.href="search_by_feat.html";
    }
}


start()
randomise_button.addEventListener("submit", randomize)
closeButton.addEventListener("click", closeBook)

function updateBookList() {

    var rets = getRandomBooks();
    var books = rets[0];
    var simVals = rets[1];
    //console.log(rets)
    var allB = [];
    var mostB = [];
    var someB = [];
    suggestions = document.getElementById("suggestions")
    if(books.length != 0)
    {
        //sorts the books
        for(var i = 0; i < books.length; i++)
        {
            if(simVals[i] == 1)
            {
                allB.push(books[i]);
            }
            else if(simVals[i] >= 0.7)
            {
                mostB.push(books[i]);
            }
            else if(simVals[i] < 0.7)
            {
                someB.push(books[i]);
            }
        }

        //console.log(allB);
        //console.log(mostB);
        //console.log(someB);
        if(allB.length != 0)
        {
            let allTitle = document.createElement('h2');
            let allText = document.createTextNode('All');
            allTitle.appendChild(allText);
            suggestions.appendChild(allTitle)
    
            for (var i = 0; i<allB.length; i++)
            {
                var bookNum = allB[i];
                var bookArray = library[bookNum];
                var book = document.createElement('div');
                book.setAttribute("id", bookArray[0])
    
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
                let readmore = document.createElement('button')
                readmore.innerHTML = "More Info"
                readmore.onclick = function() {
                    moreInfo(this.parentElement.parentElement.id);
                }
    
                book.appendChild(title);
                book.appendChild(author);
                book.appendChild(descrip);
                book.appendChild(citation)
                b_div.appendChild(readmore);
                book.appendChild(b_div);
    
                suggestions.appendChild(book)
            }
        }
        
        if(mostB.length != 0)
        {
            let mostTitle = document.createElement('h2');
            let mostText = document.createTextNode('Most');
            mostTitle.appendChild(mostText);
            suggestions.appendChild(mostTitle)

            for (var i = 0; i<mostB.length; i++)
            {
                var bookNum = mostB[i];
                var bookArray = library[bookNum];
                var book = document.createElement('div');
                book.setAttribute("id", bookArray[0])

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
                let readmore = document.createElement('button')
                readmore.innerHTML = "More Info"
                
                readmore.onclick = function() {
                    moreInfo(this.parentElement.parentElement.id);
                }

                book.appendChild(title);
                book.appendChild(author);
                book.appendChild(descrip);
                book.appendChild(citation);
                b_div.appendChild(readmore);
                book.appendChild(b_div);

                suggestions.appendChild(book)
            }
        }

        if(someB.length != 0)
        {
            let someTitle = document.createElement('h2');
            let someText = document.createTextNode('Some');
            someTitle.appendChild(someText);
            suggestions.appendChild(someTitle)
    
            for (var i = 0; i<someB.length; i++)
            {
                var bookNum = someB[i];
                var bookArray = library[bookNum];
                var book = document.createElement('div');
                book.setAttribute("id", bookArray[0])
    
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
    
                let b_div = document.createElement('div')
                let readmore = document.createElement('button')
                readmore.innerHTML = "More Info"
                readmore.onclick = function() {
                    moreInfo(this.parentElement.parentElement.id);
                }
    
                book.appendChild(title);
                book.appendChild(author);
                book.appendChild(descrip);
                book.appendChild(citation);
                b_div.appendChild(readmore);
                book.appendChild(b_div);
    
                suggestions.appendChild(book)
            }
        }
    }
    else
    {
        let sorry = document.createElement('h3');
        let sorryText = document.createTextNode("We unfortunately could not find any books that match your interests. Please try looking for a different type of book.");
        sorry.appendChild(sorryText);
        suggestions.appendChild(sorry)
    }
    //
}

function getRandomBooks() {

    var max = library.length;
    var chosen = [];
    var simValues = [];
    var notchosen = [];
    var totalParams = countTrues();
    var totalChecked = 0;
    while (chosen.length < 10 && totalChecked!=max)
    {
        var rand = Math.floor(Math.random()*max)
        //checks if book has already been chacked
        if(!chosen.includes(rand) && !notchosen.includes(rand))
        {
            //Check book similarities
            if(totalParams != 0)
            {
                var similar = checkSimilarity(rand)/totalParams;
                if(library[rand][0] == params[0])
                {
                    notchosen.push(rand)
                }
                else if (similar >= 0.5)
                {
                    chosen.push(rand)
                    simValues.push(similar)
                }
                else
                {
                    notchosen.push(rand)
                }
            }
            else
            {
                chosen.push(rand)
                simValues.push(1)
            }
        }
        totalChecked++;
    }

    return [chosen, simValues];
}

function checkSimilarity(rand) {
    var count = 0;
    var book = library[rand];
    for(var i=2; i < params.length-2; i++)
    {
        if(params[i] && params[i] == book[i])
        {
            count++;
        }
    }
    return count;
}

function countTrues()
{
    var count = 0;
    for(var i=2; i < params.length-2; i++)
    {
        if(params[i])
        {
            count++;
        }
    }
    return count;
}

function randomize(e)
{
    e.preventDefault();
    document.getElementById("suggestions").innerHTML = "";
    updateBookList();
}




function moreInfo(n_book_id)
{
    console.log(n_book_id)
    document.body.classList.add("overlay-is-open")

    n_book = getBookFromId(n_book_id)


    b_title.innerHTML = n_book[0];
    b_author.innerHTML = n_book[1];
    b_descrip.innerHTML = '"' + n_book[n_book.length-2] + '"';
    b_cite.innerHTML = "—" + n_book[n_book.length-1];

    p_genre_tags = ["Fantasy", "SciFi", "Historical Fiction", "Coming of Age", "Mystery", "Realistic Fiction", "Adventure", "Myth/Legend", "Classic"]; 
    p_identity_tags = ["Male", "Female", "Other"]; 
    p_species_tags = ["Human", "Animal", "Mythical Creature"]; 
    p_other_tags = ["Series", "Maine", "Multicultural", "LGBTQ+"];

    genretags = ""
    for(var i = 2; i < 11; i++)
    {
        if(n_book[i])
        {
            if(genretags != ""){
                genretags += ",  ";
            }
            genretags += p_genre_tags[i-2]
        }
    }
    b_genre.innerHTML = genretags;

    identitytags = ""
    for(var i = 11; i < 14; i++)
    {
        if(n_book[i])
        {
            if(identitytags != ""){
                identitytags += ",  ";
            }
            identitytags += p_identity_tags[i-11]
        }
    }
    b_identity.innerHTML = identitytags;

    protagtypetags = ""
    for(var i = 14; i < 17; i++)
    {
        if(n_book[i])
        {
            if(protagtypetags != ""){
                protagtypetags += ",  ";
            }
            protagtypetags += p_species_tags[i-14]
        }
    }
    b_protagtype.innerHTML = protagtypetags;

    othertags = ""
    for(var i = 17; i < n_book.length-2; i++)
    {
        if(n_book[i])
        {
            if(othertags != ""){
                othertags += ",  ";
            }
            othertags += p_other_tags[i-17]
        }
    }
    b_other.innerHTML = othertags;
}

function closeBook()
{
    document.body.classList.remove("overlay-is-open")
}

function getBookFromId(book_id)
{
    for(var i = 0; i < library.length; i++)
    {
        if(library[i][0] == book_id)
        {
            return library[i];
        }
    }
}