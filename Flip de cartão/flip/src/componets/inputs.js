import question from '../Question.svg';
import erro from '../erro.svg';

const Imput = () => {
    return (
        <section className="inputs flex">
        <div className="input-wrapper">
          <label htmlFor="cc-number">Número do cartão</label>
          <input id="cc-number" type="text" placeholder="**** **** **** ****" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="cc-holder">Nome do titular</label>
          <input id="cc-holder" type="text" placeholder="Nome como está no cartão" required/>
          <div className="warning">
            <img src={erro} alt="Ícone de alerta" />
            Nome do titular é obrigatório 
          </div>
        </div>

        <div className="col-2 flex">
          <div className="input-wrapper">
            <label htmlFor="cc-validity">Validade</label>
            <input id="cc-validity" type="text" placeholder="mm/aa"/>
          </div>

          <div className="input-wrapper">
            <label className="flex help" htmlFor="cc-cvv">CVV
            <img src={question} alt="Ícone de ajuda" title="Esse número está, geralmente, nas costa do seu cartão"/>
            </label>
            <input id="cc-cvv" type="text" placeholder="***"/>
          </div>
        </div>
      </section>
    )
}

export default Imput;