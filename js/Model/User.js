/**
 * Created by macbookair on 20.01.15.
 */
define(function(){
    function getItems() {
        return JSON.parse(localStorage.users);
    }

    function addItem(name) {
        var users = JSON.parse(localStorage.users);
        users.push({name: name});
        localStorage.users = JSON.stringify(users);
    }

    return {
        getItems: getItems,
        addItem: addItem
    }

})