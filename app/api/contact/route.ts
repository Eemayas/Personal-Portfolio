import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import ContactModel from "@/lib/models/ContactModel";
import mongoose from "mongoose";

export async function GET(request: Request) {
  try {
    await connectToDB();
    const contact = await ContactModel.find();
    return new NextResponse(JSON.stringify(contact), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to get Contact Error:\n${error.message}`,
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
    const { title, detail } = body;

    // //Checking if the data are empty
    if (!title || !detail) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing title OR detail",
        }),
        {
          status: 400,
        }
      );
    }
    const newContact = new ContactModel({ title, detail });
    await ContactModel.createIndexes();
    await newContact.save();
    return new NextResponse(JSON.stringify(newContact), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    if (error.code === 11000 && error.keyPattern && error.keyPattern.detail) {
      return new NextResponse(
        JSON.stringify({
          message: `Contact with the same detail already exists.: ${error.message}`,
        }),
        {
          status: 400,
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: `Failed to register Contact: ${error.message}`,
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
    const { title, detail } = body;

    // //Checking if the data are empty
    if (!title || !detail) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing title OR detail",
        }),
        {
          status: 400,
        }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(id!))
      return new NextResponse(
        JSON.stringify({
          message: `No Contact with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    const updatedcontact = { title, detail, _id: id };
    await ContactModel.findByIdAndUpdate(id, updatedcontact, { new: true });
    return new NextResponse(JSON.stringify(updatedcontact), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    if (error.code === 11000 && error.keyPattern && error.keyPattern.detail) {
      return new NextResponse(
        JSON.stringify({
          message: `Contact with the same detail already exists.: ${error.message}`,
        }),
        {
          status: 400,
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: `Failed to register Contact: ${error.message}`,
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
          message: `No Contact with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    await ContactModel.findByIdAndDelete(id);
    return new NextResponse(
      JSON.stringify({ message: "Contact deleted successfully." }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to Delete Contact: ${error.message}`,
      }),
      {
        status: 500,
      }
    );
  }
}
