import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import ProjectModel from "@/lib/models/ProjectsModel";
import mongoose from "mongoose";

export async function GET(request: Request) {
  try {
    await connectToDB();
    const project = await ProjectModel.find();
    return new NextResponse(JSON.stringify(project), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to get Project Error:\n${error.message}`,
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
    const { name, description, tags, image, source_code_link, websitelinks } =
      body;

    // //Checking if the data are empty
    if (
      !name ||
      !description ||
      !tags ||
      !image ||
      !source_code_link ||
      !websitelinks
    ) {
      return new NextResponse(
        JSON.stringify({
          message:
            "Missing name or description or tags or image or source_code_link or websitelinks",
        }),
        {
          status: 400,
        }
      );
    }
    const newProject = new ProjectModel({
      name,
      description,
      tags,
      image,
      source_code_link,
      websitelinks,
    });
    await ProjectModel.createIndexes();
    await newProject.save();
    return new NextResponse(JSON.stringify(newProject), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    if (error.code === 11000 && error.keyPattern && error.keyPattern.detail) {
      return new NextResponse(
        JSON.stringify({
          message: `Project with the same detail already exists.: ${error.message}`,
        }),
        {
          status: 400,
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: `Failed to register Project: ${error.message}`,
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
    const { name, description, tags, image, source_code_link, websitelinks } =
      body;

    // //Checking if the data are empty
    if (
      !name ||
      !description ||
      !tags ||
      !image ||
      !source_code_link ||
      !websitelinks
    ) {
      return new NextResponse(
        JSON.stringify({
          message:
            "Missing name or description or tags or image or source_code_link or websitelinks",
        }),
        {
          status: 400,
        }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(id!))
      return new NextResponse(
        JSON.stringify({
          message: `No Project with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    const updatedProject = {
      name,
      description,
      tags,
      image,
      source_code_link,
      websitelinks,
      _id: id,
    };
    await ProjectModel.findByIdAndUpdate(id, updatedProject, { new: true });
    return new NextResponse(JSON.stringify(updatedProject), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    if (error.code === 11000 && error.keyPattern && error.keyPattern.detail) {
      return new NextResponse(
        JSON.stringify({
          message: `Project with the same detail already exists.: ${error.message}`,
        }),
        {
          status: 400,
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: `Failed to register Project: ${error.message}`,
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
          message: `No Project with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    await ProjectModel.findByIdAndDelete(id);
    return new NextResponse(
      JSON.stringify({ message: "Project deleted successfully." }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to Delete Project: ${error.message}`,
      }),
      {
        status: 500,
      }
    );
  }
}
