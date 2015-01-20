require(["js/Controller/ListController.js", "js/Controller/AddController.js"], function(ListController, AddController){

    localStorage.users = JSON.stringify([]);;
    ListController.showUsers();
    AddController.start();

})
