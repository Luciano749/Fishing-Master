import styled from "styled-components";

export const CardContainer = styled.div`
    animation: oceanWaves 10s ease-in-out infinite;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2rem);
    border-radius: 2.4rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    padding: 3rem;
    width: 50rem;
    max-width: 90vw;
    max-height: 90vh;
    margin: 2rem;
    text-align: center;
    box-shadow: 
        0 0.8rem 3.2rem 0 rgba(31, 38, 135, 0.37),
        0 0 0 0.1rem rgba(255, 255, 255, 0.05) inset;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
    }

    @keyframes oceanWaves {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }
`

export const ChatTitle = styled.h1`
    color: #FFFFFF;
    font-size: 2.4rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
`

export const ChatSubtitle = styled.p`
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.4rem;
    margin: 0 0 1.5rem 0;
    line-height: 1.5;
`

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 1.5rem 0;
    position: relative;
`

export const ChatIcon = styled.img`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #4FC3F7 0%, #29B6F6 50%, #03A9F4 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    box-shadow: 
        0 0 3rem rgba(79, 195, 247, 0.5),
        0 0 0 0.8rem rgba(79, 195, 247, 0.1);
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: -0.4rem;
        left: -0.4rem;
        right: -0.4rem;
        bottom: -0.4rem;
        border-radius: 50%;
        border: 0.2rem solid transparent;
        background: linear-gradient(45deg, #4FC3F7, transparent, #29B6F6, transparent) border-box;
        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        animation: rotate 4s linear infinite;
    }

    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`

export const ChatInfo = styled.p`
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.4rem;
    text-align: center;
    max-width: 28rem;
    margin: 0 auto 2rem auto;
    line-height: 1.6;
    font-weight: 400;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BlueChatInfo = styled.span`
    color: #4FC3F7;
    font-weight: 600;
    font-size: inherit;
    line-height: inherit;
    text-align: center;
`

export const ResponseArea = styled.div`
    margin: 2rem 0;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1.2rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
    text-align: left;
    flex: 1;
    overflow-y: auto;
    max-height: 40vh;

    /* Personalizar scrollbar */
    &::-webkit-scrollbar {
        width: 0.6rem;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 0.3rem;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(79, 195, 247, 0.6);
        border-radius: 0.3rem;
        
        &:hover {
            background: rgba(79, 195, 247, 0.8);
        }
    }
`

export const ResponseTitle = styled.h3`
    color: #4FC3F7;
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    text-align: center;
`

export const ResponseMessage = styled.div`
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.4rem;
    line-height: 1.6;
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;

    * {
        font-size: 1.4rem !important;
        line-height: 1.6 !important;
    }

    p {
        margin: 0.3rem 0 !important;
        color: inherit;
        font-size: 1.4rem !important;
        line-height: 1.6 !important;
    }
`

export const InputArea = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    padding: 0.8rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;

    &:focus-within {
        border-color: #4FC3F7;
        box-shadow: 0 0 2rem rgba(79, 195, 247, 0.3);
    }

    @media (max-width: 480px) {
        padding: 0.6rem;
        gap: 0.8rem;
    }
`

export const ChatInput = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #FFFFFF;
    font-size: 1.4rem;
    padding: 1rem 0.8rem;
    margin-left: 0.8rem;

    &::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
        outline: none;
    }

    @media (max-width: 480px) {
        padding: 0.8rem 0.5rem;
        margin-left: 0.5rem;
        font-size: 1.3rem;
    }
`

export const SendButton = styled.button`
    background: #4FC3F7;
    border: none;
    border-radius: 50%;
    width: 4.8rem;
    height: 4.8rem;
    min-width: 4.8rem;
    min-height: 4.8rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0.4rem 1.5rem rgba(79, 195, 247, 0.4);

    &:hover {
        transform: translateY(-0.2rem);
        box-shadow: 0 0.6rem 2rem rgba(79, 195, 247, 0.6);
        background: linear-gradient(135deg, #29B6F6 0%, #03A9F4 100%);
    }

    &:active {
        transform: translateY(0);
    }

    &::before {
        content: '➤';
        color: white;
        font-size: 1.6rem;
        font-weight: bold;
        margin-left: 0.2rem;
    }

    @media (max-width: 768px) {
        width: 4.4rem;
        height: 4.4rem;
        min-width: 4.4rem;
        min-height: 4.4rem;

        &::before {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 480px) {
        width: 4rem;
        height: 4rem;
        min-width: 4rem;
        min-height: 4rem;

        &::before {
            font-size: 1.3rem;
        }
    }
`

