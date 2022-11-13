import { Content, Hight } from '../../../pages/app/styled'
import { Cards } from '../../Card'

export function CategoryComputadores() {
  return (
    <>
      <Hight>
        <h1>Acessórios e Computadores</h1>
      </Hight>
      <Content>
        <Cards
          title="Razer Viper Gaming"
          text="8500DPI RGB Com Fio"
          value="R$59,90"
          img={
            <img
              src="https://cf.shopee.com.br/file/c622db32bfe3aab6b44d6e14be0bdaca_tn"
              alt="mouse razer"
            />
          }
          redirect={<a href="https://shope.ee/1AmJ7Fx3jN">Conferir</a>}
        />
      </Content>
    </>
  )
}
