/**
 * Created by macbookair on 20.01.15.
 */
define(["../Model/User"], function(User) {
    function render () {
        var userData = User.getItems();
        var appContainer = document.getElementById("userContainer")
        var usersText = "<lo>";
        for (var i = 0; i < userData.length; i++) {
            usersText = usersText + "<li>" + userData[i].name + "</li>"
        }
        usersText = usersText + "</lo>";
        appContainer.innerHTML = usersText;
    }
    return {
        render: render
    }
})
