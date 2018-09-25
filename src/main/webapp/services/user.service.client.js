function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.searchUser = searchUser;
    var self = this;

    let users = [
        {
            "id": "123",
            "username": "alice",
            "password": "alice",
            "email": "alice@wonderland.com",
            "firstName": "Alice",
            "lastName": "Wonderland",
            "role": "FACULTY"
        },
        {
            "id":"456",
            "username": "bob",
            "password": "bob",
            "email": "bob@builder.com",
            "firstName": "Bob",
            "lastName": "Builder",
            "role": "STUDENT"
        },
        {
            "id": "789",
            "username": "charly",
            "password": "charly",
            "email": "charly@peanuts.com",
            "firstName": "Charly",
            "lastName": "Brown",
            "role": "STUDENT"
        }
    ]

    function createUser(user) {
        users.push(user);
    }

    function findAllUsers() {
        return users;
    }

    function findUserById(userId) {
        for(var i=0; i<users.length; i++){
            if(users[i].id == userId){
                return users[i];
            }
        }
    }

    function updateUser(userId, user) {
        for(var i=0; i<users.length; i++) {
            if (users[i].id == userId) {
                if (users[i].username != user.username) {
                    users[i].username = user.username;
                }
                if (users[i].firstName != user.firstName) {
                    users[i].firstName = user.firstName;
                }
                if (users[i].lastName != user.lastName) {
                    users[i].lastName = user.lastName;
                }
                if (users[i].role != user.role) {
                    users[i].role = user.role;
                }
            }
        }

    }

    function deleteUser(userId) {
        var userInfo = findUserById(userId);
        users.pop(userInfo);
    }

    function searchUser(searchInfo) {
        let username = searchInfo.username.toLowerCase();
        let firstname = searchInfo.firstName.toLowerCase();
        let lastname = searchInfo.lastName.toLowerCase();
        let role = searchInfo.role;

        let searchedUsers = [];

        for(var i=0; i<users.length; i++){

            if((username == ""||(users[i].username.toLowerCase() == username)) &&
                (firstname == "" || (users[i].firstName.toLowerCase() == firstname)) &&
                (lastname == "" || (users[i].lastName.toLowerCase() == lastname)) &&
                (role == "" || (users[i].role == role))) {

                searchedUsers.push(users[i]);
            }

        }
        return searchedUsers;
    }

}
