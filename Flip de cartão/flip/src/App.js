import './App.css';
import question from './Question.svg';
import vector from './Vector.svg';
import erro from './erro.svg';
import IMask from "imask";

function App() {
  return (
    <div className="App">
      <form className="form">
        <section id="credit-card">
          <div className="front"></div>
          <div className="back"></div>
        </section>
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
        <section className="info-security flex">
          <img src={vector} alt="Ícone de segurança" />
          Seus dados estão seguros
        </section>
        <button>Adicionar Cartão</button>
      </form>
    </div>
  );
}

export default App;

IMask(document.querySelector('#cc-cvv'), {
  mask:'0000'
})

IMask(document.querySelector('#cc-number'), {
  mask: '0000 0000 0000 0000'
})

IMask(document.querySelector('#cc-validity'), {
  mask: 'MM{/}YY',
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2)
    }
  }
})
