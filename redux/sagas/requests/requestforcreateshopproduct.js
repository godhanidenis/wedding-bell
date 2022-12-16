import { createProductforshop } from '../../../graphql/mutations/createshopproduct'

export function uploadshopproduct(shopPorduct) {
    return createProductforshop(shopPorduct)
}
