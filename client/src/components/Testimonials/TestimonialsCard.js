import {TestimonialsCardContainer, AvatarImg, TestimonialBody, PersonName, PersonTitle} from "./Testimonials.style"

const TestimonialsCard = (props) => {
    return ( 
        <TestimonialsCardContainer>
            <AvatarImg src={props.imgSrc}/>
            <TestimonialBody>{props.bodyText}</TestimonialBody>
            <PersonName>{props.personName}</PersonName>
            <PersonTitle>{props.personTitle}</PersonTitle>
        </TestimonialsCardContainer>
     );
}
 
export default TestimonialsCard;