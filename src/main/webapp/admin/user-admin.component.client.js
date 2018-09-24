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
        $searchBtn.click(searchUser);

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
        var record = $(event.currentTarget).parent().parent().parent().parent();
        var id = record.attr('id');
        userService.deleteUser(id);
        findAllUsers();

    }

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

    function renderUser(event) {
        var target = $(event.target);
        var record = target.parent().parent().parent().parent();
        var id = record.attr('id');
        var userInfo = userService.findUserById(id);
        $usernameFld.val(userInfo.username);
        $passwordFld.val(userInfo.password);
        $firstNameFld.val(userInfo.firstName);
        $lastNameFld.val(userInfo.lastName);
        $roleFld.val(userInfo.role);
        $updateBtn.attr("id",userInfo.id);
    }

    function findUserById(id) {
        var user = userService.findUserById(id);
    }

    function selectUser(user) {

        $tBody.empty();
        let $tRow = $userRowTemplate.clone();
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
            $tRow.find('.wbdv-edit').click(renderUser);
            $tBody.append($tRow);
        }
    }

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
        let userField = userService.searchUser(searchInfo);
        selectUser(userField);
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
            $tRow.find('.wbdv-edit').click(renderUser);
            $tBody.append($tRow);

        }
    }


})();