import { db } from "../config";

import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

const courserCollectionRef = collection(db, "coursers");

class CourseDataService {
    addCourses = (newCourse) => {
        return addDoc(courserCollectionRef, newCourse);
    }

    updateCourse = (id, updatedCourse) => {
        const courserDoc = doc(db, "coursers", id);
        return updateDoc(courserDoc, updatedCourse);
    }

    deleteCourse = (id) => {
        const courserDoc = doc(db, "coursers", id)
        return deleteDoc(courserDoc);
    }

    getAllCourses = () => {
        return getDocs(courserCollectionRef);
    }

    getCourse = (id) => {
        const courserDoc = doc(db, "coursers", id);
        return getDocs(courserDoc);
    }
}

export default new CourseDataService();