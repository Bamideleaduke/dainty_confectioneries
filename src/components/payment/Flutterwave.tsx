

interface Customer {
  email: string;
  phone_number: string;
  name: string;
}
interface Customizations {
  title: string;
  description: string;
  logo: string;
}
interface Config {
  public_key: string;
  tx_ref: string;
  amount: number;
  currency: string;
  payment_options: string;
  customer: Customer;
  customizations: Customizations;
}


export const config: Config = {
  // public_key: `${process.env.F_AUTH}`,
  public_key: `FLWPUBK_TEST-beffe1633d94c3fa085d40ce806e8bb4-X`,
  tx_ref: Date.now().toString(),
  amount: 100,
  currency: "NGN",
  payment_options: "card,mobilemoney,ussd",
  customer: {
    email: "user@gmail.com",
    phone_number: "070********",
    name: "john doe",
  },
  customizations: {
    title: "My store",
    description: "Payment for items in cart",
    logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
  },
};

