(function () {

    var editpostform = document.querySelector("#postsave");
    
    editpostform.addEventListener("click", function (e) {

        var titleElm = this.form.querySelector("#EditedPost_Title");
        var oldtitle = titleElm.getAttribute("data-oldtitle");
        var newtitle = titleElm.value;

        if (oldtitle !== newtitle) {
            if (confirm("Changing the post title will update the post slug and break external links. \nDo you wish to update the slug?")) {
                this.querySelector("#updateSlug").value = true;
            }
            else {
                this.querySelector("#updateSlug").value = false;
            }
        }

    }, false);
})();   
