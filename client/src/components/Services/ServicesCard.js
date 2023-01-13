import {ServicesCardContainer, ServicesTitle, ServicesBody} from "./Services.style"

const ServicesCard = (props) => {
    return ( 
        <ServicesCardContainer mobile={props.mobile}>
            <ServicesTitle titleColor={props.titleColor}>{props.title}</ServicesTitle>
            <ServicesBody bodyColor={props.bodyColor}>{props.bodyText}</ServicesBody>
        </ServicesCardContainer>
     );
}
 
export default ServicesCard;