import ImageGalleryItem from "../imageItem/ImageGalleryItem";
import css from './ImageGallery.module.css';

export const ImageGallery = ({items}) => {
  return (
            <ul className={css.ImageGallery}>
            {items && items.map((item)=>(
                <ImageGalleryItem
                key={item.id}
                largeImageURL={item.largeImageURL}
                webformatURL={item.webformatURL}
                tags={item.tags}
                />
            ))}
        </ul>
  )
}
