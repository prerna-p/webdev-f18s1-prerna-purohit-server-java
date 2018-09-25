// Immediately Invoked Function Expression (IIFE)

(function () {
    var usernameFld, passwordFld;
    var firstNameFld, lastNameFld, roleFld;
    var removeBtn, editBtn, createBtn, searchBtn, updateBtn;
    var userRowTemplate, tBody;
    var userService = new AdminUserServiceClient();
    var btnUpdate;

    $(main);


    function main() {

        // grab form fields
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");
        $roleFld = $("#roleFld");

        // grab buttons
        $createBtn = $(".wbdv-create");
        $editBtn = $(".wbdv-edit");
        $removeBtn = $(".wbdv-remove");
        $searchBtn = $(".wbdv-search");

        /* btn-update is my class for show/hide of update button
         *  it is visible only after edit button is clicked and user info
         *  appears in the form
         */
        $updateBtn = $(".wbdv-update")
        $showHideUpdate = $(".btn-update");
        // hide update button
        $showHideUpdate.hide();

        // grab table body & row
        $userRowTemplate = $(".wbdv-template.wbdv-user");
        $tBody = $(".wbdv-tbody");

        // declare click action function
        $createBtn.click(createUser);
        $removeBtn.click(deleteUser);
        $editBtn.click(selectUser);
        $searchBtn.click(findUserById);
        $updateBtn.click(updateUser);
        $searchBtn.click(searchUser);

        // load table
        findAllUsers();
    }

    /*
     * Uses user service findAllUsers() to retrieve all the users
     * and passes response to renderUsers
     */
    function findAllUsers() {
        users = userService.findAllUsers();
        renderUsers(users);
    }

    /*
     * Reads from the form elements and creates a user object.
     * Uses the user service to create the new user.
     * Updates the list of users on server response
     */
    function createUser() {
        var username = $usernameFld.val();
        var firstname = $firstNameFld.val();
        var password = $passwordFld.val();
        var lastname = $lastNameFld.val();
        var role = $roleFld.find(":selected").text();

        // do not accept empty field
        if(username === '') {
            alert("username must be entered");
            return;
        }

        // empty form fields
        $usernameFld.val("");
        $firstNameFld.val("");
        $lastNameFld.val("");
        $passwordFld.val("");
        $roleFld.val("");

        var timestamp = (new Date()).getTime();
        let newUser = {
            "id":timestamp,
            "username":username,
            "password":password,
            "firstName":firstname,
            "lastName":lastname,
            "role":role
        }

        userService.createUser(newUser);

        findAllUsers();
    }

    /*
     * Reads the user and sends a delete request to the server.
     */
    function deleteUser(event) {
        var record = $(event.currentTarget).parent().parent().parent().parent();
        var id = record.attr('id');
        userService.deleteUser(id);
        findAllUsers();

    }

    /*
     * Takes contents from form and passes to user service to
     * update the data
     */
    function updateUser(event){

        var username = $usernameFld.val();
        var firstname = $firstNameFld.val();
        var password = $passwordFld.val();
        var lastname = $lastNameFld.val();
        var role = $roleFld.find(":selected").text();

        let newUserInfo = {
            "id":this.id,
            "username":username,
            "password":password,
            "firstName":firstname,
            "lastName":lastname,
            "role":role
        }
        userService.updateUser(this.id, newUserInfo);

        $usernameFld.val("");
        $firstNameFld.val("");
        $lastNameFld.val("");
        $passwordFld.val("");
        $roleFld.val("");

        findAllUsers();
    }

    /*
     * When the edit button is selected this event handler
     * grabs the user data and updates it in the form in
     * table header
     */
    function selectUser(event) {
        var target = $(event.target);
        var record = target.parent().parent().parent().parent();
        var id = record.attr('id');
        var userInfo = userService.findUserById(id);
        $usernameFld.val(userInfo.username);
        $passwordFld.val(userInfo.password);
        $firstNameFld.val(userInfo.firstName);
        $lastNameFld.val(userInfo.lastName);
        $roleFld.val(userInfo.role);
        $showHideUpdate.show();
        $updateBtn.attr("id",userInfo.id);

    }

    /*
     * returns user information for a given user id
     * by calling the corresponding user service function
     */
    function findUserById(id) {
        var user = userService.findUserById(id);
        return user;
    }

    /*
     * event handler for search button
     * performs full matching only
     */
    function searchUser() {
        var username = $usernameFld.val();
        var firstname = $firstNameFld.val();
        var lastname = $lastNameFld.val();
        var role = $roleFld.find(":selected").text();

        let searchInfo = {
            "username":username,
            "firstName":firstname,
            "lastName":lastname,
            "role":role
        }

        let searchedUsers = userService.searchUser(searchInfo);
        renderUsers(searchedUsers);

    }

    /*
     * renders information for a single user only
     */
    function renderUser(user) {

        $tBody.empty();
        let $tRow = $userRowTemplate.clone();
        console.log(user);
        if(user != null){
            $tRow.removeClass('wbdv-hidden');
            $tRow.attr("id",user.id);
            $tRow.find('.wbdv-username')
                .html(user.username);
            $tRow.find('.wbdv-first-name')
                .html(user.firstName);
            $tRow.find('.wbdv-last-name')
                .html(user.lastName);
            $tRow.find('.wbdv-role')
                .html(user.role);
            $tRow.find('.wbdv-remove').click(deleteUser);
            $tRow.find('.wbdv-edit').click(selectUser);
            $tBody.append($tRow);
        }
    }

    /*
     * accepts an array of user instances and renders them
     */
    function renderUsers(users) {

        $tBody.empty();
        let $tRow;

        for(var i=0; i<users.length; i++){
            $tRow = $userRowTemplate.clone();
            $tRow.removeClass('wbdv-hidden');
            $tRow.attr("id",users[i].id);
            $tRow.find('.wbdv-username')
                .html(users[i].username);
            $tRow.find('.wbdv-first-name')
                .html(users[i].firstName);
            $tRow.find('.wbdv-last-name')
                .html(users[i].lastName);
            $tRow.find('.wbdv-role')
                .html(users[i].role);
            $tRow.find('.wbdv-remove').click(deleteUser);
            $tRow.find('.wbdv-edit').click(selectUser);
            $tBody.append($tRow);

        }
    }


})();