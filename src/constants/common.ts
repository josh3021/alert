export const DEFAULT_WAITING_TEXT = "Waiting..";

export enum API_DATA_TYPE {
  XML = "XML",
  JSON = "JSON",
}

export enum ALERT_STEP {
  "낮음" = 1,
  "보통",
  "높음",
  "매우 높음",
}

export enum ITEMS {
  ASTHMA_RISK,
  STROKE_RISK,
  POLLEN_RISK,
  FOOD_POISONING_RISK,
  COLD_RISK,
}

export enum ITEMS_URI {
  ASTHMA_RISK = "getAsthmaIdxV2",
  STROKE_RISK = "getStrokeIdxV2",
  OAK_POLLEN_RISK = "getOakPollenRiskIdxV2",
  PINE_POLLEN_RISK = "getPinePollenRiskIdxV2",
  WEEDS_POLLEN_RISK = "getWeedsPollenRiskndxV2",
  FOOD_POISONING_RISK = "getFoodPoisoningIdxV2",
  COLD_RISK = "getColdIdxV2",
}

export enum ITEMS_KOREAN {
  ASTHMA_RISK = "천식폐질환",
  COLD_RISK = "감기",
  POLLEN_RISK = "꽃가루",
  STROKE_RISK = "뇌졸증",
  FOOD_POISONING_RISK = "식중독",
}

export enum KOREAN_DATES {
  오늘 = 1,
  내일,
  모레,
  글피,
}

export enum DATES {
  today = 1,
  tomorrow,
  dayaftertomorrow,
  twodaysaftertomorrow,
}

export enum RISK_STEPS {
  "알 수 없음" = -1,
  낮음,
  보통,
  높음,
  "매우 높음",
}
