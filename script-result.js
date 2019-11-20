$(document).ready(function () {

    // getting info from the page index.html
    var onePic.votes = sessionStorage.getItem(onePic.votes);
    onePic.votes = JSON.parse(onePic.votes)

    var pictures = sessionStorage.getItem("pictures");
    // creation of cards in results page
    for (let i = 0; i < pictures.length; i++) {
        const onePic = pictures[i]
        const col4 = ('<div class="col-4">')
        const col3 = ('<div class="col-3">')
        const card = $('<div class="card p-2">')
        const cardImg = $('<img class="card-img-top" src="' + pictures[i].url + '" alt="Card image cap">')
        cardImg.css("float", "url('" + pictures[i].url + "')")
        const cardBody = $('<div class="card-body">')
        const cardTitle = $('<h5 class="card-title">' + pictures[i].title + '</h5>')
        const cardSubTitle = $('<h6 class="card-subtitle mb-2">' + pictures[i].subtile + '</h6>')
        const trophy = $('<i class="fas fa-trophy"></i>')
        const placeNumber = $('<h3>' + +'</h3>')
        const score = $('<div class="col-4"><p class="card-text">Score: ' + +'</p></div>')

        // I have no idea how to make this work : if pictures index is less than 3 then column is 4
        // returning error col4.append is not a function
        if (i < 3) {
            $('.results').append(col4)
            col4.append(card)
            card.append(cardImg)
            card.append(cardBody)
            cardBody.append(cardTitle, cardSubTitle, trophy, placeNumber, score)

        } else {

            $('.results2').append(col3)
            col3.append(card)
            card.append(cardImg)
            card.append(cardBody)
            cardBody.append(cardTitle, cardSubTitle, placeNumber, score)

        }

        // no idea how to do this : want to sort pictures into score order using info which is in pictures
        pictures.sort(pictures[i].votes)

    }

});