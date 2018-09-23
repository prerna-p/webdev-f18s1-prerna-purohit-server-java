function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
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
        console.log(userId);
        oldInfo = findUserById(userId);
        if(oldInfo.username != user.username){
            oldInfo.username = user.username;
        }
        if(oldInfo.firstName != user.firstName){
            oldInfo.firstName = user.firstName;
        }
        if(oldInfo.lastName != user.lastName){
            oldInfo.lastName = user.lastName;
        }
        if(oldInfo.role != user.role){
            oldInfo.role = user.role;
        }

    }

    function deleteUser(userId, callback) {

    }

}
