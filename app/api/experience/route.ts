import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import ExperienceModel from "@/lib/models/ExperiencesModel";
import mongoose from "mongoose";

export async function GET(request: Request) {
  try {
    await connectToDB();
    const experience = await ExperienceModel.find();
    return new NextResponse(JSON.stringify(experience), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to get Experience Error:\n${error.message}`,
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
    const { title, company_name, icon, iconBg, date, points } = body;

    // //Checking if the data are empty
    if (!title || !company_name || !icon || !iconBg || !date || !points) {
      return new NextResponse(
        JSON.stringify({
          message:
            "Missing title or company_name or icon or iconBg or date or points ",
        }),
        {
          status: 400,
        }
      );
    }

    const newExperience = new ExperienceModel({
      title,
      company_name,
      icon,
      iconBg,
      date,
      points,
    });
    await ExperienceModel.createIndexes();
    await newExperience.save();
    return new NextResponse(JSON.stringify(newExperience), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    if (error.code === 11000 && error.keyPattern && error.keyPattern.detail) {
      return new NextResponse(
        JSON.stringify({
          message: `Experience with the same detail already exists.: ${error.message}`,
        }),
        {
          status: 400,
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: `Failed to register Experience: ${error.message}`,
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
    const { title, company_name, icon, iconBg, date, points } = body;
    // //Checking if the data are empty
    if (!title || !company_name || !icon || !iconBg || !date || !points) {
      return new NextResponse(
        JSON.stringify({
          message:
            "Missing title or company_name or icon or iconBg or date or points ",
        }),
        {
          status: 400,
        }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(id!))
      return new NextResponse(
        JSON.stringify({
          message: `No Experience with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    const updatedExperience = {
      title,
      company_name,
      icon,
      iconBg,
      date,
      points,
      _id: id,
    };
    await ExperienceModel.findByIdAndUpdate(id, updatedExperience, {
      new: true,
    });
    return new NextResponse(JSON.stringify(updatedExperience), {
      status: 200,
    });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    if (error.code === 11000 && error.keyPattern && error.keyPattern.detail) {
      return new NextResponse(
        JSON.stringify({
          message: `Experience with the same detail already exists.: ${error.message}`,
        }),
        {
          status: 400,
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: `Failed to register Experience: ${error.message}`,
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
          message: `No Experience with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    await ExperienceModel.findByIdAndDelete(id);
    return new NextResponse(
      JSON.stringify({ message: "Experience deleted successfully." }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to Delete Experience: ${error.message}`,
      }),
      {
        status: 500,
      }
    );
  }
}
