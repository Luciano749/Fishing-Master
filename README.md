# 🎣 Fishing Master - Chatbot de Pesca Inteligente

[![Java](https://img.shields.io/badge/Java-21-orange.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5.7-green.svg)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF.svg)](https://vitejs.dev/)

Um chatbot especializado em pesca que combina inteligência artificial (Google Gemini) com dados meteorológicos em tempo real para fornecer conselhos táticos de pesca personalizados.

## 🎯 Funcionalidades

### 🤖 Consultor de Pesca Inteligente
- **Análise Técnica Avançada**: O "Mestre Pescador" analisa dados geográficos, climáticos e a consulta do usuário
- **Segurança Primeiro**: Alertas automáticos sobre condições perigosas de pesca
- **Conselhos Táticos**: Recomendações específicas baseadas em dados concretos, não genéricos

### 🌦️ Integração Meteorológica
- Dados meteorológicos em tempo real via API
- Análise de como condições climáticas afetam o comportamento dos peixes
- Recomendações ajustadas conforme pressão atmosférica, temperatura e vento

### 🎯 Recursos Especializados
- Cruzamento inteligente de dados (Clima ↔ Comportamento dos Peixes ↔ Geografia)
- Análise ictiológica (comportamento de peixes)
- Recomendações de iscas e técnicas específicas para cada situação
- Interface responsiva e intuitiva

## 🏗️ Arquitetura do Projeto

```
chatbot/
├── backend/          # API Spring Boot
│   ├── src/main/java/com/chatbot/chatbot/
│   │   ├── config/           # Configurações (Gemini, RestTemplate, Weather API)
│   │   ├── controller/       # REST Controllers
│   │   ├── dto/             # Data Transfer Objects
│   │   ├── service/         # Serviços (Gemini, Weather API)
│   │   └── utils/           # Utilitários (Weather Prompt Builder)
│   └── src/main/resources/
│       ├── application.properties
│       └── prompts/         # Templates de prompts para IA
├── frontend/         # Interface React
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   └── pages/          # Páginas da aplicação
│   └── public/
└── README.md
```

## 🚀 Tecnologias Utilizadas

### Backend
- **Java 21** - Linguagem principal
- **Spring Boot 3.5.7** - Framework web
- **Spring Web** - APIs REST
- **Spring Actuator** - Monitoramento
- **RestTemplate** - Cliente HTTP
- **Maven** - Gerenciamento de dependências

### Frontend
- **React 19.1.1** - Biblioteca de interface
- **Vite 7.1.7** - Build tool e dev server
- **Styled Components 6.1.19** - Estilização
- **React Markdown 10.1.0** - Renderização de markdown
- **ESLint** - Linting de código

### Integrações
- **Google Gemini AI** - Inteligência artificial conversacional
- **Weather API** - Dados meteorológicos em tempo real

## ⚙️ Configuração e Instalação

### Pré-requisitos
- Java 21 ou superior
- Node.js 18+ e npm
- Chaves de API:
  - Google Gemini API Key
  - Weather API Key

### 1. Configuração do Backend

```bash
# Navegue para o diretório do backend
cd backend

# Configure as variáveis de ambiente no application.properties
# application.properties
gemini.api.key=sua_gemini_api_key_aqui
weather.api.key=sua_weather_api_key_aqui
weather.api.base.url=https://api.weatherapi.com/v1

# Execute o projeto
./mvnw spring-boot:run
```

O backend será executado em `http://localhost:8080`

### 2. Configuração do Frontend

```bash
# Navegue para o diretório do frontend
cd frontend

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

O frontend será executado em `http://localhost:5173`

### 3. Build para Produção

#### Backend
```bash
cd backend
./mvnw clean package
java -jar target/chatbot-1.0.0.jar
```

#### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## 🔧 Variáveis de Ambiente

### Backend (`application.properties`)
```properties
# Configuração da API do Gemini
gemini.api.key=your_gemini_api_key
gemini.api.url=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent

# Configuração da API do Weather
weather.api.key=your_weather_api_key
weather.api.base.url=https://api.weatherapi.com/v1

# Configurações do servidor
server.port=8080
```

## 📡 Endpoints da API

### POST `/api/conversar`
Endpoint principal para interação com o chatbot.

**Request Body:**
```json
{
  "message": "Quero pescar tucunaré hoje em Brasília",
  "location": "Brasília, DF"
}
```

**Response:**
```json
{
  "response": "Análise detalhada do Mestre Pescador com recomendações específicas...",
  "timestamp": "2025-11-05T14:30:00Z"
}
```

## 🎯 Como Usar

1. **Acesse a Interface**: Abra `http://localhost:5173`
2. **Faça sua Consulta**: Digite sua pergunta sobre pesca
3. **Informe a Localização**: Adicione o local onde pretende pescar
4. **Receba Análise Técnica**: O Mestre Pescador fornecerá:
   - Análise de segurança
   - Condições meteorológicas e impacto na pesca
   - Recomendações de iscas e técnicas
   - Especies mais prováveis para o local/condições

### Exemplos de Consultas

- "Quero pescar tucunaré hoje no Lago Paranoá"
- "Melhores horários para pescar traíra amanhã em São Paulo"
- "Que isca usar para dourado no Rio São Francisco com esse tempo?"

## 🔒 Segurança e CORS

O backend está configurado para aceitar requests de:
- `http://localhost:5173` (desenvolvimento)
- `http://192.168.100.85:5173` (rede local)

Para adicionar novos origins, edite a anotação `@CrossOrigin` em `ChatBotController.java`.

## 🧪 Testes

```bash
# Backend - executar testes
cd backend
./mvnw test

# Frontend - linting
cd frontend
npm run lint
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Luciano** - [Luciano749](https://github.com/Luciano749)

## 🙏 Agradecimentos

- Google Gemini pela API de IA
- Weather API pelos dados meteorológicos
- Comunidade Spring Boot e React

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!