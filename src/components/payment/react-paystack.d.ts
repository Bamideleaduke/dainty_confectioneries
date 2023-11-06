declare module "react-paystack" {
  export interface PaystackButtonProps {
    reference: string;
    email: string;
    amount: number;
    publicKey: string;
    text?: string;
    onSuccess?: (reference: any) => void;
    onClose?: () => void;
    // Add other props as needed
  }

  export const PaystackButton: React.FC<PaystackButtonProps>;
}
