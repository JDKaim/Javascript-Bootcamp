function greet(name) {
    if(name == null) {
        return "Hello there!";
    }

    if(Array.isArray(name)) {
        statement = "Hello";
        for(var i = 0; i < name.length; i++) {
            statement += (", " + name[i]);
        }
        return statement;
    }

    var comparison = name;
    comparison = comparison.toUpperCase();

    if(comparison === name) {
        return "HELLO " + name + "!";
    }

    return "Hello, " + name;
}