import React, { useState, useEffect } from "react";
import "../../assets/styles/main.css";
import GalleryForm from "../../components/GalleryForm";
import { useForm } from "react-hook-form";
import StorageService from "../../services/file";
import galleryService from "../../services/gallery";
import storageService from "../../services/file";

const PhotoGallery: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [photos, setPhotos] = useState<{ id: string, title: string, image: string, year: number }[]>([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<{title: string, year: string, image: FileList;}>();
  const years = ["All", ...Array.from(new Set(photos.map((p) => p.year))).sort((a, b) => a - b)];
  const filteredPhotos = filter === "All" ? photos : photos.filter((p) => p.year.toString() === filter);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await galleryService.getGalleryPhotos();
        if (data && 'documents' in data) {
          const formatted = data.documents.map((doc) => ({
            id: doc.$id,
            title: doc.title,
            image: storageService.getPhotoView(doc.image) ?? "",
            year: parseInt(doc.year),
          }));
          setPhotos(formatted);
        }
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    fetchPhotos();
    const cookieFallback = localStorage.getItem("cookieFallback");
    if (cookieFallback && cookieFallback !== "[]") {
      setIsLoggedIn(true);
    }
  }, []);

  const onSubmit = async (data: { title: string, year: string, image: FileList }) => {
    try {
      const file = data.image[0];
      const uploaded = await StorageService.createPhoto(file);
  
      const newPhoto = {
        title: data.title,
        image: uploaded?.$id,
        year: data.year,
      };
  
      const created = await galleryService.createGalleryPhoto(newPhoto);
  
      const newPhotoFormatted = {
        id: String(created?.$id ?? ""),
        title: created?.title ?? "",
        image: storageService.getPhotoView(created?.image) ?? "",
        year: parseInt(created?.year ?? "0"),
      };
  
      setPhotos((prev) => [newPhotoFormatted, ...prev]);
      alert("Photo saved successfully!");
      reset();
    } catch (error) {
      console.error("Error saving photo:", error);
      alert("Failed to save photo.");
    }
  };

  const handleDelete = async (id: string, image: string) => {
    try {
      await galleryService.deleteGalleryPhoto(id);
      await StorageService.deletePhoto(image);
      setPhotos((prev) => prev.filter((photo) => photo.id !== id));
      alert("Photo deleted successfully!");
    } catch (error) {
      console.error("Error deleting photo:", error);
      alert("Failed to delete photo.");
    }
  };
  


  return (
    <>
      {isLoggedIn && (
        <GalleryForm
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
        />
      )}

      <div className="gallery-container">
        <div className="filter-tabs">
          {years.map((yr) => (
            <button
              key={yr}
              className={`filter-button ${filter === yr.toString() ? "active" : ""}`}
              onClick={() => setFilter(yr.toString())}
            >
              {yr}
            </button>
          ))}
        </div>

        <div className="photo-grid">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="photo-item">
              {isLoggedIn && <button className="delete-btn" onClick={() => handleDelete(photo.id, photo.image)}>×</button>}
              <img src={photo.image} alt={photo.title} />
              <div className="overlay">
                <p>{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;