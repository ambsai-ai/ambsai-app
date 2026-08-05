export interface Car {
  brand: string;
  model: string;
  year: string;
  engine: string;
  mileage: string;
  price: string;
}


export interface CarFailure {
  title: string;
  risk: "niski" | "średni" | "wysoki";
  cost: string;
  priority: "niski" | "średni" | "wysoki";
  description: string;
}


export interface CarCost {
  title: string;
  price: string;
  period: string;
  description: string;
  priority: "niski" | "średni" | "wysoki";
}


export interface SellerQuestion {
  question: string;
  importance: "niska" | "średnia" | "wysoka";
  why: string;
}


export interface InspectionItem {
  item: string;
  why: string;
  important: boolean;
}


export interface NegotiationPoint {
  problem: string;
  argument: string;
  estimatedDiscount: string;
  importance: "niska" | "średnia" | "wysoka";
}


export interface Decision {
  status: "KUP" | "NEGOCJUJ" | "ODPUŚĆ";
  reason: string;
}


export interface RiskLevel {
  level: "niski" | "średni" | "wysoki";
  reason: string;
}


export interface AnalysisReport {

  score: number;

  decision: Decision;

  listingQuality: {
    score: number;
    missingInformation: string[];
  };


  car: Car;


  technicalCondition: number;


  riskLevel: RiskLevel;


  failures: CarFailure[];


  costs: CarCost[];


  sellerQuestions: SellerQuestion[];


  inspectionChecklist: InspectionItem[];


  documentsToCheck: string[];


  negotiationPoints: NegotiationPoint[];


  pros: string[];


  cons: string[];


  recommendation: string;

}