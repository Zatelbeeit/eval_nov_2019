$(document).ready(function () {
    // creation of cards in index page
    for (let i = 0; i < pictures.length; i++) {
        const onePic = pictures[i]
        const col3 = $('<div class="col-3">')
        const card = $('<div class="card m-2">')
        const cardImg = $('<img class="card-img-top" src="' + pictures[i].url + '" alt="Card image cap">')
        cardImg.css("float", "url('"+ pictures[i].url +"')")
        const cardBody = $('<div class="card-body">')
        const cardTitle =$('<h5 class="card-title">' + pictures[i].title + '</h5>')
        const cardSubTitle = $('<h6 class="card-subtitle mb-2">'+ pictures[i].subtile +'</h6>')
        const row =$('<div class="row">')
        const poo =$('<div class="col-4"><span class="badge badge-pill badge-danger border-radius-4 p-2"><i class="fas fa-poo"></i></span></div>')
        const votes =$('<div class="col-4"><p class="card-text">'+ pictures[i].votes +' votes</p></div>')
        const love = $('<div class="col-4"><span class="badge badge-pill badge-success border-radius-4 p-2"><i class="fas fa-heart"></i></span></div>')
        
        
        $('.photos').append(col3)
        col3.append(card)
        card.append(cardImg)
        card.append(cardBody)
        cardBody.append(cardTitle,cardSubTitle,row)
        row.append(poo,votes,love)

        // with each click reduce the votes by one and change the result in votes
    //    - it doesnt but well at least I tried :)
            console.log(onePic.votes)
            $(".fa-poo").click(function(){
            num = parseInt($(onePic.votes).val());
            $(onePic.votes).val(num-1);
            })
        
            
            var onePicVotes_json = JSON.stringify(onePic.votes);
            sessionStorage.setItem("onePic.votes",onePicVotes_json);
           

            // with each click increase vote
            $(".fa-heart").click(function(){
                num = parseInt($(onePic.votes).val());
                $(onePic.votes).val(num+1);
                })
        
        var onePicVotes_json = JSON.stringify(onePic.votes);
            sessionStorage.setItem("onePic.votes",onePicVotes_json);
           


    }

});


