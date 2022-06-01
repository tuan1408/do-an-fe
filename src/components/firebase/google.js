import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider  } from "firebase/auth"
import { app } from "./index";

export const keeplogin= (setuid, setuser)=> {
    const auth= getAuth()
    onAuthStateChanged(auth, user=> {
        if(user) {
            setuid(()=> user.uid)
            setuser(()=> ({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL.replace("s96", "s200"),
                phonenumber: user.phoneNumber
            }))
            return
        }
        else {
            return
        }
    })    
}
export const logingoogle= ()=> {
    const provider= new GoogleAuthProvider()
    const auth= getAuth()
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}
export const signout= (setuid, setuser)=> {
    const auth= getAuth()
    signOut(auth).then(() => {
        // Sign-out successful.
        setuser(()=> ({
            name: "",
            phonenumber: "",
            email: "",
            photo: ""
        }))
        setuid(()=> "")
        return
      }).catch((error) => {
        // An error happened.
      });
}