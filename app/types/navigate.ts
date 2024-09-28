export type RootStackParamList = {
  BusinessHomepage: undefined;
  CreateTokenPage: undefined;
  TokenDone: undefined;
  businesstab: undefined;
  investortab: undefined;
  InvestorDashboard: undefined;
  InvestorScreen: undefined;
  TokenInformation: { tokenId: number };
  TokenDescPage: undefined;
  InTokenList: undefined;
  InvestorHome: undefined;
  InTokenDeets: { token: Token };
  InvestorTokenize: { token: Token }; 
  InvestorBuy:{ token: Token };
  // Other routes...
};

export interface Token {
  id: number;
  name: string;
  price: string;
  image: string;
}