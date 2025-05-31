"use server";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function addComment(name: string, email: string, comment: string) {
  await addDoc(collection(db, "comments"), {
    name,
    email,
    comment,
    createdAt: Timestamp.now(),
  });
}
