import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, writeBatch } from "firebase/firestore";
import { db } from "../firebase";

// Get a new write batch
const batch = writeBatch(db);

// Create Item
export const createItem = async (collectionName, item) => {
    try {
        // docRef - is reference to our newly cretaed document
        const docRef = await addDoc(collection(db, collectionName), item);
        console.log("Document written with ID: ", docRef.id);
        return true
    } catch (e) {
        console.error("Error adding document: ", e);
        return false
    }

};

// Get All Items
export const getAllItems = async (collectionName, sortBy, sortOrder, limit) => {
    try {
        var allItems = [];

        var q = query(collection(db, collectionName))
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            allItems.push({ id: doc.id, ...doc.data() })
        });

        return allItems

    } catch (e) {
        console.error("Error getting documents: ", e);
    }
}

// Get Single Document
export const getItem = async (collectionName, id) => {
    try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data(); // Directly return the document data
        } else {
            console.log("No such document!");
            return null; // Return null if the document does not exist
        }
    } catch (error) {
        console.error("Error getting document: ", error);
        throw error; // Optionally rethrow the error to handle it elsewhere
    }
};

// Update Document
export const updateItem = async (collectionName, id, body) => {

    try {
        const docRef = doc(db, collectionName, id);
        var updatedDoc = await updateDoc(docRef, body);

        return true

    } catch (error) {
        console.log(error)
        return false
    }
}

// Delete Single Document
export const deleteItem = async (collectionName, id,) => {
    try {
        var deletedItem = await deleteDoc(doc(db, collectionName, id));
        console.log(deletedItem)

        return true
    } catch (error) {
        console.log(error)
        return false
    }
}
