import { useState } from "react"
import "./DragEvent.css"

const ImagePlaceholder = ({ src, alt = "" }: { src: string, alt?: string }) => {
  const [isError, setIsError] = useState(false)
  const placeHolderImage = "https://yt3.googleusercontent.com/ytc/AGIKgqMuqL_q4mDl6z1n42OFnGcSjyHlOyPphG5N88P-UA=s900-c-k-c0x00ffffff-no-rj"
  return (
    <img
      onDragStart={() => console.log("Estoy siendo arrastrado")}
      onError={() => setIsError(true)}
      src={isError ? placeHolderImage : src}
      alt={alt}
    />
  )
}

const DragEvent = () => {
  return (
    <>
      <div
        className="contenedor"
        onDragEnter={(event) => console.log(event)}
      ></div>
      <div className="img-grid">
        <img
          onDragStart={() => console.log("Estoy siendo arrastrado")}
          onDrag={() => console.log("Dragging...")}
          src="https://m.media-amazon.com/images/I/71KTPoAOX0L._SY445_.jpg"
          alt="quantum"
        />
        <ImagePlaceholder
          src="https://i.blogs.es/b12579/guardianes-de-la-galaxia-3/1024_2000.jpeg"
          alt="gog"
        />
        <img
          onDragStart={() => console.log("Estoy siendo arrastrado")}
          src="https://areajugones.sport.es/wp-content/uploads/2020/06/Capitana-Marvel-2-819x1024.jpg.webp"
          alt="cm2"
        />
      </div>
    </>
  )
}

export default DragEvent
