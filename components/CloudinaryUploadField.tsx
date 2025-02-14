/** @format */

import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

const CloudinaryUpload = ({ label, name, form, setForm }) => {
  const [imageURL, setImageURL] = useState(null);
  const [uploadId, setUploadId] = useState(null);

  return (
    <label className="flex flex-col">
      <span className="font-medium mb-4">{label}</span>
      <CldUploadWidget
        uploadPreset="portfoilo"
        onSuccess={(result) => {
          console.log("Upload result:", result);
          if (
            result &&
            result.event === "success" &&
            typeof result.info !== "string"
          ) {
            const { public_id, secure_url } = result.info;

            // Update form state with the uploaded image public_id
            setUploadId(public_id);
            setImageURL(secure_url);

            // Update the form with the public_id of the uploaded image
            if (setForm) {
              setForm({ ...form, [name]: secure_url });
            }
            console.log("Uploaded image secure_url:", secure_url);
          }
        }}
      >
        {({ open }) => (
          <button
            type="button"
            onClick={() => open()}
            className="cursor-pointer dark:bg-tertiary bg-tertiarylight py-4 px-6 rounded-lg outline-none border-none font-medium hover:bg-blue-600 transition duration-300"
          >
            Upload an Image
          </button>
        )}
      </CldUploadWidget>

      {imageURL && (
        <div className="mt-4">
          <span className="font-medium mb-4">Selected Image:</span>
          <img
            width={240}
            height={240}
            src={imageURL}
            alt="Selected"
            loading="lazy"
            className="max-w-full mt-2 rounded-[40px] border-4 border-red-500"
          />
        </div>
      )}
    </label>
  );
};

export default CloudinaryUpload;
