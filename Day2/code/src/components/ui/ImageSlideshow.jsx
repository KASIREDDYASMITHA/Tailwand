"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/ImageSlideshow";
import { Button } from "@/components/ui/button";

export default function ImageSlideshow() {
  const images = [
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1016/400/250",
    "https://picsum.photos/id/1018/400/250",
  ];
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <Card className="w-[450px] mx-auto mt-10">
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <img src={images[index]} alt={`Slide ${index + 1}`} className="rounded-md mb-4" />
        <div className="flex space-x-4">
          <Button onClick={prevImage}>Previous</Button>
          <Button onClick={nextImage}>Next</Button>
        </div>
      </CardContent>
    </Card>
  );
}
