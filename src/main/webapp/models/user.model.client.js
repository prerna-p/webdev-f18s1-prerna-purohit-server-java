function User(username, password, firstName, lastName, phone, role, dateOfBirth) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;

    this.setUsername = setUsername;
    this.getUsername = getUsername;

    this.setPassword = setPassword;
    this.getPassword = getPassword;

    this.setFirstname = setFirstName;
    this.getFirstname = getFirstName;

    this.setLastName = setLastName;
    this.getLastname = getLastName;

    // ...same for rest of properties…

    function setUsername(username) {
        this.username = username;
    }
    function getUsername() {
        return this.username;
    }
    function setPassword(password) {
        this.password = password;
    }
    function getUsername() {
        return this.username;
    }
}
