import styled from 'styled-components';
import style from '../../styles/Home.module.css'

const BodyText = styled.p`
color: #01355F;
font-family: Georgia;
font-size: 14pt;
`
const TextCont = styled.div`
padding-left: 3rem;
padding-right: 3rem;
padding-bottom: 4rem;
display: flex;
align-items: flex-start;
`

export default function InfoText() {
    return (
        <TextCont>
            <BodyText>
                <b>The Expo Line operates two routes:</b> <br/>
                Waterfront Station to King George Station. <br/>
                Waterfront Station  to Production Way-University Station. <br/>
                <br/>

                <b>Transfer to other Lines at the following stations:</b> <br/>
                Use Columbia Station to transfer to a train going 
                to either King George or Production Way-University using the Millennium Line. <br/>
                Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.
            </BodyText>
        </TextCont>
    )

}