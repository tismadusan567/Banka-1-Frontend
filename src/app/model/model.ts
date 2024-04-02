import { number } from "zod";

export interface User{
    userId: number;
    username:string;
    password:string;
    email: string;
    firstName: string;
    lastName: string;
    jmbg: string;
    position: string;
    phoneNumber: string;
    active: boolean;
    permissions:Permissions[]
}
export interface Permissions{
    permission_id?:number;
    name:string;
    description?:string;
}

export interface BankAccount {
  accountType?: string;
  accountNumber?: string;
  accountStatus?: string;
  currency?: string;
  balance?: number;
  availableBalance?: number;
  reservedResources?: number;
  accountOwner?: string
  accountName?: string
}

export interface Transaction {
  recepientBankAccount: string;
  date: Date;
  status: string;
  amount: number;
}

export interface Exchange {
  recepientBankAccount: string;
  date: Date;
  status: string;
  amount: number;
}

export interface Recipient{
  recepientFirstName?: string;
  recepientLastName?: string;
  recepientAccountNumber?: string;
}

export interface Card {
  id?: number;
  cardNumber?: string;
  cardType?: string;
  cardName?: string;
  creationDate?: number;
  expirationDate?: number;
  accountNumber?: string;
  cvv?: string;
  limit?: number;
  isActivated?: boolean;
}

export interface CreateUserRequest{
  email: string;
  firstName:string;
  lastName:string;
  jmbg:string;
  position:string;
  phoneNumber:string;
  active:boolean;
}
export interface TransactionBasics{
  outflow:string;
  inflow:string;
  amount:string;
}

export interface TransactionDetails{
  recipientName:String;
  amount:number;
  referenceNumber:String;
  paymentCode:number;
  purposeOfPayment:String;
  transactionDate:number;
  senderName:String;
  recipientAccountNumber:String;
  commission:number;
  senderAccountNumber:String;
  channel:String;
  status:String;
  currency:String;
}

export interface UserToEdit{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    position: string;
    status: string;
    jmbg: string;
    brlk: string;
    phone: string;
    active: boolean;
    birth_date: string;
}
export interface Forex {
  listingId: number;
  listingType: "Forex";
  ticker: string;
  name: string;
  exchangeName : string;
  lastRefresh: number;
  price: number;
  high: number;
  low: number;
  priceChange: number;
  volume: number;
  baseCurrency: string;
  quoteCurrency: string;
}

export interface Future {
  listingId: number;
  listingType: string;
  ticker: string;
  name: string;
  exchangeName: string;
  lastRefresh : number;
  price: number;
  high: number;
  low: number;
  priceChange: number;
  volume : number;
  contractSize: number;
  contractUnit: string;
  openInterest: number;
  settlementDate: number;
}

export interface ListingHistory {
  listingId: number;
  date: number;
  price: number;
  high: number;
  low: number;
  change: number;
  volume: number;
}


export interface Account {
  accountNumber: string;
  accountType: AccountType;
  currencyName: string;
  maintenanceCost: number;
}

export enum AccountType {
  FOREIGN_CURRENCY = "FOREIGN_CURRENCY",
  CURRENT = "CURRENT",
  BUSINESS = "BUSINESS"
}


export interface Customer{
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  jmbg: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

export interface CreateCustomerRequest{
  firstName: string;
  lastName: string;
  email: string;
  jmbg: string;
  phoneNumber: string;
  gender: string;
  address: string;
  active:boolean;
}

export interface EditCustomerRequest{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jmbg: string;
  phoneNumber: string;
  gender: string;
  address: string;
  password: string;
  active:boolean
}

export interface CreateBankAccountRequest{
  status: boolean;
  currencyName: string;
  accountType: string;
  maintenanceCost: number;
}