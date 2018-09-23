// Immediately Invoked Function Expression (IIFE)
(function () {
    var usernameFld, passwordFld;
    var firstNameFld, lastNameFld, roleFld;
    var removeBtn, editBtn, createBtn, searchBtn, updateBtn;
    var firstNameFld, lastNameFld;
    var userRowTemplate, tBody;
    var userService = new AdminUserServiceClient();
    var userId;
    var $users;
    $(main);


    function main() {
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");
        $roleFld = $("#roleFld");
        $createBtn = $(".wbdv-create");
        $editBtn = $(".wbdv-edit");
        $removeBtn = $(".wbdv-remove");
        $searchBtn = $(".wbdv-search");
        $updateBtn = $(".wbdv-update")

        $userRowTemplate = $(".wbdv-template.wbdv-user");
        $tBody = $(".wbdv-tbody");

        $createBtn.click(createUser);
        $removeBtn.click(deleteUser);
        $editBtn.click(renderUser);
        $searchBtn.click(findUserById);
        $updateBtn.click(updateUser);

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

        if(username === '') {
            alert("username must be entered");
            return;
        }

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

    function deleteUser(event) {
        console.log("in deleteUser");
        $(event.currentTarget).attr("id");

    }

    function renderUser(event){
        //console.log(event);
        var target = $(event.target);
        console.log(target.parent().parent().parent().parent()[0]);
        var $record = target.parent().parent().parent().parent();

        var $userInfo = userService.findUserById($id);
        $usernameFld.val($userInfo.username);
        $passwordFld.val($userInfo.password);
        $firstNameFld.val($userInfo.firstName);
        $lastNameFld.val($userInfo.lastName);
        $roleFld.val($userInfo.role);
    }

    function updateUser(event) {
        var username = $usernameFld.val();
        var firstname = $firstNameFld.val();
        var password = $passwordFld.val();
        var lastname = $lastNameFld.val();
        var role = $roleFld.find(":selected").text();

        let newUserInfo = {
            "username":username,
            "password":password,
            "firstName":firstname,
            "lastName":lastname,
            "role":role
        }

        userService.updateUser(id, newUserInfo);

    }

    function findUserById(id) {
        console.log("in findUserById");
        var user = userService.findUserById(id);
    }

    function selectUser() {
        console.log("in selectUser")
    }

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
            $tRow.find('.wbdv-edit').click(updateUser);
            $tBody.append($tRow);

        }
    }


})();