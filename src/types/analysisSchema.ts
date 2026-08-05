import { z } from "zod";


export const AnalysisReportSchema = z.object({

  score: z.number(),

  decision: z.object({
    status: z.enum([
      "KUP",
      "NEGOCJUJ",
      "ODPUŚĆ"
    ]),
    reason: z.string()
  }),


  car: z.object({

    brand: z.string(),

    model: z.string(),

    year: z.string(),

    engine: z.string(),

    mileage: z.string(),

    price: z.string()

  }),


  recommendation: z.string()

});


export type AnalysisReportValidated =
  z.infer<typeof AnalysisReportSchema>;