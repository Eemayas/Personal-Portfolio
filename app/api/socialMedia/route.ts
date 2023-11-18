import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import SocialMediaModel from "@/lib/models/SocialMediaModel";
import mongoose from "mongoose";

export async function GET(request: Request) {
  try {
    await connectToDB();
    const project = await SocialMediaModel.find();
    return new NextResponse(JSON.stringify(project), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to get Social Media Error:\n${error.message}`,
      }),
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
  } catch (error) {}
  try {
    await connectToDB();

    const body = await request.json();
    const { name, logo, links } = body;

    // //Checking if the data are empty
    if (!name || !logo || !links) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing name or logo or links ",
        }),
        {
          status: 400,
        }
      );
    }

    const newSocialMedia = new SocialMediaModel({ name, logo, links });
    await SocialMediaModel.createIndexes();
    await newSocialMedia.save();
    return new NextResponse(JSON.stringify(newSocialMedia), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    if (error.code === 11000 && error.keyPattern && error.keyPattern.detail) {
      return new NextResponse(
        JSON.stringify({
          message: `Social Media with the same detail already exists.: ${error.message}`,
        }),
        {
          status: 400,
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: `Failed to register Social Media: ${error.message}`,
        }),
        {
          status: 500,
        }
      );
    }
  }
}

export async function PATCH(request: Request) {
  try {
    await connectToDB();
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const body = await request.json();
    const { name, logo, links } = body;

    // //Checking if the data are empty
    if (!name || !logo || !links) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing name or logo or links ",
        }),
        {
          status: 400,
        }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(id!))
      return new NextResponse(
        JSON.stringify({
          message: `No Social Media with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    const updatedSocialMedia = {
      name,
      logo,
      links,
      _id: id,
    };
    await SocialMediaModel.findByIdAndUpdate(id, updatedSocialMedia, {
      new: true,
    });
    return new NextResponse(JSON.stringify(updatedSocialMedia), {
      status: 200,
    });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    if (error.code === 11000 && error.keyPattern && error.keyPattern.detail) {
      return new NextResponse(
        JSON.stringify({
          message: `Social Media with the same detail already exists.: ${error.message}`,
        }),
        {
          status: 400,
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: `Failed to register Social Media: ${error.message}`,
        }),
        {
          status: 500,
        }
      );
    }
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
          message: `No Social Media with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    await SocialMediaModel.findByIdAndDelete(id);
    return new NextResponse(
      JSON.stringify({ message: "Social Media deleted successfully." }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to Delete Social Media: ${error.message}`,
      }),
      {
        status: 500,
      }
    );
  }
}
