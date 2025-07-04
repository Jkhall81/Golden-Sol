import admin from "firebase-admin";
import { cert } from "firebase-admin/app";

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
  );

  admin.initializeApp({
    credential: cert(serviceAccount),
  });
}

export const db = admin.firestore();
