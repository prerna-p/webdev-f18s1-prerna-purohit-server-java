// Immediately Invoked Function Expression (IIFE)
(function () {
    var usernameFld, passwordFld;
    var firstNameFld, lastNameFld, roleFld;
    var removeBtn, editBtn, createBtn;
    var firstNameFld, lastNameFld;
    var userRowTemplate, tBody;
    var userService = new AdminUserServiceClient();
    var $users;
    $(main);


    function main() {
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");
        $createBtn = $(".wbdv-create");
        $editBtn = $(".wbdv-update");
        $removeBtn = $(".wbdv-remove");
        $roleFld = $("#roleFld");

        $userRowTemplate = $(".wbdv-template.wbdv-user");
        $tBody = $(".wbdv-tbody");

        $createBtn.click(createUser);
        $removeBtn.click(deleteUser);

        findAllUsers();
    }
    
    function findAllUsers() {
        users = userService.findAllUsers();
        renderUsers(users);
    }

    function createUser() {
        var username = $usernameFld.val();
        var firstname = $firstNameFld.val();
        var password = $passwordFld.val();
        var lastname = $lastNameFld.val();
        var role = $roleFld.find(":selected").text();

        $usernameFld.val("");
        $firstNameFld.val("");
        $lastNameFld.val("");
        $passwordFld.val("");
        $roleFld.val("");

        let newUser = {
            "username":username,
            "password":password,
            "firstName":firstname,
            "lastName":lastname,
            "role":role
        }

        userService.createUser(newUser);

        findAllUsers();
    }

    function deleteUser(event) {
        console.log("in deleteUser");
        $(event.currentTarget).attr("id");

    }

    function updateUser() {
        console.log("in updateUser()")
    }


    function renderUsers(users) {

        console.log("renderUsers()");
        $tBody.empty();
        let $tRow;
        console.log(users);

        for(var i=0; i<users.length; i++){
            $tRow = $userRowTemplate.clone();
            $tRow.removeClass('wbdv-hidden');
            $tRow.find('.wbdv-username')
                .html(users[i].username);
            $tRow.find('.wbdv-first-name')
                .html(users[i].firstName);
            $tRow.find('.wbdv-last-name')
                .html(users[i].lastName);
            $tRow.find('.wbdv-role')
                .html(users[i].role);
            $tRow.find('.wbdv-remove').click(deleteUser);
            $tRow.find('.wbdv-edit').click(updateUser);
            $tBody.append($tRow);

        }
    }


})()