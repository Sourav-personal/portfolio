// components/GalleryForm.tsx
import React from "react";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import "../assets/styles/main.css";

interface GalleryFormProps {
  register: UseFormRegister<{title: string, year: string, image: FileList;}>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: FieldErrors<{title: string, year: string, image: FileList;}>;
}

const GalleryForm: React.FC<GalleryFormProps> = ({ register, onSubmit, errors }) => {
  return (
    <form className="upload-form" onSubmit={onSubmit}>
      <div className="form-left">
        <div className="form-group">
          <label>Title:</label>
          <input type="text" {...register("title", { required: true })} />
          {errors.title && <span className="error">Title is required</span>}
        </div>

        <div className="form-group">
          <label>Year:</label>
          <input type="number" {...register("year", { required: true })} />
          {errors.year && <span className="error">Year is required</span>}
        </div>

        <button type="submit" className="save-button">
          Save
        </button>
      </div>

      <div className="form-right">
        <label>Upload Image:</label>
        <input type="file" accept="image/*" {...register("image", { required: true })} />
        {errors.image && <span className="error">Image is required</span>}
      </div>
    </form>
  );
};

export default GalleryForm;
