import { Content } from '../../../pages/app/styled'
import { Cards } from '../../Card'

export function CategorySaude() {
  return (
    <Content>
      <Cards
        title="Máscara Descartável C/50 Unidades"
        text="Proteção Facial Tripla"
        value="R$5,49"
        img={
          <img
            src="https://cf.shopee.com.br/file/fc6e419d01af4fccf4428c194909b203_tn"
            alt="mascara descartavel"
          />
        }
        redirect={<a href="https://shope.ee/99o1m1ZCEw">Conferir</a>}
      />
      <Cards
        title="Máscara Descartável C/50 Unidades"
        text="Proteção Facial Tripla"
        value="R$5,49"
        img={<img src="" alt="quicksilvRelogio" />}
        redirect={<a href="https://shope.ee/8zUba8gil8">Conferir</a>}
      />
    </Content>
  )
}
