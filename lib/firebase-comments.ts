"use server";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function addComment(
  fullName: string,
  email: string,
  telegram: string,
  comment: string
) {
  await addDoc(collection(db, "comments"), {
    fullName,
    email,
    telegram,
    comment, // Make sure this is the comment, not telegram!
    createdAt: Timestamp.now(),
  });
}
