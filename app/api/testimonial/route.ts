import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import TestimonialModel from "@/lib/models/TestimonialModel";
import mongoose from "mongoose";

export async function GET(request: Request) {
  try {
    await connectToDB();
    const project = await TestimonialModel.find();
    return new NextResponse(JSON.stringify(project), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to get Testimonial Error:\n${error.message}`,
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

    const { testimonial, name, designation, company, image } = body;

    // //Checking if the data are empty
    if (!testimonial || !name || !designation || !company || !image) {
      return new NextResponse(
        JSON.stringify({
          message:
            "Missing testimonial or name or designation or company or image ",
        }),
        {
          status: 400,
        }
      );
    }

    const newTestimonial = new TestimonialModel({
      testimonial,
      name,
      designation,
      company,
      image,
    });
    await TestimonialModel.createIndexes();
    await newTestimonial.save();
    return new NextResponse(JSON.stringify(newTestimonial), { status: 200 });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    if (error.code === 11000 && error.keyPattern && error.keyPattern.detail) {
      return new NextResponse(
        JSON.stringify({
          message: `Testimonial with the same detail already exists.: ${error.message}`,
        }),
        {
          status: 400,
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: `Failed to register Testimonial: ${error.message}`,
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
    const { testimonial, name, designation, company, image } = body;

    // //Checking if the data are empty
    if (!testimonial || !name || !designation || !company || !image) {
      return new NextResponse(
        JSON.stringify({
          message:
            "Missing testimonial or name or designation or company or image ",
        }),
        {
          status: 400,
        }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(id!))
      return new NextResponse(
        JSON.stringify({
          message: `No Testimonial with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    const updatedTestimonial = {
      testimonial,
      name,
      designation,
      company,
      image,
      _id: id,
    };
    await TestimonialModel.findByIdAndUpdate(id, updatedTestimonial, {
      new: true,
    });
    return new NextResponse(JSON.stringify(updatedTestimonial), {
      status: 200,
    });
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    if (error.code === 11000 && error.keyPattern && error.keyPattern.detail) {
      return new NextResponse(
        JSON.stringify({
          message: `Testimonial with the same detail already exists.: ${error.message}`,
        }),
        {
          status: 400,
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: `Failed to register Testimonial: ${error.message}`,
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
          message: `No Testimonial with id: ${id}`,
        }),
        {
          status: 404,
        }
      );
    await TestimonialModel.findByIdAndDelete(id);
    return new NextResponse(
      JSON.stringify({ message: "Testimonial deleted successfully." }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error.message); // Log the error for debugging purposes
    return new NextResponse(
      JSON.stringify({
        message: `Failed to Delete Testimonial: ${error.message}`,
      }),
      {
        status: 500,
      }
    );
  }
}
