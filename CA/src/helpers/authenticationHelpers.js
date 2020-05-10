let fakeAuth = {
    isAuthenticated: false,
    secretData: {
        name: "user",
        password: "qwe123"
    }
};

export function signIn(name, password){
    if(fakeAuth.secretData.name === name  && fakeAuth.secretData.password === password){
        fakeAuth.isAuthenticated = true;
        return true;
    }
    return false;
}

export function signOut(){
        fakeAuth.isAuthenticated = false;
}

export function isAuthenticated(){
    return fakeAuth.isAuthenticated;
}