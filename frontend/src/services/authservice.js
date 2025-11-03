import { auth, googleProvider } from "../firebaseConfig";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";

//Sign up with email/password
export async function signupEmail(email, password){
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user
};

//Login with email/password
export async function loginEmail(email, password){
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
};

//sign in with google popup
export async function loginGoogle(){
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
};

//get firebase id token
export async function getIdToken(user){
    if (!user) return null;
    const token = await user.getIdToken(true)
    return token
};

