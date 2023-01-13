import TestimonialsCard from "./TestimonialsCard";
import { TestimonialsContainer, TestimonialsHeading } from "./Testimonials.style";

// Import images
import EmilyImg from "../../assets/image-emily.jpg"
import ThomasImg from "../../assets/image-thomas.jpg"
import JennieImg from "../../assets/image-jennie.jpg"


const Testimonials = () => {
    return ( 
        <TestimonialsContainer>
            <TestimonialsHeading>Client Testimonials</TestimonialsHeading>
            <TestimonialsCard imgSrc={EmilyImg} bodyText="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit." personName="Emily R." personTitle="Marketing Director" />
            <TestimonialsCard imgSrc={ThomasImg} bodyText="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience." personName="Thomas S." personTitle="Chief Operating Officer" />
            <TestimonialsCard imgSrc={JennieImg} bodyText="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!" personName="Jennie F." personTitle="Business Owner" />
        </TestimonialsContainer>
     );
}
 
export default Testimonials;