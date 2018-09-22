// Immediately Invoked Function Expression (IIFE)
(function () {
    var $usernameFld, $passwordFld;
    var  $firstnameFld,  $lastnameFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();

    $(main);


    function main() {
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
        $removeBtn.click(deleteUser);
    }

    function createUser() {
        console.log("in createUser");
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

})()