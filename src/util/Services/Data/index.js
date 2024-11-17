import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase";

const batch = writeBatch(db);

export const createItem = async (collectionName, item) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), item);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};

export const getAllItems = async (collectionName, sortBy, sortOrder, limit) => {
  try {
    var allItems = [];

    var q = query(collection(db, collectionName));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      allItems.push({ id: doc.id, ...doc.data() });
    });

    return allItems;
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
};

export const getItem = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export const updateItem = async (collectionName, id, body) => {
  try {
    const docRef = doc(db, collectionName, id);
    var updatedDoc = await updateDoc(docRef, body);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteItem = async (collectionName, id) => {
  try {
    var deletedItem = await deleteDoc(doc(db, collectionName, id));
    console.log(deletedItem);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
