import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

// Auth service: components never call Firebase directly
export async function loginUser(email, password) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

export async function signupUser(email, password) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
}
