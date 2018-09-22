(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    //var userService = new AdminUserServiceClient();
    $(main);


    function main() {
        // language=JQuery-CSS
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $firstnameFld = $("#firstnameFld");
        $lastnameFld = $("#lastnameFld");
        $createBtn = $(".wbdv-create");
        $editBtn = $(".wbdv-update");
        $removeBtn = $(".wbdv-remove");

        $userRowTemplate = $(".wbdv-template.wbdv-user");
        $tBody = $(".wbdv-tbody");

        $createBtn.click(createUser);
        $deleteBtn.click(deleteUser);
    }

    function createUser() {
        var newUser = $userRowTemplate.clone();
        newUser
            .attr("id", timestamp)
            .removeClass("wbdv-hidden")
            .find(".wbdv-username")
            .html($usernameFld);

        $tBody.append(newUser);
    }

    function deleteUser(event) {
        $(event.currentTarget).attr("id");
        console.log();

    }

})