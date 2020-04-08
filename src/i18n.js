import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources:{
        en: {
            translations:{
                Registrar: "Sign up",
                idioma:"Change the language",
                texto1: "Profit quickly and intelligently with the financial market.",
                operandoPorq: "What is 355 BIT?",
                operandoResp: "355 Bit is a cryptocurrency trading platform! You can invest high or low and have immediate returns!",
                operandoPorq1: "Why invest with 355 BIT?",
                operandoResp1: "Our platform has an asset analysis tool, which analyzes the chart in real time and suggests the best high / low operations *",
                gameTitulo: "Can you guess where the value will go?",
                gamePer: "Will the graph go up or down?",
                gameSubir:"Go up",
                gameDescer:"Go Down",
                gameGanhou: "You're right!",
                gamePerdeu:"You missed",
                gameOutra: "Try again",
                vantTitulo: "Advantages of the 355BIT",
                vant1: "Minimum account of R$50.00",
                vant2: "Negotiation amount: R$10,00",
                vant3: "Unique non stop trading mode",
                vant4: "Work on weekends",
                simpTitulo:"Simple and Practical",
                simpDemo:"Demo Account",
                simpDemoTxt:"You can use the demo account whenever you want to improve your trading skills. When you feel ready, switch to your real account.",
                simpSup:"Online Support",
                simpSupTxt: "You can send messages through the system at any time and track your tickets that will be answered in record time!",
                footer:"*The robot does not predict 100% of cases.",
                footerIni: "Start",
                footerTerm: "Term of Services",
                footerSup:"Support",
                footerPol:"Privacy Policy",
                moedaEs:"change the currency"
            }
        },
        pt: {
            translations: {
                Registrar: "Registrar",
                idioma:"Mudar idioma",
                texto1: "Lucre de forma rápida e inteligente com mercado financeiro.",
                operandoPorq: "O que é a 355 BIT?",
                operandoResp: "A 355 Bit é uma plataforma de trading em criptomoeda! Você pode investir na alta ou na baixa e ter retornos imediatos!",
                operandoPorq1: "Por que investir com a 355 BIT?",
                operandoResp1: "Nossa plataforma possui uma ferramenta de análises de ativos, que analisa o gráfico em tempo real e sugere as melhores operações de alta/baixa*",
                gameTitulo: "Você pode acertar para onde o valor irá?",
                gamePer: "O gráfico vai subir ou descer?",
                gameSubir:"Vai Subir",
                gameDescer:"Vai Descer",
                gameGanhou: "Você acertou!",
                gamePerdeu:"Você errou!",
                gameOutra: "Tentar Novamente",
                vantTitulo: "Vantagens da 355BIT",
                vant1: "Conta mínima de R$50,00",
                vant2: "Montante de negociação: R$10,00",
                vant3: "Único modo de negociação non stop",
                vant4: "Trabalhe nos fins de semana",
                simpTitulo:"Simples e Prático",
                simpDemo:"Conta Demo",
                simpDemoTxt:"Você pode utilizar a conta demo sempre que quiser aprimorar suas habilidades de negociação. Quando se sentir preparado, mude para sua conta real.",
                simpSup:"Suporte Online",
                simpSupTxt: "Você pode enviar mensagens pelo sistema a qualquer momento e acompanhar seus tickets que serão respondidos em tempo recorde!",
                footer:"*O robô não prevê 100% dos casos.",
                footerIni: "Início",
                footerTerm: "Termo de Serviços",
                footerSup:"Suporte",
                footerPol:"Política de Privacidade",
                moedaEs:"Mudar moeda"
            }
        },
        es:{
            translations:{
                Registrar: "Registrarse",
                idioma:"Cambiar idioma",
                texto1: "Obtenga ganancias de forma rápida e inteligente con el mercado financiero.",
                operandoPorq: "¿Qué es 355 BIT?",
                operandoResp: "¡355 Bit es una plataforma de comercio de criptomonedas! ¡Puede invertir alto o bajo y obtener ganancias inmediatas!",
                operandoPorq1: "¿Por qué invertir con 355 BIT?",
                operandoResp1: "Nuestra plataforma tiene una herramienta de análisis de activos, que analiza el gráfico en tiempo real y sugiere las mejores operaciones altas/bajas*",
                gameTitulo: "¿Puedes adivinar dónde irá el valor?",
                gamePer: "El gráfico subirá o bajará?",
                gameSubir:"Subir",
                gameDescer:"Bajar",
                gameGanhou: "¡Correcto!",
                gamePerdeu:"¡Tú error!",
                gameOutra: "¡Tente Otra vez!",
                vantTitulo: "Ventajas del 355BIT",
                vant1: "Cuenta mínima de R$50,00",
                vant2: "Monto de negociación: R$10,00",
                vant3: "Modo de comercio único non stop",
                vant4: "Trabajar los fines de semana",
                simpTitulo:"Simple y Practico",
                simpDemo:"Conta Demo",
                simpDemoTxt:"Puede usar la cuenta de demostración cuando quiera mejorar sus habilidades comerciales. Cuando se sienta listo, cambie a su cuenta real.",
                simpSup:"Soporte en línea",
                simpSupTxt: "¡Puede enviar mensajes a través del sistema en cualquier momento y rastrear sus tickets que serán respondidos en un tiempo récord!",
                footer:"*O robô não prevê 100% dos casos.",
                footerIni: "Inicio",
                footerTerm: "Plazo de servicios",
                footerSup:"Soporte",
                footerPol:"Política de privacidad",
                moedaEs:"Cambiar la moneda"
            }
        }
    },
    fallbackLng:"en",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;