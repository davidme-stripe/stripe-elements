/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FormSubmitEvent, FormSubmitHandler, ProgressStatus, StripeDidLoadedHandler, StripeLoadedEvent } from "./interfaces";
import { PaymentIntentResult, PaymentRequestOptions } from "@stripe/stripe-js";
export namespace Components {
    interface StripeCardElement {
        /**
          * Form submit event handler
         */
        "handleSubmit": FormSubmitHandler;
        /**
          * Get Stripe.js, and initialize elements
          * @param publishableKey
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {    tripeElement.initStripe('pk_test_XXXXXXXXX')  }) ```
         */
        "initStripe": (publishableKey: string) => Promise<void>;
        /**
          * The client secret from paymentIntent.create response
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {     stripeElement.setAttribute('payment-intent-client-secret', 'dummy')   }) ```
          * @example ``` <stripe-card-element payment-intent-client-secret="dummy" /> ```
         */
        "paymentIntentClientSecret"?: string;
        /**
          * Your Stripe publishable API key.
         */
        "publishableKey": string;
        /**
          * Set error message
          * @param errorMessage string
          * @returns 
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {    // You must set the attributes to stop running default form submit action when you want to listen the 'formSubmit' event.    stripeElement.setAttribute('should-use-default-form-submit-action', false)    stripeElement.addEventListener('formSubmit', async props => {      try {        throw new Error('debug')      } catch (e) {        stripeElement.setErrorMessage(`Error: ${e.message}`)        stripeElement.updateProgress('failure')      }   }); })
         */
        "setErrorMessage": (errorMessage: string) => Promise<this>;
        /**
          * The component will provide a function to call the `stripe.confirmCardPayment`API. If you want to customize the behavior, should set false. And listen the 'formSubmit' event on the element
         */
        "shouldUseDefaultFormSubmitAction": boolean;
        /**
          * Show the form label
         */
        "showLabel": boolean;
        /**
          * Stripe.js class loaded handler
         */
        "stripeDidLoaded"?: StripeDidLoadedHandler;
        /**
          * Update the form submit progress
          * @param progress
          * @returns 
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {    // You must set the attributes to stop running default form submit action when you want to listen the 'formSubmit' event.    stripeElement.setAttribute('should-use-default-form-submit-action', false)    stripeElement.addEventListener('formSubmit', async props => {      const {        detail: { stripe, cardNumber, event },      } = props;      const result = await stripe.createPaymentMethod({        type: 'card',        card: cardNumber,      });      console.log(result);      stripeElement.updateProgress('success')    }); })
         */
        "updateProgress": (progress: ProgressStatus) => Promise<this>;
    }
    interface StripeElementModal {
        /**
          * Close the modal
         */
        "closeModal": () => Promise<void>;
        /**
          * Modal state. If true, the modal will open
         */
        "open": boolean;
        /**
          * Open the modal
         */
        "openModal": () => Promise<void>;
        "showCloseButton": boolean;
        /**
          * Toggle modal state
         */
        "toggleModal": () => Promise<void>;
    }
    interface StripePaymentRequestButton {
        /**
          * Get Stripe.js, and initialize elements
          * @param publishableKey
         */
        "initStripe": (publishableKey: string) => Promise<void>;
        /**
          * Your Stripe publishable API key.
         */
        "publishableKey": string;
        "setPaymentRequestOption": (option: PaymentRequestOptions) => Promise<this>;
        /**
          * Stripe.js class loaded handler
         */
        "stripeDidLoaded"?: StripeDidLoadedHandler;
    }
    interface StripePaymentSheet {
        /**
          * Form submit event handler
         */
        "handleSubmit": FormSubmitHandler;
        /**
          * Get Stripe.js, and initialize elements
          * @param publishableKey
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {    tripeElement.initStripe('pk_test_XXXXXXXXX')  }) ```
         */
        "initStripe": (publishableKey: string) => Promise<void>;
        /**
          * The client secret from paymentIntent.create response
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {     stripeElement.setAttribute('payment-intent-client-secret', 'dummy')   }) ```
          * @example ``` <stripe-card-element payment-intent-client-secret="dummy" /> ```
         */
        "paymentIntentClientSecret"?: string;
        /**
          * Your Stripe publishable API key.
         */
        "publishableKey": string;
        /**
          * Set error message
          * @param errorMessage string
          * @returns 
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {    // You must set the attributes to stop running default form submit action when you want to listen the 'formSubmit' event.    stripeElement.setAttribute('should-use-default-form-submit-action', false)    stripeElement.addEventListener('formSubmit', async props => {      try {        throw new Error('debug')      } catch (e) {        stripeElement.setErrorMessage(`Error: ${e.message}`)        stripeElement.updateProgress('failure')      }   }); })
         */
        "setErrorMessage": (errorMessage: string) => Promise<this>;
        /**
          * The component will provide a function to call the `stripe.confirmCardPayment`API. If you want to customize the behavior, should set false. And listen the 'formSubmit' event on the element
         */
        "shouldUseDefaultFormSubmitAction": boolean;
        /**
          * Show the form label
         */
        "showLabel": boolean;
        /**
          * Stripe.js class loaded handler
         */
        "stripeDidLoaded"?: StripeDidLoadedHandler;
        /**
          * Update the form submit progress
          * @param progress
          * @returns 
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {    // You must set the attributes to stop running default form submit action when you want to listen the 'formSubmit' event.    stripeElement.setAttribute('should-use-default-form-submit-action', false)    stripeElement.addEventListener('formSubmit', async props => {      const {        detail: { stripe, cardNumber, event },      } = props;      const result = await stripe.createPaymentMethod({        type: 'card',        card: cardNumber,      });      console.log(result);      stripeElement.updateProgress('success')    }); })
         */
        "updateProgress": (progress: ProgressStatus) => Promise<this>;
    }
}
declare global {
    interface HTMLStripeCardElementElement extends Components.StripeCardElement, HTMLStencilElement {
    }
    var HTMLStripeCardElementElement: {
        prototype: HTMLStripeCardElementElement;
        new (): HTMLStripeCardElementElement;
    };
    interface HTMLStripeElementModalElement extends Components.StripeElementModal, HTMLStencilElement {
    }
    var HTMLStripeElementModalElement: {
        prototype: HTMLStripeElementModalElement;
        new (): HTMLStripeElementModalElement;
    };
    interface HTMLStripePaymentRequestButtonElement extends Components.StripePaymentRequestButton, HTMLStencilElement {
    }
    var HTMLStripePaymentRequestButtonElement: {
        prototype: HTMLStripePaymentRequestButtonElement;
        new (): HTMLStripePaymentRequestButtonElement;
    };
    interface HTMLStripePaymentSheetElement extends Components.StripePaymentSheet, HTMLStencilElement {
    }
    var HTMLStripePaymentSheetElement: {
        prototype: HTMLStripePaymentSheetElement;
        new (): HTMLStripePaymentSheetElement;
    };
    interface HTMLElementTagNameMap {
        "stripe-card-element": HTMLStripeCardElementElement;
        "stripe-element-modal": HTMLStripeElementModalElement;
        "stripe-payment-request-button": HTMLStripePaymentRequestButtonElement;
        "stripe-payment-sheet": HTMLStripePaymentSheetElement;
    }
}
declare namespace LocalJSX {
    interface StripeCardElement {
        /**
          * Form submit event handler
         */
        "handleSubmit"?: FormSubmitHandler;
        /**
          * Recieve the result of defaultFormSubmit event
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {     stripeElement.addEventListener('defaultFormSubmitResult', async ({detail}) => {       if (detail instanceof Error) {         console.error(detail)       } else {         console.log(detail)       }     })   })
         */
        "onDefaultFormSubmitResult"?: (event: CustomEvent<PaymentIntentResult | Error>) => void;
        /**
          * Form submit event
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {     stripeElement       .addEventListener('formSubmit', async props => {         const {           detail: { stripe, cardNumber, event },         } = props;         const result = await stripe.createPaymentMethod({           type: 'card',           card: cardNumber,         });         console.log(result);       })   })
         */
        "onFormSubmit"?: (event: CustomEvent<FormSubmitEvent>) => void;
        /**
          * Stripe Client loaded event
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {     stripeElement      .addEventListener('stripeLoaded', async ({ detail: {stripe} }) => {       stripe         .createSource({           type: 'ideal',           amount: 1099,           currency: 'eur',           owner: {             name: 'Jenny Rosen',           },           redirect: {             return_url: 'https://shop.example.com/crtA6B28E1',           },         })         .then(function(result) {           // Handle result.error or result.source         });       });   }) ```
         */
        "onStripeLoaded"?: (event: CustomEvent<StripeLoadedEvent>) => void;
        /**
          * The client secret from paymentIntent.create response
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {     stripeElement.setAttribute('payment-intent-client-secret', 'dummy')   }) ```
          * @example ``` <stripe-card-element payment-intent-client-secret="dummy" /> ```
         */
        "paymentIntentClientSecret"?: string;
        /**
          * Your Stripe publishable API key.
         */
        "publishableKey"?: string;
        /**
          * The component will provide a function to call the `stripe.confirmCardPayment`API. If you want to customize the behavior, should set false. And listen the 'formSubmit' event on the element
         */
        "shouldUseDefaultFormSubmitAction"?: boolean;
        /**
          * Show the form label
         */
        "showLabel"?: boolean;
        /**
          * Stripe.js class loaded handler
         */
        "stripeDidLoaded"?: StripeDidLoadedHandler;
    }
    interface StripeElementModal {
        "onClose"?: (event: CustomEvent<any>) => void;
        /**
          * Modal state. If true, the modal will open
         */
        "open"?: boolean;
        "showCloseButton"?: boolean;
    }
    interface StripePaymentRequestButton {
        /**
          * Stripe Client loaded event
          * @example ``` stripeElement  .addEventListener('stripeLoaded', async ({ detail: {stripe} }) => {   stripe     .createSource({       type: 'ideal',       amount: 1099,       currency: 'eur',       owner: {         name: 'Jenny Rosen',       },       redirect: {         return_url: 'https://shop.example.com/crtA6B28E1',       },     })     .then(function(result) {       // Handle result.error or result.source     });   }); ```
         */
        "onStripeLoaded"?: (event: CustomEvent<StripeLoadedEvent>) => void;
        /**
          * Your Stripe publishable API key.
         */
        "publishableKey"?: string;
        /**
          * Stripe.js class loaded handler
         */
        "stripeDidLoaded"?: StripeDidLoadedHandler;
    }
    interface StripePaymentSheet {
        /**
          * Form submit event handler
         */
        "handleSubmit"?: FormSubmitHandler;
        /**
          * Recieve the result of defaultFormSubmit event
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {     stripeElement.addEventListener('defaultFormSubmitResult', async ({detail}) => {       if (detail instanceof Error) {         console.error(detail)       } else {         console.log(detail)       }     })   })
         */
        "onDefaultFormSubmitResult"?: (event: CustomEvent<PaymentIntentResult | Error>) => void;
        /**
          * Form submit event
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {     stripeElement       .addEventListener('formSubmit', async props => {         const {           detail: { stripe, cardNumber, event },         } = props;         const result = await stripe.createPaymentMethod({           type: 'card',           card: cardNumber,         });         console.log(result);       })   })
         */
        "onFormSubmit"?: (event: CustomEvent<FormSubmitEvent>) => void;
        /**
          * Stripe Client loaded event
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {     stripeElement      .addEventListener('stripeLoaded', async ({ detail: {stripe} }) => {       stripe         .createSource({           type: 'ideal',           amount: 1099,           currency: 'eur',           owner: {             name: 'Jenny Rosen',           },           redirect: {             return_url: 'https://shop.example.com/crtA6B28E1',           },         })         .then(function(result) {           // Handle result.error or result.source         });       });   }) ```
         */
        "onStripeLoaded"?: (event: CustomEvent<StripeLoadedEvent>) => void;
        /**
          * The client secret from paymentIntent.create response
          * @example ``` const stripeElement = document.createElement('stripe-card-element'); customElements  .whenDefined('stripe-card-element')  .then(() => {     stripeElement.setAttribute('payment-intent-client-secret', 'dummy')   }) ```
          * @example ``` <stripe-card-element payment-intent-client-secret="dummy" /> ```
         */
        "paymentIntentClientSecret"?: string;
        /**
          * Your Stripe publishable API key.
         */
        "publishableKey"?: string;
        /**
          * The component will provide a function to call the `stripe.confirmCardPayment`API. If you want to customize the behavior, should set false. And listen the 'formSubmit' event on the element
         */
        "shouldUseDefaultFormSubmitAction"?: boolean;
        /**
          * Show the form label
         */
        "showLabel"?: boolean;
        /**
          * Stripe.js class loaded handler
         */
        "stripeDidLoaded"?: StripeDidLoadedHandler;
    }
    interface IntrinsicElements {
        "stripe-card-element": StripeCardElement;
        "stripe-element-modal": StripeElementModal;
        "stripe-payment-request-button": StripePaymentRequestButton;
        "stripe-payment-sheet": StripePaymentSheet;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stripe-card-element": LocalJSX.StripeCardElement & JSXBase.HTMLAttributes<HTMLStripeCardElementElement>;
            "stripe-element-modal": LocalJSX.StripeElementModal & JSXBase.HTMLAttributes<HTMLStripeElementModalElement>;
            "stripe-payment-request-button": LocalJSX.StripePaymentRequestButton & JSXBase.HTMLAttributes<HTMLStripePaymentRequestButtonElement>;
            "stripe-payment-sheet": LocalJSX.StripePaymentSheet & JSXBase.HTMLAttributes<HTMLStripePaymentSheetElement>;
        }
    }
}
