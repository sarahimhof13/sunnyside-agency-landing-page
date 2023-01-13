import { ImageGalleryContainer, GalleryImg } from "./ImageGallery.style";

import MilkBottlesMobileImg from "../../assets/mobile/image-gallery-milkbottles.jpg"
import OrangeMobileImg from "../../assets/mobile/image-gallery-orange.jpg"
import ConeMobileImg from "../../assets/mobile/image-gallery-cone.jpg"
import SugarMobileImg from "../../assets/mobile/image-gallery-sugar-cubes.jpg"

const ImageGallery = () => {
    return ( 
        <ImageGalleryContainer>
            <GalleryImg src={MilkBottlesMobileImg}/>
            <GalleryImg src={OrangeMobileImg} />
            <GalleryImg src={ConeMobileImg} />
            <GalleryImg src={SugarMobileImg} />
        </ImageGalleryContainer>
     );
}
 
export default ImageGallery;