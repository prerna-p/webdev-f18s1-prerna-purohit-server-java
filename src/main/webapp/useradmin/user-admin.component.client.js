
var $usernameFld, $passwordFld;
var $removeBtn, $editBtn $createBtn;
var $firstnameFld, $lastnameFld;
var $firstnameFld, $lastnameFld;
var $createBtn, $selectBtn, $updateBtn, $deleteBtn;
var $userRowTemplate, $tBody;
$(main);


function main() {
    $usernameFld = $("#usernameFld");
    $passwordFld = $("#passwordFld");
    $firstnameFld = $("#firstnameFld");
    $lastnameFld = $("#lastnameFld");
    $createBtn = $(".wbdv-create");
    $updateBtn = $(".wbdv-update");

     $userRowTemplate = $(".wbdv-template.wbdv-user")
    $tBody = $(".wbdv-body")

    $createBtn.click(createUser);
     $deleteBtn.click(deleteUser);
}

function createUser() {
    var newUser = $userRowTemplate.clone();
    newUser
        .attr("id",timestamp)
        .removeClass("wbdv-hidden")
        .find(".wbdv-username")
        .html(usernameFld);

    $tBody.append(newUser);
}

function deleteUser(event) {
    $(event.currentTarget).attr("id");
    console.log()

}