import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
        <div>
            <footer class="page-footer font-small blue pt-4">
                <div class="container-fluid aling-self-center text-center jumbotron">
                    <div class="row">
                        <div class="col footerP">
                            <p>As operações oferecidas por este site poderão incluir operações de alto risco. Ao usar
                            ferramentas e serviços financeiros oferecidos pelo site, você poderá ter prejuízos significativos 
                            ou até perder na íntegra os fundos depositados na sua conta de negociações garantida. Por favor, 
                            avalie todos os riscos financeiros e consulte um especialista financeiro independente antes de 
                            iniciar a negociação. A 355bit não se responsabiliza por quaisquer prejuízos diretos, indiretos
                            ou consequentes ou qualquer outro dano resultante da atividade do usuário no site. O investimento 
                            feito por residentes do Brasil é feita ao seu próprio risco e perigo, sob sua responsabilidade e 
                            com total conhecimento das limitações legais no país.As opções de transação financeira disponíveis neste website
                            são permitidas apenas a indivíduos capazes e de maior idade.</p>
                        </div>
                    </div>
                <hr class="clearfix w-100 d-md-none pb-3"/>
                </div>
            <div class="footer-copyright text-center py-3"> © 2020 Copyright:
                <a href="#"> 355BIT</a>
            </div>
            </footer>

        </div>
        );
    }
  }
  
  export default Footer;
  