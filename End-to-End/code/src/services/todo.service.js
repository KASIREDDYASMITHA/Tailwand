import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../lib/firebase";

// Collection ref
const TODOS = "todos";

export async function fetchTodosByUser(userId) {
  const q = query(collection(db, TODOS), where("userId", "==", userId), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  return items;
}

export async function createTodo({ userId, title }) {
  const payload = {
    userId,
    title,
    status: "pending",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  const ref = await addDoc(collection(db, TODOS), payload);
  return { id: ref.id, ...payload };
}

export async function updateTodoTitle(id, title) {
  const ref = doc(db, TODOS, id);
  await updateDoc(ref, { title, updatedAt: Date.now() });
}

export async function toggleTodoStatus(id, currentStatus) {
  const ref = doc(db, TODOS, id);
  const next = currentStatus === "completed" ? "pending" : "completed";
  await updateDoc(ref, { status: next, updatedAt: Date.now() });
  return next;
}

export async function deleteTodoById(id) {
  const ref = doc(db, TODOS, id);
  await deleteDoc(ref);
}
