export interface OrderResponse {
  success: boolean;
  order: Order;
}

export interface Order {
  id: string;
  number: string;
  marketPlaceId: null;
  groupId: null;
  name: string;
  packsId: null;
  email: null;
  fulfillmentStatus: Status;
  currency: string;
  currencyExtension: string;
  discountsCoupon: DiscountsCoupon;
  totals: Totals;
  dimensions: Dimensions;
  totalsExtension: Totals;
  taxesIncluded: string;
  taxLines: any[];
  units: Units;
  status: Status;
  locationId: null;
  reference: null;
  tags: any[];
  payment: Payment;
  customer: BillingAddress;
  refunds: any[];
  billingAddress: BillingAddress;
  logistic: Logistic;
  shippingMethod: null;
  shippingOptionReference: null;
  shippingLabel: null;
  documents: Documents;
  shippingAddress: BillingAddress;
  items: Item[];
  packages: any[];
  meta: null;
  dates: Dates;
  cancelReason: null;
  note: string;
  locations: Location[];
  localizationExtensions: any[];
  checkoutId: null;
  fraudRisk: null;
  events: any[];
}

export interface BillingAddress {
}

export interface Dates {
  estimatedDeliveryIn: null;
  deliveredAt: null;
  canceledAt: null;
  closedAt: null;
  createdAt: Date;
  updatedAt: Date;
  paidAt: Date;
}

export interface Dimensions {
  width: null;
  height: null;
  length: null;
}

export interface DiscountsCoupon {
  type: null;
  codeCupon: null;
  discount: null;
  discountAmount: null;
}

export interface Documents {
  shippingLabels: any[];
}

export interface Status {
  id: null;
  status: string;
  ecartapi: string;
  ecartapiId: string;
  partiallAvailable?: string;
  financial?: string;
}

export interface Item {
  id: string;
  variantId: null;
  productId: null;
  offerId: null;
  inventoryId: null;
  sku: null;
  productType: null;
  fulfillment: Fulfillment;
  name: string;
  upc: null;
  requiresShipping: string;
  quantity: string;
  currentQuantity: string;
  price: string;
  priceExtension: string;
  discount: null;
  discountExtension: null;
  associatedItems: any[];
  bundled: string;
  tax: null;
  taxable: string;
  weight: null;
  vendor: null;
  imageUrl: null;
  ecartapiUrl: null;
}

export interface Fulfillment {
  quantity: string;
  service: string;
  status: string;
}

export interface Location {
  id: string;
  fulfillmentOrderId: string;
  locationName: string;
  status: string;
  address1: string;
  address2: null;
  country: Country;
  state: Country;
  city: string;
  postalCode: string;
  phone: null;
  company: null;
  references: null;
  productIds: string[];
  default: string;
}

export interface Country {
  code: string;
  name: string;
  codeIso2: null | string;
  codeIso3: null | string;
}

export interface Logistic {
  mode: null;
  type: null;
  free: string;
  direction: null;
  serviceId: null;
}

export interface Payment {
  method: null;
  status: string;
  ecartapi: null;
}

export interface Totals {
  subtotal: string;
  total: string;
  tax: string;
  discount: string;
  weight?: string;
  shipping: null;
}

export interface Units {
  weight: string;
}
