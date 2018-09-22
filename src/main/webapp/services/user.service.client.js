(function () {

function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    var self = this;

    function createUser(user, callback) {

    }

    function findAllUsers() {
        return [
            {username: 'alice'},
            {username: 'bob '},
            {username: 'charly'}
        ]
    }

    function findUserById(userId, callback) {

    }

    function updateUser(userId, user, callback) {

    }

    function deleteUser(userId, callback) {

    }
    }
})()
