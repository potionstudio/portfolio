import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfHxfMzMRGF9T-_Wh_I40g__4hfjBFFEw",
  authDomain: "portfolio-b5db8.firebaseapp.com",
  projectId: "portfolio-b5db8",
  storageBucket: "portfolio-b5db8.appspot.com",
  messagingSenderId: "243112160497",
  appId: "1:243112160497:web:a827699f88976b88a44d50",
  measurementId: "G-TZ4R4EBYJ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// ============================================

// load data functions
export let loading_data = new Array(20).fill({
  lang: "Loading",
  description: "아직 로딩 중 입니다...",
  link: null,
  name: "🃏",
});

let cached_service = null;
export async function load_services(action) {
  let load_data = new Array();

  if (cached_service === null) {
    const service_ref = doc(firestore, "v2", "service");
    const service_snap = await getDoc(service_ref);
    const service_data = service_snap.data();

    load_data = service_data.list;
    cached_service = load_data;

    console.log("model: cache miss!");
    console.log("model: saved cache");
  } else {
    load_data = cached_service;
    console.log("model: catched cache!");
  }

  action(load_data);
}

let cached_skill = null;
export async function load_skills(action) {
  let load_data = new Array();

  if (cached_skill === null) {
    const skill_ref = doc(firestore, "v2", "skill");
    const skill_snap = await getDoc(skill_ref);
    const skill_data = skill_snap.data();

    load_data = skill_data.list;
    cached_skill = load_data;

    console.log("model: cache miss!");
    console.log("model: saved cache");
  } else {
    load_data = cached_skill;
    console.log("model: catched cache!");
  }

  action(load_data);
}
