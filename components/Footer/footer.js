import styled from 'styled-components';
import style from '../../styles/Home.module.css';
import InfoText from '../../components/Header/body.js';

const FooterCont = styled.div`
width: 100vw;
background-color: white;
height: 14rem;
display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 1rem;
`
const Logo = styled.div`
padding-left: 2rem;
`
const BodyText = styled.p`
color: #01355F;
font-family: Georgia;
font-size: 12pt;
line-height: 180%;
`
const TextCont = styled.div`
padding-right: 4rem;
display: flex;
flex-direction: column;
align-items: center;
`


export default function Footer() {
    return (
        <FooterCont>
            <Logo>
                <img src="./rainy.gif" style={{ width: "25%" }} />
            </Logo>

            <TextCont>
                <BodyText>
                    <b>Getting Around</b> <br/>
                    Transit Fares <br/>
                    Schedule <br/>
                    Rider Info <br/>
                    Transit Alert <br/>

                </BodyText>
            </TextCont>

            <TextCont>
                <BodyText>
                    <b>Resouces</b> <br/>
                    Contact Us <br/>
                    Careers
                </BodyText>
            </TextCont>

            <TextCont>
                <BodyText>
                    <b>Contact Us</b> <br/>
                    Call us at 604.953.3333 <br/>
                    400-287 Nelson's Ct., <br/>
                    New Westminster, BC V3L0E7
                </BodyText>
            </TextCont>

        </FooterCont>
    )

}