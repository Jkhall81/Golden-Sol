import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";

export async function POST(req: NextRequest) {
  const { date } = await req.json();

  try {
    const snapshot = await db
      .collection("appointments")
      .where("date", "==", date)
      .get();

    const bookedTimes = snapshot.docs.map((doc) => doc.data().time);

    return NextResponse.json({ bookedTimes });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ bookedTimes: [] }, { status: 500 });
  }
}
