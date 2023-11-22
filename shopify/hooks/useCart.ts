import { create } from "zustand";
import shopifyQuery from '../shopify-query'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import {
  CreateCartDocument,
  CartDocument,
  AddItemToCartDocument,
  RemoveItemFromCartDocument,
  UpdateItemFromCartDocument,
  CartBuyerIdentityUpdateDocument
} from '../graphql'

export interface CartState {
  cart?: Cart,
  updating: boolean,
  error: string | undefined,
  update: (fn: () => Promise<Cart>) => void,
  clearCart: () => void,
  createCart: () => void,
  setCart: (cart: Cart) => Promise<Cart>,
  addToCart: (lines: CartLineInput) => void,
  removeFromCart: (id: string) => void,
  updateQuantity: (id: string, quantity: number) => void,
  updateBuyerIdentity: (input: CartBuyerIdentityInput) => void,
}

const useCart = create<CartState>((set, get) => ({
  cart: undefined,
  updating: false,
  error: undefined,
  createCart: async () => {
    get().update(async () => {
      const id = getCookie('cart')
      let cart = null;

      if (id)
        cart = (await shopifyQuery<CartQuery, CartQueryVariables>(CartDocument, { revalidate: 0, variables: { id } })).cart
      else
        cart = (await shopifyQuery<CreateCartMutation, CreateCartMutationVariables>(CreateCartDocument, { revalidate: 0 }))?.cartCreate?.cart;

      if (!cart) throw new Error('Cart not found')

      return cart as Cart
    })
  },
  clearCart: () => {
    set((state) => ({ cart: undefined }))
    deleteCookie('cart')
  },
  setCart: async (cart: Cart) => {
    set((state) => ({ cart }))
    setCookie('cart', cart.id)
    return cart
  },
  addToCart: async (line: CartLineInput) => {
    get().update(async () => {
      const cart = get().cart as Cart
      const { cartLinesAdd, } = await shopifyQuery<AddItemToCartMutation, AddItemToCartMutationVariables>(AddItemToCartDocument, {
        revalidate: 0,
        variables: {
          cartId: cart.id,
          lines: [line]
        }
      });
      console.log(cart.id, line, cartLinesAdd)
      if (!cartLinesAdd?.cart) throw new Error('Cart not found')
      return cartLinesAdd.cart as Cart
    })
  },
  removeFromCart: async (id: string) => {
    get().update(async () => {
      const cart = get().cart as Cart

      const { cartLinesRemove } = await shopifyQuery<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>(RemoveItemFromCartDocument, {
        revalidate: 0,
        variables: {
          cartId: cart.id,
          lineIds: [id]
        }
      });

      if (!cartLinesRemove?.cart) throw new Error('Cart not found')
      return cartLinesRemove.cart as Cart
    })
  },
  updateQuantity: async (id: string, quantity: number) => {
    get().update(async () => {
      const cart = get().cart as Cart
      const lines = cart.lines.edges.map(l => ({ id: l.node.id, quantity: l.node.id === id ? quantity : l.node.quantity }))
      const { cartLinesUpdate } = await shopifyQuery<UpdateItemFromCartMutation, UpdateItemFromCartMutationVariables>(UpdateItemFromCartDocument, {
        revalidate: 0,
        variables: {
          cartId: cart?.id,
          lines
        }
      });
      if (!cartLinesUpdate?.cart) throw new Error('Cart not found')
      return cartLinesUpdate.cart as Cart

    })
  },
  updateBuyerIdentity: async (input: CartBuyerIdentityInput) => {
    get().update(async () => {
      const id = getCookie('cart') as string
      const { cartBuyerIdentityUpdate } = await shopifyQuery<CartBuyerIdentityUpdateMutation, CartBuyerIdentityUpdateMutationVariables>(CartBuyerIdentityUpdateDocument, {
        revalidate: 0,
        //@ts-ignore
        variables: {
          cartId: id,
          ...input
        }
      });
      const cart = cartBuyerIdentityUpdate?.cart as Cart
      if (!cart) throw new Error('Cart not found')
      return cart
    })
  },
  update: (fn) => {
    set((state) => ({ updating: true, error: undefined }))
    fn()
      .then((cart) => get().setCart(cart))
      .catch((err) => set((state) => ({ error: err.message })))
      .finally(() => set((state) => ({ updating: false })))
  },
}));

export default useCart;
