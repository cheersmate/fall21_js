//switchAboutToActive(); //  doesn't seem be necessary? 
var chosenRating = chooseRandomReviewRating();
full_star = 'fa fa-star';

/* 
                        var c = document.querySelectorAll("span");
                        var i;
                        for (var i = 0; i <= chosenRating; i++) {
                            c[i].className = 'a black';
                        }
                        //update it at last
                        document.getElementById(id).className = "active a red";
                    }

 */
var aboutHtmlToInsert = insertProperty(aboutHtml, 'stars', "'" + chosenRating + "'")
insertHtml("#main-content", aboutHtmlToInsert); // insert elsewhere




$(div).find("span").eq(chosenRating);



<!-- 
<
span class = "" > {
        { stars_one } } < /span> <
    span class = "" > {
        { stars_two } } < /span> <
    span class = "" > {
        { stars_three } } < /span> <
    span class = "" > {
        { stars_four } } < /span> <
    span class = "" > {
        { stars_five } } < /span> -->