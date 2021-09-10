import styled from "styled-components";

const Text = styled.p`
    font-size: 30px;
    margin: 0;
`

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 650px;
    width: 100%;
    margin-top: 20px;
    position: relative;    
    overflow: hidden;
    border-radius: 10px;

`

const Photo = styled.img`
    height: 100%;
    width: 98%;
    border-radius: 5px;
    box-shadow: 5px 10px 30px #888888;
    

`

const PersonInfo = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    position: absolute;
    color: red;
    bottom: 30px;
    left:10px;
    
`
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`

const BlurredBackground = styled.img`
    position: relative;
    height: 80%;
    width: 80% ;
    filter: blur(30px);
`