import { db } from "../config";

import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

const userCollectionRef = collection(db, "users");

class UserDataService {
    addUsers = (newUser) => {
        return addDoc(userCollectionRef, newUser);
    }

    updateUser = (id, updatedUser) => {
        const userDoc = doc(db, "users", id);
        return updateDoc(userDoc, updatedUser);
    }

    deleteUser = (id) => {
        const userDoc = doc(db, "users", id)
        return deleteDoc(userDoc);
    }

    getAllUsers = () => {
        return getDocs(userCollectionRef);
    }

    getUser = (id) => {
        const userDoc = doc(db, "users", id);
        return getDocs(userDoc);
    }
}

export default new UserDataService();