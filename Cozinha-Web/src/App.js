import './App.css';
import './styles/global.css';
import './styles/pages/landing.css';
import logoImg from './images/logo 1.svg';

function App() {
  return (
    <div id="page-landing">
        <img src={logoImg} alt="" />
      
      <div className="pedidos">
          <h1>Pedido 2</h1>
      </div>
        <div className="pedido">
          <h1>Pedidos</h1>
        </div>
          <div className="tela">
            <h1>Mesa 7</h1>
          </div>
            <div className="produto">
              <h1>Prod</h1>
            </div>
              <div className="quantidade">
                <h1>Qtd</h1>
              </div>
                <div className="peixes">
                  <h1>Pintado com Camarão</h1>
                </div>
                  <div className="qtdPeixes">
                    <h1>2</h1>
                  </div>
                    <div className="carnes">
                      <h1>Filé Mingnon</h1>
                    </div>
                      <div className="qtdCarnes">
                        <h1>1</h1>
                      </div>
                        <div className="retangulo">
                          <h1></h1>
                        </div>
                          <div className="botao">
                            <h1>Finalizado</h1>
                          </div>
    </div>
  );
}

export default App;
