/**
 * Created by macbookair on 20.01.15.
 */
define(["../View/ListView"], function(ListView) {
    function showUsers() {
        ListView.render();
    }

    return {
        showUsers: showUsers
    }
})
