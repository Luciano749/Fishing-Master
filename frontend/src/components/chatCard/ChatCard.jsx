import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import * as S from './ChatCard.styles'
import iconImage from '../../assets/fishIcon.png'

const ChatCard = () => {
    const [message, setMessage] = useState('')
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
    const [locationError, setLocationError] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)

    const getMessageFromAPI = async () => {
        if (input.trim() === '') return;

        setHasInteracted(true);
        setLoading(true);
        setError('');
        setMessage('');

        const currentInput = input;
        setInput('');

        try {
            const requestBody = {
                message: currentInput,
                lat: lat !== null ? String(lat) : "",
                lon: lon !== null ? String(lon) : ""
            };

            const response = await fetch('http://localhost:8080/api/conversar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

            const data = await response.json();
            setMessage(data.response);

        } catch (error) {
            console.error('Error fetching message:', error);
            setError('Erro ao buscar resposta. Tente novamente.');
            setInput(currentInput);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLat(position.coords.latitude);
                    setLon(position.coords.longitude);
                    setLocationError(false);
                },
                (error) => {
                    console.error('Erro ao obter localização:', error);
                    setLocationError(true);
                    setLat(null);
                    setLon(null);
                }
            );
        } else {
            console.log('Geolocalização não disponível');
            setLocationError(true);
        }
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !loading) {
            getMessageFromAPI();
        }
    }

    return (
        <S.CardContainer>
                <S.ChatTitle>
                    Marlin
                    <S.BlueChatInfo>Chat</S.BlueChatInfo>
                </S.ChatTitle>
                <S.ChatSubtitle>
                    Seu consultor de pesca.
                    <br />
                    Dicas em tempo real.
                </S.ChatSubtitle>
                <S.IconWrapper>
                    <S.ChatIcon src={iconImage} />
                </S.IconWrapper>
                <S.ChatInfo>
                    Olá! Sou seu guia de pesca virtual.
                    <br />
                    Pergunte-me qualquer coisa sobre iscas,
                    <br />
                    pontos de pesca, equipamentos e técnicas!
                </S.ChatInfo>

                {hasInteracted && (
                    <S.ResponseArea>
                        {loading && (
                            <>
                                <S.ResponseTitle>Processando...</S.ResponseTitle>
                                <S.ResponseMessage>Aguarde, consultando informações sobre pesca...</S.ResponseMessage>
                            </>
                        )}
                        {error && (
                            <>
                                <S.ResponseTitle>Erro:</S.ResponseTitle>
                                <S.ResponseMessage style={{ color: '#ff6b6b' }}>{error}</S.ResponseMessage>
                            </>
                        )}
                        {message && !loading && (
                            <>
                                <S.ResponseTitle>Resposta:</S.ResponseTitle>
                                <S.ResponseMessage>
                                    <ReactMarkdown>{message}</ReactMarkdown>
                                </S.ResponseMessage>
                            </>
                        )}
                    </S.ResponseArea>
                )}

                <S.InputArea>
                    <S.ChatInput
                        type="text"
                        placeholder="Escreva sua pergunta..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        disabled={loading}
                    />
                    <S.SendButton
                        onClick={getMessageFromAPI}
                        disabled={loading || input.trim() === ''}
                        style={{
                            opacity: loading || input.trim() === '' ? 0.5 : 1,
                            cursor: loading || input.trim() === '' ? 'not-allowed' : 'pointer'
                        }}
                    />
                </S.InputArea>
        </S.CardContainer>
    )
}

export default ChatCard