function User(username, password, firstName, lastName, phone, role, dateOfBirth) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.role = role;
    this.dateOfBirth = dateOfBirth;

    this.setUsername = setUsername;
    this.getUsername = getUsername;

    this.setPassword = setPassword;
    this.getPassword = getPassword;

    this.setFirstname = setFirstName;
    this.getFirstname = getFirstName;

    this.setLastName = setLastName;
    this.getLastname = getLastName;

    this.setPhone = setPhone;
    this.getPhone = getPhone;

    this.getRole = getRole;
    this.setRole = setRole;

    this.getDateOfBirth = getDateOfBirth;
    this.setDateOfBirth = setDateOfBirth;

    function setUsername(username) {
        this.username = username;
    }
    function getUsername() {
        return this.username;
    }

    function setPassword(password) {
        this.password = password;
    }
    function getPassword() {
        return this.password;
    }

    function setFirstName(firstName) {
        this.firstName = firstName;
    }
    function getFirstName() {
        return this.firstName;
    }

    function setLastName(lastName) {
        this.lastName = lastName;
    }
    function getLastName() {
        return this.lastName;
    }

    function setPhone(phone) {
        this.phone = phone;
    }

    function getPhone() {
        return this.phone;
    }
    function setRole(role) {
        this.role = role;
    }

    function getRole() {
        return this.role;
    }
    function setDateOfBirth(dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    function getDateOfBirth() {
        return this.dateOfBirth;
    }
}
