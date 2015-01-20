/**
 * Created by macbookair on 20.01.15.
 */
define(["../View/AddView.js", "../View/ListView.js", "../Model/User.js"], function(AddView, ListView, User) {

    function start() {
        AddView.render();
        bindEvents();
    }

    function bindEvents() {
        document.getElementById("add").addEventListener('click',
            function(){
                var userData = User.getItems();
                var value = document.getElementById("user-text").value;
                User.addItem(value);
                ListView.render();
            },
            false
        )
    }

    return {
        start: start
    }
})