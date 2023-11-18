import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import BioCardModel from "@/lib/models/BioCardModel";
import mongoose from "mongoose";

export async function GET(request: Request) {
  try {
    await connectToDB();
    const bioCard = await BioCardModel.find();
    return new NextResponse(JSON.stringify(bioCard), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to get BioCard Error:\n${error.message}`,
      }),
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDB();

    const body = await request.json();
    const { title, selectedImage } = body;

    // //Checking if the data are empty
    if (!title || !selectedImage) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing title OR Selected Image",
        }),
        {
          status: 400,
        }
      );
    }
    const newBioCard = new BioCardModel({ title, selectedImage });
    await newBioCard.save();
    return new NextResponse(JSON.stringify(newBioCard), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to register bioCard: ${error.message}`,
      }),
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
    const { title, selectedImage } = body;

    // //Checking if the data are empty
    if (!title || !selectedImage) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing title OR Selected Image",
        }),
        {
          status: 400,
        }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(id!))
      return new NextResponse(
        JSON.stringify({
          message: `No BioCard with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    const updatedBioCard = { title, selectedImage, _id: id };
    await BioCardModel.findByIdAndUpdate(id, updatedBioCard, { new: true });
    return new NextResponse(JSON.stringify(updatedBioCard), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to Edit bioCard: ${error.message}`,
      }),
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await connectToDB();
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id!))
      return new NextResponse(
        JSON.stringify({
          message: `No BioCard with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    await BioCardModel.findByIdAndDelete(id);
    return new NextResponse(
      JSON.stringify({ message: "BioCard deleted successfully." }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to Delete BioCard: ${error.message}`,
      }),
      {
        status: 500,
      }
    );
  }
}