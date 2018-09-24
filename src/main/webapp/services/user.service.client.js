function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.searchUser = searchUser;
    this.url = "users.json";
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
        let username, firstname, lastname, role;
        if(searchInfo.username != ''){
            username = searchInfo.username.toLowerCase();
        }
        if(searchInfo.firstName != ''){
            firstname = searchInfo.firstName.toLowerCase();
        }
        if(searchInfo.lastName != ''){
            lastname = searchInfo.lastName.toLowerCase();
        }
        if(searchInfo.role != ''){
            role = searchInfo.role;
        }

        for(var i=0; i<users.length; i++){
            if(users[i].username.toLowerCase() == username ||
                users[i].firstName.toLowerCase() == firstname ||
                users[i].lastName.toLowerCase() == lastname ||
                users[i].role == role) {

                return users[i];
            }

        }

    }

}
