// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXj1YUF3FJHbhE6eVQIH9-jmTQE_0ITmM",
    authDomain: "projet-integrateur-10205.firebaseapp.com",
    projectId: "projet-integrateur-10205",
    storageBucket: "projet-integrateur-10205.appspot.com",
    messagingSenderId: "643469963414",
    appId: "1:643469963414:web:ed3cf22e2c9bf1ed0d12b7",
    measurementId: "G-5KV0YZ6B41"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const urls_homme = doc(db, 'clothes/urls_homme')

function write(){
    const doc = {
        "shorts_more_small": [
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/FogBlueMOREMeshShort5_150x.jpg?v=1669290073",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/BlackMOREMeshShort5_150x.jpg?v=1669289973",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/BurgundyMOREMeshShort5_150x.jpg?v=1669290019",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/MochaMOREMeshShort5_150x.jpg?v=1669290102"
            
        ],
        "shorts_more_big":[
            "https://cdn.shopify.com/s/files/1/0667/0133/products/FogBlueMOREMeshShort5_1000x.jpg?v=1669290073",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/FogBlueMOREMeshShort1_1000x.jpg?v=1668812602",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/BlackMOREMeshShort1_1000x.jpg?v=1668812566",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/BlackMOREMeshShort5_1000x.jpg?v=1669289973",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/BurgundyMOREMeshShort5_1000x.jpg?v=1669290019",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/BurgundyMOREMeshShort1_1000x.jpg?v=1668812598",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/MochaMOREMeshShort1_1000x.jpg?v=1668812607",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/MochaMOREMeshShort5_1000x.jpg?v=1669290102"
        ],
        "joggers_small":[
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/BlackStudioPants5_150x.jpg?v=1667952640",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/OysterGreyStudioPant6_150x.jpg?v=1667952882",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/FogBlueStudioPant5_150x.jpg?v=1667952678",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/WhaleBlueStudioPant1_150x.jpg?v=1667953108"
        ],
        "joggers_big":[
            "https://cdn.shopify.com/s/files/1/0667/0133/products/BlackStudioPants5_1000x.jpg?v=1667952640",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/BlackStudioPants4_1000x.jpg?v=1667952640",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/OysterGreyStudioPant2_1000x.jpg?v=1667952882",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/OysterGreyStudioPant6_1000x.jpg?v=1667952882",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/FogBlueStudioPant5_1000x.jpg?v=1667952678",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/FogBlueStudioPant2_1000x.jpg?v=1667952677",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/WhaleBlueStudioPant1_1000x.jpg?v=1667953108",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/WhaleBlueStudioPant3_1000x.jpg?v=1667953106"
        ],
        "tanks_small": [
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/MoandIlon1_150x.jpg?v=1657309240",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/image_52f52631-54cd-434f-bc2c-339cb8f00a45_150x.jpg?v=1657301868",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/image_ba548afe-ed1e-44e6-a0c7-c9fd41d8fb46_150x.jpg?v=1657321637",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/MoandIlon25_1_150x.jpg?v=1657309475"
        ],
        "tanks_big": [
            "https://cdn.shopify.com/s/files/1/0667/0133/products/MoandIlon1_1000x.jpg?v=1657309240",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/MoandIlon3_1000x.jpg?v=1657309240",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/image_52f52631-54cd-434f-bc2c-339cb8f00a45_1000x.jpg?v=1657301868",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/image_b35751ad-6e90-4d1d-b22c-b4824e988ff0_1000x.jpg?v=1657301870",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/image_ba548afe-ed1e-44e6-a0c7-c9fd41d8fb46_1000x.jpg?v=1657321637",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/image_fbf87303-da54-41bf-b2c9-2efa84abbd42_1000x.jpg?v=1657321641",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/MoandIlon25_1_1000x.jpg?v=1657309475",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/MoandIlon27_1000x.jpg?v=1657309476"
        ],
        "hoodie_small":[
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/PulloverHoodieFudgeBrown4_dc5919ba-7619-46df-b446-5d4dd8f78d60_150x.jpg?v=1665438045",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/PulloverHoodieOysterGrey1_150x.jpg?v=1665177593",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/PulloverHoodieHarborNavy1_150x.jpg?v=1665177169",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/Men_sElements1001_150x.jpg?v=1648077479"
        ],
        "hoodie_big":[
            "https://cdn.shopify.com/s/files/1/0667/0133/products/PulloverHoodieFudgeBrown4_dc5919ba-7619-46df-b446-5d4dd8f78d60_1000x.jpg?v=1665438045",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/PulloverHoodieFudgeBrown2_ddcfbc63-4468-445e-91c3-fcc92ac564e9_1000x.jpg?v=1665438045",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/PulloverHoodieOysterGrey3_1000x.jpg?v=1665177630",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/PulloverHoodieOysterGrey1_1000x.jpg?v=1665177593",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/PulloverHoodieHarborNavy1_1000x.jpg?v=1665177169",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/PulloverHoodieHarborNavy3_1000x.jpg?v=1665177168",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/Men_sElements1001_1000x.jpg?v=1648077479",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/Men_sElements1005_1000x.jpg?v=1650918304"
        ],
        "short_shorts_small":[
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/Kierantsandshorts58_1_150x.jpg?v=1657213890",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/image_31a3c701-1f38-4df9-9155-04c49eca6a86_150x.jpg?v=1657213999",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/Kierantsandshorts63_150x.jpg?v=1657213776",
            "https:////cdn.shopify.com/s/files/1/0667/0133/products/image_09c4a14c-cc29-48c5-bcf3-d229528a6ebe_150x.jpg?v=1657213844"
        ],
        "short_shorts_big":[
            "https://cdn.shopify.com/s/files/1/0667/0133/products/image_09c4a14c-cc29-48c5-bcf3-d229528a6ebe_1000x.jpg?v=1657213844",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/image_59c721ed-2035-47ea-81e9-956b76c476f8_1000x.jpg?v=1657213860",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/Kierantsandshorts64_1000x.jpg?v=1657213704",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/Kierantsandshorts63_1000x.jpg?v=1657213776",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/image_31a3c701-1f38-4df9-9155-04c49eca6a86_1000x.jpg?v=1657213999",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/image_2c6b3ae0-afc1-44b4-8b9d-3c964e830ec5_1000x.jpg?v=1657214004",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/Kierantsandshorts59_1_1000x.jpg?v=1657213945",
            "https://cdn.shopify.com/s/files/1/0667/0133/products/Kierantsandshorts58_1_1000x.jpg?v=1657213890"
        ]
    }
    updateDoc(urls_homme, doc)
}

// write()