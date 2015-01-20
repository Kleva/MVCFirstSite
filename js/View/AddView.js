/**
 * Created by macbookair on 20.01.15.
 */
define(["../Model/User.js"], function(AddView) {

    function render() {
        var addContainer = document.getElementById("addContainer");
        addContainer.innerHTML = '<input id="user-text" /><button id="add">Add</button>'
    }

    return {
        render: render
    }
})
