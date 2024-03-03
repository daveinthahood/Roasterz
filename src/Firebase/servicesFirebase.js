import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./configFirebase";


export const createUser = async(email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const signUser = async(email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const signGoogle = async() => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
    return result
}

export const signOut  = () => {
    return auth.signOut()
}