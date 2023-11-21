import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import IntroductionModel from "@/lib/models/IntroductionModel";
import mongoose from "mongoose";
export async function POST(request: Request) {
  try {
    await connectToDB();

    const body = await request.json();
    const { bio, selectedImage, password } = body;

    // //Checking if the data are empty
    if (!bio || !selectedImage) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing Bio OR Selected Image",
        }),
        {
          status: 400,
        }
      );
    }
    const newBio = new IntroductionModel({ bio, selectedImage, password });
    await newBio.save();
    return new NextResponse(JSON.stringify(newBio), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to register bio: ${error.message}`,
      }),
      {
        status: 500,
      }
    );
  }
}

export async function GET(request: Request) {
  try {
    await connectToDB();
    const bio = await IntroductionModel.find();
    return new NextResponse(JSON.stringify(bio), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({ message: `getBio Error:\n${error.message}` }),
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    await connectToDB();
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const body = await request.json();
    const { bio, selectedImage } = body;

    // //Checking if the data are empty
    if (!bio || !selectedImage) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing Bio OR Selected Image",
        }),
        {
          status: 400,
        }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(id!))
      return new NextResponse(
        JSON.stringify({
          message: `No patch with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    const updatedBio = { bio, selectedImage, _id: id };
    await IntroductionModel.findByIdAndUpdate(id, updatedBio, { new: true });
    return new NextResponse(JSON.stringify(updatedBio), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to Edit bio: ${error.message}`,
      }),
      {
        status: 500,
      }
    );
  }
}
